import './feature.css';
import { FaStar, FaCircleCheck, FaBolt } from "react-icons/fa6";

const featuresData = [
  {
    icon: <FaStar />,
    title: 'Top Rank Farms',
    text: 'Ut facilisis luctus elit id ornare. Aenean non sem risus.',
  },
  {
    icon: <FaCircleCheck />,
    title: 'Organic Certificated',
    text: 'Etiam tempus nulla et dolor sagitti eu ultricies.',
  },
  {
    icon: <FaBolt />,
    title: 'Fast Delivery',
    text: 'Ut facilisis luctus elit id ornare. Aenean non sem risus.',
  },
  {
    icon: <FaCircleCheck />,
    title: 'Trusted Products',
    text: 'Etiam tempus nulla et dolor sagitti eu ultricies.',
  },
]

function FeaturesBar() {
  return (
    <section className="features-bar">
      {featuresData.map((item, index) => (
        <div className="feature-item" key={index}>
          <div className="feature-icon">{item.icon}</div>
          <div>
            <h4 className="feature-title">{item.title}</h4>
            <p className="feature-text">{item.text}</p>
          </div>
        </div>
      ))}
    </section>
  )
}

export default FeaturesBar