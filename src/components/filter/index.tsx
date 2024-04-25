import { FilterCurrency } from '../filter-currency';
import './style.css';

export function Filter() {
  return (
    <aside className='tickets__filter'>
      <FilterCurrency />
    </aside>
  );
}
