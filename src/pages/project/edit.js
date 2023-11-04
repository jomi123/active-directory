import { DateInput, Edit, SimpleForm, TextInput } from "react-admin";

export const ProjectEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled/>
      <DateInput source="created_at" disabled/>
      <TextInput source="title" />
      <TextInput source="account" />
    </SimpleForm>
  </Edit>
);
