import Link from 'next/link';
import DeleteTicket from './DeleteTicket';
import EditTicket from './EditTicket';
import PriorityDisplay from './PriorityDisplay';
import ProgressDisplay from './ProgressDisplay';
import StatusDisplay from './StatusDisplay';

const TicketCard = ({ ticket }) => {
  return (
    <div className="bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <PriorityDisplay priority={ticket.priority} />
        <div className="ml-auto flex">
          <Link href={`/ticket/edit/${ticket.id}`}>
            <EditTicket />
          </Link>
          <DeleteTicket id={ticket.id} title={ticket.title} />
        </div>
      </div>
      <Link href={`/ticket/${ticket.id}`}>
        <h4 className="capitalize hover:text-slate-800 ">{ticket.title}</h4>
      </Link>

      <hr className="h-px border-0 bg-page mb-2" />
      <div className="bg-slate-300 w-full rounded-md min-h-12 py-4 pr-4 pl-1">
        <p className=" text-black truncate">{ticket.description}</p>
      </div>
      <div className="flex flex-row justify-between mt-3 items-center lg:items-end">
        <ProgressDisplay progress={ticket.progress} time={ticket.createdAt} />
        <StatusDisplay status={ticket.status} />
      </div>
    </div>
  );
};

export default TicketCard;
