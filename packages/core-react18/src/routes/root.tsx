import { useEffect } from "react";
import { Form, NavLink, Outlet, redirect, useLoaderData, useNavigation, useSubmit, } from "react-router-dom";
import { ActionFunctionArgs, Contact, createContact, getContacts } from "../contacts";
import { apps } from "./micro-app";

export async function action() {
  const contact = await createContact();
  return redirect(`/contacts/${contact.id}/edit`);
}

export async function loader({ request }: ActionFunctionArgs) {
  const url = new URL(request.url);
  const q = url.searchParams.get('q') as string;
  const contacts = await getContacts(q);
  return { contacts, q };
}

export default function Root() {
  const { contacts, q } = useLoaderData() as { contacts: Contact[], q: string };
  const navigation = useNavigation();
  const submit = useSubmit();

  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has(
      'q'
    );

  useEffect(() => {
    const input = document.getElementById('q') as HTMLInputElement | null;
    if (input !== null) {
      input.value = q; // 👉️ "Initial Value"
    }
  }, [q]);

  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <Form id="search-form" role="search">
            <input
              id="q"
              className={searching ? "loading" : ""}
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
              defaultValue={q}
              onChange={(event) => {
                const isFirstSearch = q == null;
                submit(event.currentTarget.form, {
                  replace: !isFirstSearch,
                });
              }}
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={!searching}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
          </Form>
          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>
        <nav>
          <ul>
            {apps.map((item) => (
              <li key={item.name}>
                <NavLink to={`/${item.name}`}
                         className={({ isActive, isPending }) =>
                           isActive
                             ? "active"
                             : isPending
                             ? "pending"
                             : ""
                         }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
          {contacts.length ? (
            <ul>
              {contacts.map((contact: Contact) => (
                <li key={contact.id}>
                  <NavLink to={`contacts/${contact.id}`}
                           className={({ isActive, isPending }) =>
                             isActive
                               ? "active"
                               : isPending
                               ? "pending"
                               : ""
                           }
                  >
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                    {contact.favorite && <span>★</span>}
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>
      </div>
      <div id="detail"
           className={
             navigation.state === "loading" ? "loading" : ""
           }
      >
        <Outlet/>
      </div>
    </>
  );
}
