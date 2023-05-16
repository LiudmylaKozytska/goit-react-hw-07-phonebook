import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { alertDeleteContactSuccess } from 'components/Alert/Alert';
import { Item, Button } from './ContactItemStyle';
import { ReactComponent as DeleteIcon } from '../icons/deleteIcon.svg';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));

    alertDeleteContactSuccess(name);
  };

  return (
    <Item key={id}>
      <Button type="button" onClick={handleDelete}>
        <DeleteIcon width="20" height="20"></DeleteIcon>
      </Button>
      {name}: {number}
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
