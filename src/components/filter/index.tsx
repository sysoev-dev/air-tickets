import { FilterCurrency } from '../filter-currency';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import './style.css';

export function Filter({ filter, setFilter }) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value, checked } = event.target;
    setFilter({ ...filter, [value]: checked });
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
            <Checkbox checked={filter.transferAll} onChange={handleChange} />
          }
          label='Все'
          value='transferAll'
        />
        <FormControlLabel
          control={
            <Checkbox checked={filter.transfer0} onChange={handleChange} />
          }
          label='Без пересадок'
          value='transfer0'
        />
        <FormControlLabel
          control={
            <Checkbox checked={filter.transfer1} onChange={handleChange} />
          }
          label='1 пересадка'
          value='transfer1'
        />
        <FormControlLabel
          control={
            <Checkbox checked={filter.transfer2} onChange={handleChange} />
          }
          label='2 пересадки'
          value='transfer2'
        />
        <FormControlLabel
          control={
            <Checkbox checked={filter.transfer3} onChange={handleChange} />
          }
          label='3 пересадки'
          value='transfer3'
        />
      </FormGroup>
    </aside>
  );
}
