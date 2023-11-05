import { faFireAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const PriorityDisplay = () => {
  return (
    <div className="space-x-px">
      <FontAwesomeIcon
        icon={faFireAlt}
        className="text-orange-600 hover:text-orange-500"
      />
      <FontAwesomeIcon
        icon={faFireAlt}
        className="text-orange-600 hover:text-orange-500"
      />
      <FontAwesomeIcon
        icon={faFireAlt}
        className="text-orange-600 hover:text-orange-500"
      />
      <FontAwesomeIcon
        icon={faFireAlt}
        className="text-orange-600 hover:text-orange-500"
      />
      <FontAwesomeIcon
        icon={faFireAlt}
        className="text-orange-600 hover:text-orange-500"
      />
    </div>
  );
};

export default PriorityDisplay;
