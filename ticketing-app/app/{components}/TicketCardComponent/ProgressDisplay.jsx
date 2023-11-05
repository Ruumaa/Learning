const ProgressDisplay = () => {
  return (
    <div>
      <p>08/31/23 10:43PM</p>
      <progress
        className="progress progress-info w-full"
        value="75"
        max="100"
      ></progress>
    </div>
  );
};

export default ProgressDisplay;
