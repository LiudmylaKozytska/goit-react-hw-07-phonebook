import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

import { Title, Input } from 'components/ContactForm/ContactFormStyle';
import { Label } from './FilterStyle';

export const FilterContacts = () => {
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <>
      <Title>Contacts</Title>
      <Label>
        Find contacts by name
        <Input
          type="text"
          placeholder="Type name"
          onChange={handleFilterChange}
        ></Input>
      </Label>
    </>
  );
};
