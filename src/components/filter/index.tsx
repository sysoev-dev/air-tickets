import './style.css';
import { FilterCurrency } from '../filter-currency';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import { FilterProps } from './types';

export function Filter({ transfers, setTransfers }: FilterProps) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = Number(event.target.value);
    if (event.target.checked) {
      setTransfers([...transfers, value]);
    } else {
      setTransfers(transfers.filter((item) => item !== value));
    }
  }
  return (
    <aside className='tickets__filter'>
      <FilterCurrency />
      <Typography
        mt={2}
        textAlign={'left'}
        fontWeight={'bold'}
        textTransform={'uppercase'}
        variant='subtitle2'
        gutterBottom
      >
        Количество пересадок
      </Typography>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={transfers.some((count) => count === -1)}
              onChange={handleChange}
            />
          }
          label='Все'
          value='-1'
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={transfers.some((count) => count === 0)}
              onChange={handleChange}
            />
          }
          label='Без пересадок'
          value='0'
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={transfers.some((count) => count === 1)}
              onChange={handleChange}
            />
          }
          label='1 пересадка'
          value='1'
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={transfers.some((count) => count === 2)}
              onChange={handleChange}
            />
          }
          label='2 пересадки'
          value='2'
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={transfers.some((count) => count == 3)}
              onChange={handleChange}
            />
          }
          label='3 пересадки'
          value='3'
        />
      </FormGroup>
    </aside>
  );
}
