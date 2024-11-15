import { Link, useSubmit, Form } from 'react-router-dom';
import classes from './Campsite.module.css';
import ReviewForm from './ReviewForm';


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
                <p><b>Date visited:</b> {formattedDate}</p>
                <p><b>Difficulty:</b> {details.difficulty}</p>
                <p><b>Route:</b> {details.route}</p>
                <p>{details.description}</p>
                <menu className={classes.actions}>
                    <Link to="edit">Edit</Link>
                    <button onClick={deleteCamp}>Delete</button>
                </menu>
            </article>
            <div className={classes.reviews}>
                <h1>Leave a review</h1>
                <ReviewForm campid={details._id} />
                {details.reviews.map(review => (
                    <div key={review._id} className={classes.reviewPost}> 
                        <h3>{review.rating}/5</h3>
                        <p>{review.text}</p>
                        <button>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Campsite;

