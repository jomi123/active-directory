import {
  Datagrid,
  DateField,
  EmailField,
  List,
  ReferenceField,
  TextField,
} from "react-admin";

export const EmployeeList = () => (
  <List>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <DateField source="created_at" />
      <TextField source="name" />
      <EmailField source="email" />
      <ReferenceField source="project_id" reference="projects"/>
    </Datagrid>
  </List>
);
