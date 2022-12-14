import localforage from "localforage";
import { matchSorter } from "match-sorter";
// @ts-ignore
import sortBy from "sort-by";

export type Params<Key extends string = string> = {
  readonly [key in Key]: string | undefined;
};

export interface ActionFunctionArgs {
  request: Request;
  params: Params;
}

export interface Contact {
  id?: string;
  contactId?: string;
  avatar?: string;
  first?: string;
  twitter?: string;
  notes?: string;
  last?: string;
  createdAt?: number;
  favorite?: boolean;
}

interface FakeCache {
  [x: string]: any;
}

export async function getContacts(query?: string) {
  await fakeNetwork(`getContacts:${query}`);
  let contacts: Contact[] = await localforage.getItem("contacts") || [];
  if (query) {
    contacts = matchSorter(contacts, query, { keys: ["first", "last"] });
  }
  return contacts.sort(sortBy("last", "createdAt"));
}

export async function createContact() {
  await fakeNetwork();
  let id = Math.random().toString(36).substring(2, 9);
  let contact = { id, createdAt: Date.now() };
  let contacts = await getContacts();
  contacts.unshift(contact);
  await set(contacts);
  return contact;
}

export async function getContact(id?: string): Promise<Contact | undefined> {
  if (!id) return;
  await fakeNetwork(`contact:${id}`);
  const contacts:  Contact[] = await localforage.getItem("contacts") || [];
  return contacts.find(contact => contact.id === id);
}

export async function updateContact(id: string, updates: Contact) {
  await fakeNetwork();
  const contacts: Contact[] = await localforage.getItem("contacts") || [];
  let contact = contacts.find(contact => contact.id === id);
  if (!contact) throw new Error(`No contact found for ${id}`);
  Object.assign(contact, updates);
  await set(contacts);
  return contact;
}

export async function deleteContact(id?: string) {
  if(!id) return;
  const contacts: Contact[] = await localforage.getItem("contacts") || [];
  let index = contacts.findIndex(contact => contact.id === id);
  if (index > -1) {
    contacts.splice(index, 1);
    await set(contacts);
    return true;
  }
  return false;
}

function set(contacts: Contact[]) {
  return localforage.setItem("contacts", contacts);
}

// fake a cache so we don't slow down stuff we've already seen
let fakeCache: FakeCache = {};

async function fakeNetwork(key: string = '') {
  if (!key) {
    fakeCache = {};
  }

  if (fakeCache[key]) {
    return;
  }

  fakeCache[key] = true;
  return new Promise(res => {
    setTimeout(res, Math.random() * 800);
  });
}
