import { Link } from 'react-router-dom';
import classes from './CampsList.module.css';
import camp1 from '../../public/Camp1.jpg';

function CampsList({ campgrounds }) {

  return (
    <div className={classes.events}>
      <ul className={classes.list}>
        {campgrounds.map((camp) => (
          <li key={camp._id} className={classes.item}>
            <Link to={`/campgrounds/${camp._id}`}>
              <img src={camp1} alt={camp.lake} />
              <div className={classes.content}>
                <h2>{camp.lake}</h2>
                <h3>{camp.area}</h3>
                <p>{camp.difficulty}</p>
              </div>
            </Link>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default CampsList;