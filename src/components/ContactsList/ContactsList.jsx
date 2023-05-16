import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { getContacts, getError, getIsLoading } from 'redux/selectors';
import { getFilter } from 'redux/selectors';
import { List } from './ContactListStyle';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  const getVisibleContacts = (contacts, filter) => {
    console.log(isLoading);
    return contacts.filter(
      contact =>
        contact.name &&
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <List>
      {isLoading && !error && <b>Loading...</b>}
      {error && <p>Oops, something went wrong</p>}
      {visibleContacts.map(({ id, name, phone, onClick }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={phone}
          onClick={() => onClick(id)}
        />
      ))}
    </List>
  );
};
