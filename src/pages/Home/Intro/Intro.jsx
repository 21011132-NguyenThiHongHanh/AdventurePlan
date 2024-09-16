import './Intro.css';
import Button from '../../../components/Button/Button';
const Intro = () => {
  return (
    <div className="section intro">
      <div className="texts">
        <h3>Introduction AdventurePlan!</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, vitae voluptatibus! Ducimus laborum error
          iste commodi animi aliquam, sequi, minus totam excepturi neque cumque exercitationem.
        </p>
        <Button>Download</Button>
      </div>
      <div className="image">
        <img src="/images/laptop.png" alt="" />
      </div>
    </div>
  );
};

export default Intro;
