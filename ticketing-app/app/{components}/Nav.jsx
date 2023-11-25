import { faHome, faTicket, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const Nav = () => {
  return (
    <nav className="flex justify-between mx-7 h-16 items-center">
      <div className="space-x-4">
        <Link href="/">
          <FontAwesomeIcon icon={faHome} className="icon " />
        </Link>
        <Link href="/ticket/create">
          {/* <FontAwesomeIcon icon={faPlus} className=" mr-1 " /> */}
          <FontAwesomeIcon
            icon={faTicket}
            className="icon hover:text-slate-500"
          />
        </Link>
      </div>
      <div>
        <p className="text-default-text cursor-pointer hover:text-blue-900">
          john@mail.com
        </p>
      </div>
    </nav>
  );
};

export default Nav;
