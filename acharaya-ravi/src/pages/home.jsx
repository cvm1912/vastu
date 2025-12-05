import React from 'react'

const Home = () => {
  console.log('Home component is rendering');
  return (
    <div style={{backgroundColor: 'red', padding: '20px'}}>
        <h1 className='text-3xl' style={{color: 'white'}}>home page</h1>
    </div>
  )
}

export default Home
