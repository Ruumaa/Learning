'use client';
import useSWR from 'swr';
import Filter from './{components}/Filter';
import TicketCard from './{components}/TicketCardComponent/TicketCard';
import { useState } from 'react';
import { NextResponse } from 'next/server';
// import { authOptions } from '@/lib/auth';
// import { getServerSession } from 'next-auth';
// import Link from 'next/link';
import User from './{components}/User';
// import { useSession } from 'next-auth/react';

const fetcher = (url) => fetch(url).then((r) => r.json());
export default function Home() {
  const [filter, setFilter] = useState(null);
  const { data, error, isLoading } = useSWR(
    'http://localhost:3000/api/ticket/',
    fetcher
  );
  if (error) {
    return NextResponse.json(
      { message: 'Failed fetch GET data' },
      { status: 500 }
    );
  }
  if (isLoading) {
    return (
      <div className="flex">
        <span className="loading loading-dots loading-lg mx-auto items-center h-screen"></span>
      </div>
    );
  }

  const tickets = data;

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  const filteredTickets = filter
    ? tickets.data.filter((ticket) => ticket.priority === filter)
    : tickets.data;

  return (
    <>
      <div>
        <Filter onFilterChange={handleFilterChange} />
      </div>

      <div className="sm:grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 items-center">
        {filteredTickets.length !== 0 ? (
          filteredTickets.map((ticket) => (
            <TicketCard ticket={ticket} key={ticket.id} />
          ))
        ) : (
          <div className="text-xl font-bold font-serif text-center">
            {/* {session.user} */}
            Ticket Not Found
            <User />
          </div>
        )}
      </div>
    </>
  );
}
