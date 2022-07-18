import React from 'react';
const Empty = ({children, ...rest}) => {
  const jsStyle = {width: 150, height: 2, backgroundColor: '#C00'};
  return (
    <>
      <p>First paragraph</p>
      <p>Seccond paragraph</p>
      <p>
        {children}, {rest.calculatedValue}
      </p>
      <div>
        {[1, 1, 2, 3].map((num, i) => (
          <React.Fragment key={i}>
            <p>The current number is:{num}</p>
            <div style={jsStyle} />
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default Empty;
