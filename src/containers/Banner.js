import React from 'react'


const Banner = props => {
  const { type } = props;
  console.log(props)

  if (type === "info") {
    return <div className="info-banner">I am an info banner</div>;
  }
};

export default React.memo(Banner)