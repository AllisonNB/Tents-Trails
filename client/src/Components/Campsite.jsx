import { Link } from 'react-router-dom';
import classes from './Campsite.module.css';

import camp1 from '../../public/Camp1.jpg';
import map from '../../public/Map.jpg';

const Campsite = ({ details }) => {

    let dateVisited = new Date(details.dateVisited);
    let formattedDate = dateVisited.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' });

    return (
        <div className={classes.show}>
            <article className={classes.campsite}>
                <img src={camp1} alt={details.lake} />
                <h1>{details.lake}</h1>
                <h2>{details.area}</h2>
                <p>date visited: {formattedDate}</p>
                <p>difficulty: {details.difficulty}</p>
                <p>{details.description}</p>
                <menu className={classes.actions}>
                    <Link to="edit">Edit</Link>
                    <button>Delete</button>
                </menu>
            </article>
            <div className={classes.reviews}>
                <img src={map} alt='map' />
                <h1>Leave a review</h1>
                <h2>stars.........</h2>
                <p>Type your review below</p>
                <textarea name="reviewText" id=""></textarea>
                <form action="">
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Campsite;

