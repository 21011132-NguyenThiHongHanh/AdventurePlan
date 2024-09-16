import './Features.css';

const Features = () => {
  return (
    <div className="section features">
      <h3 className="title">Outstanding features</h3>
      <div className="content">
        <div className="item">
          <img src="/images/phone_sample.webp" alt="" />
          <div className="texts">
            <h3>Why choose AdventurePlan!?</h3>
            <ul>
              <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora unde placeat voluptatem.</li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus, aut.</li>
            </ul>
          </div>
        </div>
        <div className="item">
          <div className="texts">
            <h3>Personalized schedule suggestions</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo doloribus laborum exercitationem odit fuga
              possimus cum saepe.
            </p>
          </div>
        </div>
        <div className="item">
          <div className="texts">
            <h3>Easy planning</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non quae hic nisi reprehenderit beatae
              recusandae magni!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
