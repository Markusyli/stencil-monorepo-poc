import { useState } from "react"
import { MyRow, MyCol, MyTextInput, MyButton } from "react-library"

const ContactForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [address, setAddress] = useState('')

  return (
    <MyRow>
      <MyCol size={6}>
        <MyTextInput label='First name' name='first-name' value={firstName} onValueChanged={(e) => setFirstName(e.target.value)} />
      </MyCol>
      <MyCol size={6}>
        <MyTextInput label='Last name' name='last-name' value={lastName} onValueChanged={(e) => setLastName(e.target.value)} />
      </MyCol>
      <MyCol size={12}>
        <MyTextInput label='Street address' name='street-address' value={address} onValueChanged={(e) => setAddress(e.target.value)} />
      </MyCol>
      <MyCol size={12}>
        <MyButton>Submit</MyButton>
      </MyCol>
    </MyRow>
  )
}

export default ContactForm
