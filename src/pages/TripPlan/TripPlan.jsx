import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './TripPlan.css';
import { useState } from 'react';

const TripPlan = () => {
  const [selectedOption, setSelectedOption] = useState('Types');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="TripPlan">
      <Navbar />
      <div className="content">
        <h1>AdventurePlan!</h1>
        <img src="/images/plan.png" alt="Plan" />
        <div className="search_box">
          <div className="location">
            <div className="title">
              <img src="/images/location.png" alt="Location" />
              <span>Location</span>
            </div>
            <input type="text" placeholder="Enter the Location" />
          </div>
          <div className="days">
            <div className="title">
              <img src="/images/days.png" alt="Days" />
              <span>Days</span>
            </div>
            <input type="text" placeholder="How many days?" />
          </div>
          <div className="dropdown">
            <button className="dropbtn">
              <img src="./images/Vector.png" alt="" />
              <span id="selected-text">{selectedOption}</span>
              <img className='arrow' src="./images/arrow.png" alt="" />
            </button>
            <div className="dropdown-content">
              <a href="#" onClick={() => handleOptionSelect('Tùy chọn 1')}>Tùy chọn 1</a>
              <a href="#" onClick={() => handleOptionSelect('Tùy chọn 2')}>Tùy chọn 2</a>
              <a href="#" onClick={() => handleOptionSelect('Tùy chọn 3')}>Tùy chọn 3</a>
            </div>
          </div>
          <div className="searchbutton">
            <button><img src="./images/search.png" alt="" /></button>
          </div>
        </div>
        {/* <div className="listPlan">
          <div className="block">
            <p>Day 1:</p>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
          </div>
        </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default TripPlan;
