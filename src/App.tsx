import './App.css';
import { Filter } from './components/filter';
import { TicketsList } from './components/tickets-list';
import ticketsList from './api/tickets.json';
import { useEffect, useState } from 'react';

function App() {
  const [tickets, setTickets] = useState(ticketsList.tickets);
  const [filter, setFilter] = useState({
    transferAll: true,
    transfer0: false,
    transfer1: false,
    transfer2: false,
    transfer3: false,
  });

  useEffect(() => {
    const filteredData = tickets.filter((item) => {
      console.log(
        Object.keys(filter).some((category) => {
          let transferCount = -1;

          switch (category) {
            case 'transfer0':
              transferCount = 0;
              break;

            default:
              break;
          }
          console.log(category);
        })
      );
    });
  }, [filter]);

  // const filteredTickets = tickets.filter((item) => {
  //   // Проверка, отмечен ли хотя бы один из чекбоксов
  //   const isCheckedCategory = Object.values(filter).some(
  //     (category) => category
  //   );

  //   if (isCheckedCategory) {
  //     // return Object.keys(filter).some(
  //     //   (category) => item[category] && filter[category]
  //     // );
  //     console.log(Object.keys(filter).some((item) => item));
  //   }

  //   return true;

  //   // // if (checkedCategory) {
  //   // //   return Object.keys(filter).some((category) => item[category] && filter[category]);
  //   // // }

  //   // // // Если ни один чекбокс не отмечен, возвращаются все элементы данных
  //   // //
  //   console.log(item);
  // });

  return (
    <section className='tickets'>
      <Filter filter={filter} setFilter={setFilter} />
      <TicketsList tickets={tickets} />
    </section>
  );
}

export default App;
