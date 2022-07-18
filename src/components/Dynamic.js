const Dynamic = () => {
  let res = null;
  if (1 < 2) {
    res = <p>true</p>;
  } else {
    res = <p>false</p>;
  }

  return (
    <>
      <div>Element variable {res}</div>
      <p>?: {1 < 2 ? 'yes' : 'no'}</p>
      <p>{1 < 2 && 'short circuit'}</p>
    </>
  );
};

export default Dynamic;
