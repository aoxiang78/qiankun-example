import { redirect } from "react-router-dom";
import { Contact, deleteContact } from "../contacts";

export async function action({ params }: {params: Contact}) {
  throw new Error("oh dang!");
  await deleteContact(params.contactId);
  return redirect("/");
}
