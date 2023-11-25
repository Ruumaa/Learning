'use client';
import { faFireAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PriorityDisplay = ({ priority }) => {
  const icons = [];

  for (let i = 0; i < priority; i++) {
    icons.push(<FontAwesomeIcon key={i} icon={faFireAlt} />);
  }
  return icons.length > 3 ? (
    <div className="space-x-px text-orange-500 hover:text-orange-600">
      {icons}
    </div>
  ) : null || icons.length === 3 ? (
    <div className="space-x-px text-orange-400 hover:text-orange-500">
      {icons}
    </div>
  ) : null || icons.length <= 2 ? (
    <div className="space-x-px text-orange-300 hover:text-orange-400">
      {icons}
    </div>
  ) : null;
};

export default PriorityDisplay;
