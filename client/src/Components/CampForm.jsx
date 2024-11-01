import { Form, useNavigate, redirect, json, useNavigation} from 'react-router-dom';
import classes from './CampForm.module.css';

const serverURL = import.meta.env.VITE_serverURL;


function CampForm({ method, camp }) {
    const navigate = useNavigate();
    const navigation = useNavigation();

    const isSubmitting = navigation.state === 'submitting';

    const cancelEdit = () => {
        navigate('..');
    }


    return (
        <Form method={method} className={classes.form}>
            <p>
                <label htmlFor="lake">Lake</label>
                <input id="lake" type="text" name="lake" defaultValue={camp && camp.lake} required />
            </p>
            <div className={classes.dropdown}>
            <p>
                <label htmlFor="area">Area</label>
                <select name="area" id="area" defaultValue={camp && camp.area} required>
                    <option value="">Select an area of Algonquin</option>
                    <option value="Central">Central</option>
                    <option value="East">East</option>
                    <option value="West">West</option>
                    <option value="North">Nort</option>
                    <option value="South">South</option>
                </select>
            </p>
            <p>
                <label htmlFor="difficulty">Difficulty</label>
                <select name="difficulty" id="difficulty" defaultValue={camp && camp.difficulty} required>
                    <option value="">Select a difficulty</option>
                    <option value="Easy">Easy</option>
                    <option value="Moderate">Moderate</option>
                    <option value="Hard">Hard</option>
                </select>
            </p>
            </div>
            <p>
                <label htmlFor="route">Route</label>
                <input id="route" type="text" name="route" placeholder='lake1 - lake2 - lake 3 ...' defaultValue={camp && camp.route} required />
            </p>
            <p>
                <label htmlFor="image">Image</label>
                <input id="image" type="url" name="image" defaultValue={camp && camp.image} required />
            </p>
            <p>
                <label htmlFor="dateVisited">Date Visited</label>
                <input id="dateVisited" type="date" name="dateVisited" defaultValue={camp && camp.dateVisited.substring(0, 10)} required />
            </p>
            <p>
                <label htmlFor="description">Description</label>
                <textarea id="description" name="description" rows="5" defaultValue={camp && camp.description} required />
            </p>
            <div className={classes.actions}>
                <button type="button" onClick={cancelEdit} disabled={isSubmitting}>
                    Cancel
                </button>
                <button disabled={isSubmitting}>{isSubmitting ? 'Submitting...': 'Save'}</button>
            </div>
        </Form>
    );
}

export default CampForm;


//action automatically gets object with request & params properties
export const action = async ({ request, params }) => {
    const formInfo = await request.formData();
    const campData = Object.fromEntries(formInfo);

    const method = request.method;
    const campid = params.campid;
    let url = `${serverURL}/campgrounds`;

    if (method === 'PATCH') {
        url = `${serverURL}/campgrounds/${campid}/edit`;
    }


    const response = await fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(campData),
    });

    //reponse for validation errors, 422 is status set on backend
    if (response.status === 422) {
        return response;
    }

    if (response.ok && method === 'PATCH') {
        return redirect(`/campgrounds/${campid}`);
    } else if (response.ok && method === 'POST') {
        return redirect(`/campgrounds/success`)
    }
    else {
        throw json({ message: 'Could not save camp details.' }, { status: 500 });
    }
}





