import './App.css';
import { Filter } from './components/filter';
import { TicketsList } from './components/tickets-list';
import { useState } from 'react';
import tickets from './api/tickets.json';
import turkishLogo from '/turkish-logo.svg';

function App() {
  const [transfers, setTransfers] = useState([0, 1, 2]);
  const filteredTickets = tickets.tickets
    .sort((a, b) => a.price - b.price)
    .filter(({ stops }) => {
      const isTransfers = transfers.includes(-1);
      if (isTransfers || transfers.length == 0) {
        return tickets;
      }
      return transfers.includes(stops);
    });

  return (
    <>
      <img src={turkishLogo} alt='turkish logo' />
      <section className='tickets'>
        <Filter transfers={transfers} setTransfers={setTransfers} />
        <TicketsList tickets={filteredTickets} />
      </section>
    </>
  );
}

export default App;
