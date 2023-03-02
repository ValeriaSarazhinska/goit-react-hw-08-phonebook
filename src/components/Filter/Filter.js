import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from '../../redux/contacts/contactSlice';
import { selectFilter } from '../../redux/contacts/selectors';
import styled from '@mui/material/styles/styled';

export const Input = styled('input')({
  backgroundColor: 'transparent',
  border: '1px solid darkblue',
  fontSize: '14px',
  height: ' 30px',
  lineHeight: '1.14',
  width: '170px',
  borderRadius: '5px',
});

export function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilter = event => {
    dispatch(filterContacts(event.target.value));
  };
  return (
    <Input
      type='text'
      value={filter}
      onChange={handleFilter}
      name='filter'
      placeholder='Filter'
    />
  );
}
