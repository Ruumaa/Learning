'use client';

import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const EditTicket = () => {
  return (
    <FontAwesomeIcon
      icon={faPenToSquare}
      className="mr-3 icon text-slate-300 hover:text-slate-400 cursor-pointer"
    />
  );
};

export default EditTicket;
