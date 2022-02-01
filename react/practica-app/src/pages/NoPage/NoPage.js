import React from 'react';

import styles from './NoPage.module.scss';

const NoPage = () => {

  return (
    <img 
        className={styles.image}
        src="https://th.bing.com/th/id/R.659f45078ba8eef886bd3998dff971a8?rik=672%2fc1g7GTrBHw&pid=ImgRaw&r=0&sres=1&sresct=1" 
        alt="notfound">   
    </img>
  );
};

export default NoPage;