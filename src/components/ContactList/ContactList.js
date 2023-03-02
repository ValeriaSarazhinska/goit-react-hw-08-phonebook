import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { selectVisibleContacts } from '../../redux/contacts/selectors';
import styled from '@mui/material/styles/styled';

export const List = styled('ul')({
  marginTop: '30px',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});

export const Item = styled('li')({
  alignItems: 'center',
  display: 'flex',
  width: '500px',
  gap: '10px',
});
const Button = styled('button')({
  cursor: 'pointer',
  padding: '6px 6px',
  backgroundColor: 'orangered',
  color: 'white',
  fontWeight: 500,
  borderRadius: 5,
  border: 'none',
  display: 'flex',
  justifyContent: 'flex-end',
  '&:hover': {
    backgroundColor: 'red',
  },
});
export const Name = styled('span')({
  fontWeight: 'bold',
  color: 'midnightblue',
});

export const Information = styled('div')({
  border: '1px midnightblue solid',
  padding: '3px',
  borderRadius: '5px',
  alignItems: 'center',
  display: 'flex',
  gap: '10px',
});

const Img = styled('img')({
  width: 25,
});


const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectVisibleContacts);

  return (
    <List>
      {filteredContacts.map(contact => {
        return (
          <Item key={contact.id}>
            <Information>
              <Img
                src={'https://cdn-icons-png.flaticon.com/512/2354/2354573.png'}
                alt="icon"
              />
              <Name>{contact.name}</Name> {contact.number}
            </Information>
            <Button
              type="button"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </Button>
          </Item>
        );
      })}
    </List>
  );
};
export default ContactList;
