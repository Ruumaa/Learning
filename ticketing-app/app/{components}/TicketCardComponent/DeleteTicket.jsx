'use client';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { mutate } from 'swr';

const DeleteTicket = ({ id, title }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const handleModal = () => {
    setIsOpen(!isOpen);
  };
  const handleDelete = async (id) => {
    await fetch(`http://localhost:3000/api/ticket/${id}`, {
      method: 'DELETE',
    });
    toast.success('Delete ticket success');
    router.push('/');
    mutate('http://localhost:3000/api/ticket/');
    setIsOpen(false);
  };

  return (
    <>
      <FontAwesomeIcon
        icon={faTrash}
        className="icon text-red-500 cursor-pointer hover:text-red-600"
        onClick={handleModal}
      />
      <div className={isOpen ? 'modal modal-open' : 'modal'}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Are you sure to delete <span className="capitalize">{title}</span>?
          </h3>
          <div className="modal-action gap-3">
            <button
              type="button"
              className="btn btn-outline "
              onClick={handleModal}
            >
              No
            </button>
            <button
              type="button"
              className="btn btn-outline btn-error"
              onClick={() => handleDelete(id)}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteTicket;
