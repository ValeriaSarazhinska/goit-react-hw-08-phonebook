import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import Notification from '../Notification/Notification';
import ContactList from '../ContactList/ContactList';
import Loader from '../Loader/Loader';
import { getError, getIsLoading, selectContacts } from '../../redux/contacts/selectors';
import { fetchContacts } from '../../redux/contacts/operations';
import { Notify } from 'notiflix';

export default function Contacts() {
  const dispatch = useDispatch();
  const error = useSelector(getError);

  useEffect(()=>{
    dispatch(fetchContacts())
  },[dispatch])

  useEffect(()=>{
    if (error) return Notify.failure(`${error}`);
  },[error])


  const contacts = useSelector(selectContacts);
  const loading = useSelector(getIsLoading);

  return (
    <>
      <main>
        <div><h1>PhoneBook</h1>
        <ContactForm />
         <h2>Contacts</h2>
          {contacts.length === 0 ? (
            <Notification message="There is no contacts" />
          ) : (
            <div>
              <Filter />
              {loading ? <Loader/>: <ContactList />}
            </div>
          )}
      </div>
         </main>
    </>
  );
}
