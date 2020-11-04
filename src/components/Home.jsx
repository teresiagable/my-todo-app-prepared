import React, { useRef } from 'react';
import DisplayContextComponent from './DisplayContextComponent';
const Home = (props) => {
  const defaultTitle = useRef(document.title);

  document.title = 'Home';
  return (
    <div>
      <DisplayContextComponent />
      <h1>Chas Academy</h1>
      <p className='lead'>Study study study</p>
    </div>
  );
};
export default Home;