import React from 'react';

const CellComponent = ({posY, posX}) => {

  const styles = {
    top:`${posY}px`,
    left: `${posX}px`,
    position: 'absolute',
    width: '50px',
    height: '50px',
    backgroundColor: 'yellow',
    borderRadius: '50%',
  };

  return (
    <div
      id={`${posY},${posX}`}
      style={styles}
      key={`${posY},${posX}`}
    ></div>
  )
}
     
export default CellComponent