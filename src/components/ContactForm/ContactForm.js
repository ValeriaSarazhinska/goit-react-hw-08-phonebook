import { useState } from 'react';
import { addContact } from '../../redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix';
import { selectContacts } from '../../redux/contacts/selectors';
import styled from '@mui/material/styles/styled';

export const Form = styled('form')({
  display: 'flex',
  gap: 20,
  alignItems: 'center',
  justifyContent: 'left',
});

export const Button = styled('button')({
  backgroundColor: 'forestgreen',
  border: 'none',
  color: '#fff',
  borderRadius: 5,
  cursor: 'pointer',
  flexDirection: 'column',
  fontSize: 15,
  fontWeight: 500,
  marginRight: 15,
  padding: '10px 15px',
  textAlign: 'center',
  textTransform: 'capitalize',
  '&:hover': {
    backgroundColor: 'green',
  },
});
export const Input = styled('input')({
  backgroundColor: 'transparent',
  border: '1px solid darkblue',
  fontSize: 14,
  height: 30,
  lineHeight: 1.14,
  width: 170,
  borderRadius: 5,
});

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const handleChangeName = event => {
    const { value } = event.currentTarget;
    setName(value);
  };

  const handleChangeNumber = event => {
    const { value } = event.currentTarget;
    setNumber(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const duplicate = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (duplicate) return Notify.failure(`${name} is already in contacts`);
    dispatch(addContact({ name, number }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={name}
        onChange={handleChangeName}
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Name"
      />
      <Input
        type="tel"
        value={number}
        onChange={handleChangeNumber}
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder="Number"
      />
      <Button type="submit">
        + Add contact
      </Button>
    </Form>
  );
};
