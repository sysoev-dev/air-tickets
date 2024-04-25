import { TicketItemProps } from './types';
import turkishLogo from '/turkish-logo.svg';
import './style.css';

export function TicketItem({ ticket }: TicketItemProps) {
  function getTransferSuffix(count: number) {
    switch (count) {
      case 0:
        return ' Пересадок';
      case 1:
        return ' Пересадка';
      default:
        return ' Пересадки';
    }
  }
  return (
    <li className='ticket__item'>
      <div className='ticket__item-left'>
        <img
          width={100}
          className='ticket__item-img'
          src={turkishLogo}
          alt='Turkish logo'
        />
        <button className='ticket__item-btn'>
          <span className='ticket__item-btn-span'>Купить</span> за {''}
          {ticket.price}
        </button>
      </div>
      <div className='ticket__item-right'>
        <div className='ticket__departure'>
          <p className='ticket__time'>{ticket.departure_time}</p>
          <p className='ticket__city'>
            {ticket.origin}, {ticket.origin_name}
          </p>
          <p className='ticket__date'>{ticket.departure_date}</p>
        </div>
        <div className='ticket__transfer'>
          {ticket.stops} {getTransferSuffix(ticket.stops)}
        </div>
        <div className='ticket__arrival'>
          <p className='ticket__time'>{ticket.arrival_time}</p>
          <p className='ticket__city'>
            {ticket.destination_name}, {ticket.destination}
          </p>
          <p className='ticket__date'>{ticket.arrival_date}</p>
        </div>
      </div>
    </li>
  );
}
