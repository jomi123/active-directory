import { SimpleForm, TextInput,Create } from "react-admin";

export const ProjectCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="title" required />
      <TextInput source="account" required/>
    </SimpleForm>
  </Create>
);
