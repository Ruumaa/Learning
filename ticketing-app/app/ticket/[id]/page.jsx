import TicketCardById from '@/app/{components}/TicketCardComponent/TicketCardById';

const TicketById = async ({ params }) => {
  const response = await fetch(`http://localhost:3000/api/ticket/${params.id}`);
  const ticket = await response.json();
  return (
    <div className="flex mt-20">
      <div className="w-3/4 mx-auto ">
        <TicketCardById ticket={ticket.data} />
      </div>
    </div>
  );
};

export default TicketById;
