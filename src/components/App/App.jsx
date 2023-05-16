import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { FilterContacts } from 'components/Filter/Filter';
import { Container, ContactSection } from 'components/App/AppStyled';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <ContactForm />
      <ContactSection>
        <FilterContacts />
        <ContactsList />
      </ContactSection>
    </Container>
  );
};

export default App;
