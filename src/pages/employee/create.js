import {
  Create,
  ReferenceInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const EmployeeCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" required/>
      <TextInput source="email" required/>
      <ReferenceInput source="project_id" reference="projects" />
    </SimpleForm>
  </Create>
);
