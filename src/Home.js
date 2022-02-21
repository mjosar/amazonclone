import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className='home'> 
        <div className='home__container'>
            <img className="home__image"
                src="https://m.media-amazon.com/images/I/611TlXXPQWL._SX1500_.jpg"
                alt=""
            />

        </div>

        <div className="home__row">
            <Product/>
            {/*product*/}
            {/*product*/}
            {/*product*/}
        </div>

        <div className="home__row">
            {/*product*/}
            {/*product*/}
            {/*product*/}
            {/*product*/}
        </div>

        <div className="home__row">
            {/*product*/}
            {/*product*/}
            {/*product*/}
            {/*product*/}
        </div>

        <div className="home__row">
            {/*product*/}
            {/*product*/}
            {/*product*/}
            {/*product*/}
        </div>
   
    
    </div>
  )
}

export default Home