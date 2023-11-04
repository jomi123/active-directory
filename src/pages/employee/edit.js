import {
  DateInput,
  Edit,
  ReferenceInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const EmployeeEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled/>
      <DateInput source="created_at" disabled />
      <TextInput source="name" />
      <TextInput source="email" />
      <ReferenceInput source="project_id" reference="projects"/>
    </SimpleForm>
  </Edit>
);
