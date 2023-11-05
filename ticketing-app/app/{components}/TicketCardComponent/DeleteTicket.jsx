import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const DeleteTicket = () => {
  return (
    <div>
      <FontAwesomeIcon
        icon={faTrash}
        className="icon text-red-600 cursor-pointer hover:text-red-500"
      />
    </div>
  );
};

export default DeleteTicket;
