const ProgressDisplay = ({ progress, time }) => {
  const date = new Date(time);
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: 'short',
  };
  const formattedDate = date.toLocaleDateString('id-ID', options);
  return (
    <div>
      <p>{formattedDate}</p>
      {progress < 35 ? (
        <progress className="progress w-full" value={progress} max="100" />
      ) : null || progress < 80 ? (
        <progress
          className="progress progress-info w-full"
          value={progress}
          max="100"
        />
      ) : null || progress >= 80 ? (
        <progress
          className="progress progress-success w-full"
          value={progress}
          max="100"
        />
      ) : null}
    </div>
  );
};

export default ProgressDisplay;
