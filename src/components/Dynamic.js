const Dynamic = () => {
  // if(undefined != var)
  let res = null;
  if (1 < 2) {
    res = <p>true</p>;
  } else {
    res = <p>false</p>;
  }

  return (
    <>
      <div>Element variable {res}</div>
      <p>?: {true ? 'yes' : 'no'}</p>
      <p>{1 < 2 && 'short circuit'}</p>
    </>
  );
};

export default Dynamic;
