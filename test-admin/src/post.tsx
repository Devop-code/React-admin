import { List, Datagrid, TextField, ReferenceField, EditButton ,Create} from "react-admin";
const postFilters = [
    // eslint-disable-next-line react/jsx-key
    <TextInput source="q" label="Search" alwaysOn />,
    // eslint-disable-next-line react/jsx-key
    <ReferenceInput source="userId" label="User" reference="users" />,
];
export const PostList = () => (
    <List filters={postFilters}>
        <Datagrid rowClick={false}>
            <TextField source="id" />
            <ReferenceField source="userId" reference="users" link="show"/>
            <TextField source="title" />
             <EditButton/>
        </Datagrid>
    </List>
);


import { Edit, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

export const PostEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" inputProps={{disabled:true}}/>
            <ReferenceInput source="userId" reference="users" />
            <TextInput source="title" />
            <TextInput source="body" multiline rows={5}/>
        </SimpleForm>
    </Edit>
);
export const PostCreate = () => (
      <Create>
        <SimpleForm>
          <ReferenceInput source="userId" reference="users" />
          <TextInput source="title" />
          <TextInput source="body" multiline rows={5} />
        </SimpleForm>
     </Create>
    )