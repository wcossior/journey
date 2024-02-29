import React, { useEffect } from 'react';
import './main.css';
import destinations from './Data';
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Main = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className='main container section'>

      <div className="secTitle">
        <h3 data-aos='fade-right'  className="title">
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {
          destinations.map(({ id, imgSrc, descTitle, location, grade, fees, description }) => {
            return (
              <div data-aos='fade-up' key={id} className="singleDestination">

                <div className="imageDiv">
                  <img src={imgSrc} alt={descTitle}></img>
                </div>

                <div className="cardInfo">
                  <h4 className="desTitle">
                    {descTitle}
                  </h4>
                </div>

                <span className="continent flex">
                  <HiOutlineLocationMarker className='icon' />
                  <span className='name'>{location}</span>
                </span>

                <div className="fees flex">
                  <div className="grade">
                    <span>{grade}<small>+1</small></span>
                  </div>

                  <div className="price">
                    <h5>{fees}</h5>
                  </div>
                </div>

                <div className="desc">
                  <p>{description}</p>
                </div>

                <button className='btn flex'>
                  DETAILS<HiOutlineClipboardCheck className='icon' />
                </button>

              </div>
            );
          })
        }
      </div>

    </section>
  )
}

export default Main