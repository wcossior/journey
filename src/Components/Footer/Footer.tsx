import React, { useEffect } from 'react';
import './footer.css';
import footerVideo from '../../assets/video2.webm';
import { FiChevronRight, FiSend } from 'react-icons/fi';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai';
import { TbBrandTripadvisor } from 'react-icons/tb';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className='footer'>
      <div className="videoDiv">
        <video src={footerVideo} loop autoPlay muted typeof='video/mp4'></video>
      </div>

      <div className="secContent container">

        <div className="contactDiv flex">
          <div data-aos='fade-up' className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos='fade-up' type="text" placeholder='Enter email address' />
            <button data-aos='fade-up' className='btn flex' type='submit'>
              SEND<FiSend className='icon' />
            </button>
          </div>
        </div>

        <div className="footerCard flex">

          <div className="footerIntro flex">

            <div className="logoDiv">
              <a href="#" className="logo flex">
                <MdOutlineTravelExplore className='icon' /> Journey.
              </a>
            </div>


            <div data-aos='fade-up' className="footerParagraph">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, eligendi quae eum nobis ex repellat similique cupiditate. Voluptate quam optio suscipit ratione cupiditate. Amet enim illo optio repellendus obcaecati dignissimos?
            </div>

            <div data-aos='fade-up' className="footerSocials">
              <AiOutlineTwitter className='icon' />
              <AiFillYoutube className='icon' />
              <AiFillInstagram className='icon' />
              <TbBrandTripadvisor className='icon' />
            </div>

          </div>

          <div className="footerLinks grid">

            <div data-aos='fade-up' data-aos-duration='3000' className="linkGroup">
              <span className="groupTitle">
                OUR AGENCY
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Services
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Insurance
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Agency
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Tourism
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Payment
              </li>

            </div>

            <div data-aos='fade-up' data-aos-duration='4000' className="linkGroup">
              <span className="groupTitle">
                PARTNERS
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Bookings
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Rentcars
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                HostelWorld
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Trivago
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                TripAdvisor
              </li>

            </div>

            <div data-aos='fade-up' data-aos-duration='5000' className="linkGroup">
              <span className="groupTitle">
                LAST MINUTE
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                London
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                California
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Indonesia
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Europe
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Oceania
              </li>

            </div>

          </div>

          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE</small>
            <small>COPYRIGHTS RESERVED - WILDER C.</small>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Footer