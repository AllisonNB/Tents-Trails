import { Link, useSubmit, Form } from 'react-router-dom';
import classes from './Campsite.module.css';

import map from '/Map.jpg';

const Campsite = ({ details }) => {
    const submit = useSubmit();

    console.log(details)

    let dateVisited = new Date(details.dateVisited);
    let formattedDate = dateVisited.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' });

    const deleteCamp = () => {
        const proceed = window.confirm('Are you sure you want to delete this camp?');

        if (proceed) {
            submit(null, {method: 'delete'})
        }
    }

    return (
        <div className={classes.show}>
            <article className={classes.campsite}>
                <img src={details.image} alt={details.lake} />
                <h1>{details.lake} - {details.area}</h1>
                <p>date visited: {formattedDate}</p>
                <p>difficulty: {details.difficulty}</p>
                <p>route: {details.route}</p>
                <p>{details.description}</p>
                <menu className={classes.actions}>
                    <Link to="edit">Edit</Link>
                    <button onClick={deleteCamp}>Delete</button>
                </menu>
            </article>
            <div className={classes.reviews}>
                <img src={map} alt='map' />
                <h1>Leave a review</h1>
                <Form method='POST'>
                    <div>
                        <label htmlFor="reviewRating">Rating</label>
                        <input type="range" id="reviewRating" min="1" max="5"/>
                    </div>
                    <div>
                        <label htmlFor="reviewText">Type your review below</label>
                        <textarea name="reviewText" id="reviewText"></textarea>
                    </div>
                    <button>Submit</button>
                </Form>
                <p>example review! ....</p>
            </div>
        </div>
    )
}

export default Campsite;

