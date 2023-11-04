import { Datagrid, DateField, EmailField, ReferenceManyField, Show, SimpleShowLayout, TextField } from "react-admin";

export const ProjectShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <DateField source="created_at" />
      <TextField source="title" />
      <TextField source="account" />
      <ReferenceManyField label="Employees" reference="employees" target="project_id">
        <Datagrid rowClick="show">
          <TextField source="name" />
          <EmailField source="email" />
        </Datagrid>
      </ReferenceManyField>
    </SimpleShowLayout>
  </Show>
);
