import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { getContacts } from 'redux/selectors';
import { getFilter } from 'redux/selectors';
import { List } from './ContactListStyle';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getVisibleContacts = (contacts, filter) => {
    console.log(contacts);
    return contacts.filter(
      contact =>
        contact.name &&
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <List>
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
