import React from 'react';

const HeaderComponent = ({posY, posX}) => {

  const styles = {
    p:{
      color: 'white',
    },
    root: {
      width: '100%',
      height: '100px',
      backgroundColor: 'red',
    }
  };

  return (
    <div style={styles.root}>
      <p style={styles.p}>{`X: ${posX}`}</p>
      <p style={styles.p}>{`Y: ${posY}`}</p>
    </div>
  )
}
     
export default HeaderComponent