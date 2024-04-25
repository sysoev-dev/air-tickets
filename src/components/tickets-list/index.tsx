import { TicketsProps } from './types';
import { TicketItem } from '../ticket-item';
import './style.css';

export function TicketsList({ tickets }: TicketsProps) {
  const listItems = tickets.map((ticket) => (
    <TicketItem key={ticket.id} ticket={ticket} />
  ));
  return <ul className='tickets-list'>{listItems}</ul>;
}
