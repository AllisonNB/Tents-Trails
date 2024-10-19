import {Form, redirect, json } from 'react-router-dom';


const serverURL = import.meta.env.VITE_serverURL;

function ReviewForm({campid}) {

    return (
        <Form method='POST' action={`/campgrounds/${campid}/reviews`}>
            <div>
                <label htmlFor="reviewRating">Rating</label>
                <input name="reviewRating" type="range" id="reviewRating" min="1" max="5"/>
            </div>
            <div>
                <label htmlFor="reviewText">Type your review below</label>
                <textarea name="reviewText" id="reviewText"></textarea>
            </div>
            <button>Submit</button>
        </Form>
    )
}


export default ReviewForm;


export const action = async ({request, params}) => {
    const formInfo = await request.formData();
    const campid = params.campid;
    const reviewData = Object.fromEntries(formInfo);

    console.log('reviewdata:', reviewData)

    let url = `${serverURL}/campgrounds/${campid}/reviews`;


    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(reviewData),
    });


    if (response.ok) {
        return redirect(`/campgrounds/${campid}`);
    }
    else {
        throw json({ message: 'Could not save review.' }, { status: 500 });
    }
}