import TicketCard from '@/app/{components}/TicketCardComponent/TicketCard';
import React from 'react';

const Ticket = ({ params }) => {
  return (
    <div className="md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <TicketCard />
      <TicketCard />
      <TicketCard />
    </div>
  );
};

export default Ticket;
