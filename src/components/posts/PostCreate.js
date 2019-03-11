import React from 'react'
import {
  Create,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput
} from 'react-admin'

export default props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <ReferenceInput source="author" reference="User">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
)
