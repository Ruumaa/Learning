'use client';

import { useState } from 'react';
import TicketCard from './TicketCardComponent/TicketCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faFireAlt } from '@fortawesome/free-solid-svg-icons';

const Filter = ({ tickets, onFilterChange }) => {
  const [filter, setFilter] = useState(null);
  const [active, setActive] = useState(null);
  const [filtering, setFiltering] = useState(false);

  const handleFilter = (selectedFilter) => {
    setFilter(selectedFilter);
    setFiltering(true);
    setActive(selectedFilter);
    onFilterChange(selectedFilter); //passing filter value
  };

  const clearFilter = () => {
    setFilter(null);
    setFiltering(false);
    setActive(null);
    onFilterChange(null);
  };

  const priorityIcons = (count, color) => {
    let icons = [];
    for (let i = 0; i < count; i++) {
      icons.push(<FontAwesomeIcon icon={faFireAlt} key={i} />);
    }
    return <div className={`${color} flex`}>{icons}</div>;
  };

  return (
    <div>
      <div className="dropdown">
        <label tabIndex={0} className="btn mt-5 capitalize">
          Filter by priority{' '}
          <span className="">
            <FontAwesomeIcon icon={faCaretDown} />
          </span>
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-36"
        >
          <li onClick={clearFilter}>
            <a
              className={`cursor-pointer hover:bg-slate-500  active:bg-slate-600 ${
                active === null ? 'bg-slate-600' : ''
              }`}
            >
              All Tickets
            </a>
          </li>
          <li
            onClick={() => {
              handleFilter(5);
            }}
          >
            <a
              className={`cursor-pointer hover:bg-slate-500  active:bg-slate-600 ${
                active === 5 ? 'bg-slate-600' : ''
              }`}
            >
              {priorityIcons(5, 'text-orange-500')}
            </a>
          </li>
          <li
            onClick={() => {
              handleFilter(4);
            }}
          >
            <a
              className={`cursor-pointer hover:bg-slate-500  active:bg-slate-600 ${
                active === 4 ? 'bg-slate-600' : ''
              }`}
            >
              {priorityIcons(4, 'text-orange-500')}
            </a>
          </li>
          <li
            onClick={() => {
              handleFilter(3);
            }}
          >
            <a
              className={`cursor-pointer hover:bg-slate-500  active:bg-slate-600 ${
                active === 3 ? 'bg-slate-600' : ''
              }`}
            >
              {priorityIcons(3, 'text-orange-400')}
            </a>
          </li>
          <li
            onClick={() => {
              handleFilter(2);
            }}
          >
            <a
              className={`cursor-pointer hover:bg-slate-500  active:bg-slate-600 ${
                active === 2 ? 'bg-slate-600' : ''
              }`}
            >
              {priorityIcons(2, 'text-orange-300')}
            </a>
          </li>
          <li
            onClick={() => {
              handleFilter(1);
            }}
          >
            <a
              className={`cursor-pointer hover:bg-slate-500  active:bg-slate-600 ${
                active === 1 ? 'bg-slate-600' : ''
              }`}
            >
              {priorityIcons(1, 'text-orange-300')}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Filter;
