const StatusDisplay = ({ status }) => {
  return (
    <div>
      {status === 'Starting' ? (
        <div className="badge">{status}</div>
      ) : null || status === 'On Progress' ? (
        <div className="badge badge-info">{status}</div>
      ) : null || status === 'Finished' ? (
        <div className="badge badge-success">{status}</div>
      ) : (
        <div className="badge">{status}</div>
      )}
    </div>
  );
};

export default StatusDisplay;
