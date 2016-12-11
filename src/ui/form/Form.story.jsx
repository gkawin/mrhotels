
import React from 'react'

import FormInput from './FormInput'
import FormRow from './FormRow'
import Form from './Form'
import FormLabel from './FormLabel'

export { module }

const FrontPageSimulator = ({children}) => (
  <div
    style={{
      position: 'relative',
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <div style={{backgroundColor: 'white', padding: '15px'}}>{children}</div>
  </div>
)

FrontPageSimulator.propTypes = {
  children: React.PropTypes.node
}

export const stories = {
  'Whole Form Elements': () => (
    <FrontPageSimulator>
      <Form>
        <FormRow>
          <FormInput
            type='text'
            name='storybookInput'
            placeholder='common text'
            onChange={() => {}}
          />
        </FormRow>
        <FormRow>
          <FormInput
            type='password'
            placeholder='password field'
            name='storybookInput'
            onChange={() => {}}
          />
        </FormRow>
        <FormRow>
          <FormLabel>Password</FormLabel>
          <FormInput
            type='password'
            placeholder='password field'
            name='storybookInput'
            onChange={() => {}}
          />
        </FormRow>
      </Form>
    </FrontPageSimulator>
  ),

}