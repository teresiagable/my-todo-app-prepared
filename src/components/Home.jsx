import React from 'react';

const Home = (props) => {
  return (
    <div>
      {/* <DisplayContextComponent />
      <h1>Chas Academy</h1>
      <p className='lead'>Study study study</p> */}
    </div>
  );
};



const fetchData = async () => {
  return await keepingScoreService.getAll();
};
console.log(fetchData());
export default Home;