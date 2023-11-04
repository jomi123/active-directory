import { SimpleForm, TextInput,Create } from "react-admin";

export const ProjectCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="account" />
    </SimpleForm>
  </Create>
);
