import { json, redirect } from 'react-router-dom';
import { Form, useNavigate } from 'react-router-dom';

import classes from './CampForm.module.css';


function CampForm({ method, camp }) {
    const navigate = useNavigate();

    const cancelEdit = () => {
        navigate('..');
    }


    return (
        <Form method={method} className={classes.form}>
            <p>
                <label htmlFor="lake">Lake</label>
                <input id="lake" type="text" name="lake" defaultValue={camp && camp.lake} required />
            </p>
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
                <button type="button" onClick={cancelEdit}>
                    Cancel
                </button>
                <button>Save</button>
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
    let url = 'http://localhost:4500/campgrounds'


    if (method === 'PATCH') {
        url = `http://localhost:4500/campgrounds/${campid}/edit`
    }


    const response = await fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(campData),
    });


    if (response.status === 422) {
        return response;
    }

    if (!response.ok) {
        throw json({ message: 'Could not save event.' }, { status: 500 });
    }

    return redirect('/campgrounds');
}





