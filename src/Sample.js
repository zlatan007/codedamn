import React from 'react';
import { useParams } from 'react-router-dom'

const Sample = () => {
  const {item} = useParams()
  return <div>
      {item} item was loaded
  </div>;
};

export default Sample;
