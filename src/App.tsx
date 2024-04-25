import './App.css';
import { Filter } from './components/filter';
import { TicketsList } from './components/tickets-list';
import ticketsList from './api/tickets.json';

function App() {
  return (
    <section className='tickets'>
      <Filter />
      <TicketsList tickets={ticketsList.tickets} />
    </section>
  );
}

export default App;
