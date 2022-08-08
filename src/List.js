import React from 'react';
import Data from './data';
const List = (props) => {
  return (
    <>
      {props.people.map(data => 
        <article key={data.id} className='person'>
        <img src={data.image} alt='something went wrong please try later'/>
        <div>
        <h4>{data.name}</h4>
       <p>{data.age} years</p>
        </div>
       </article>
      )}
    </>
  );
};

export default List;
