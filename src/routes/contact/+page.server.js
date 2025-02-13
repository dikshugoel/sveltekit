import { invalid, redirect } from "@sveltejs/kit";

let contacts = [
  {
    id: "de393e6a-1c08-4e6e-9aad-0994fcf0d981",
    name: "John Doe",
    email: "john.doe@example.com",
    company: "Example Corp",
    job: "Software Engineer",
  },
];

export function load() {
  return { contacts };
}

export const actions = {
  create: async ({ request }) => {
    const formData = await request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const company = formData.get("company");
    const job = formData.get("job");

    // if (name.length < 2) {
    //   return invalid(400, {
    //     error: true,
    //     message: "Name Must be atleast 2 characters long",
    //     name,
    //     email,
    //     company,
    //     job,
    //   });
    // }

    const id = crypto.randomUUID();
    const contact = {
      id,
      name,
      email,
      company,
      job,
    };
    contacts.push(contact);
    return { success: true };
    //redirect(303, `/`);
  },
  delete: async ({ request }) => {
    const formData = await request.formData();
    const id = formData.get("id");
    //console.log(id);
    contacts = contacts.filter((contact) => contact.id !== id);
    return { success: true };
  },
};
