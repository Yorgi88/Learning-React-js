const ErrorExample = () => {
  let count = 0;

  const handleClick = () => {
    count += 1;
    console.log(count);
  }
  return (
    <div>
    <h2>{count}</h2>
    <button type="button" onClick={handleClick}>Increase</button>
    {/* but after all that, the output is stagnant, so we have to fix that */}
    {/* The reason is we're not trigerring the re-render, we're gonna use-State hooks for that */}
    </div>
  );
};

export default ErrorExample;
