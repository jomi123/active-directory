import {
  DateField,
  EmailField,
  ReferenceField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";

export const EmployeeShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <DateField source="created_at" />
      <TextField source="name" />
      <EmailField source="email" />
      <ReferenceField source="project_id" reference="projects"/>
    </SimpleShowLayout>
  </Show>
);
