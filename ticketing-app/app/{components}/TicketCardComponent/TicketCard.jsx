import DeleteTicket from './DeleteTicket';
import PriorityDisplay from './PriorityDisplay';
import ProgressDisplay from './ProgressDisplay';
import StatusDisplay from './StatusDisplay';

const TicketCard = () => {
  return (
    <div className="bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <PriorityDisplay />
        <div className="ml-auto">
          <DeleteTicket />
        </div>
      </div>
      <h4>Ticket Title</h4>
      <hr className="h-px border-0 bg-page mb-2" />
      <div className="bg-slate-300 w-full rounded-md min-h-12 py-4 pr-4 pl-1">
        <p className="whitespace-pre-wrap text-black">
          This is ticket description
        </p>
      </div>
      <div className="flex flex-row justify-between mt-3 items-center lg:items-end">
        <ProgressDisplay />
        <StatusDisplay />
      </div>
    </div>
  );
};

export default TicketCard;
