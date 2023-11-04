import { Datagrid, DateField, List, ReferenceManyCount, TextField } from "react-admin";

export const ProjectList = () => (
  <List>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <DateField source="created_at" />
      <TextField source="title" />
      <TextField source="account" />
      <ReferenceManyCount
        label="Employees"
        reference="employees"
        target="project_id"
        link
      />
    </Datagrid>
  </List>
);
