import { Link } from 'react-router-dom';
import classes from './CampsList.module.css';

function CampsList({ campgrounds }) {

  return (
    <div className={classes.camps}>
      <ul className={classes.list}>
        {campgrounds.map((camp) => (
          <li key={camp._id} className={classes.item}>
            <Link to={`/campgrounds/${camp._id}`}>
              <img src={camp.image} alt={camp.lake} />
              <div className={classes.content}>
                <h2>{camp.lake}</h2>
                <h3>{camp.area}</h3>
                <p>{camp.difficulty}</p>
                <p>{camp.description}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CampsList;