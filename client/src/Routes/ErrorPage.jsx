import { useRouteError } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import ErrorDetails from '../Components/ErrorDetails';


function ErrorPage() {
    const error = useRouteError();

    let title = 'An error occurred!';
    let message = 'Something went wrong!';

    if (error.status === 500) {
        message = error.data.message;
    }

    if (error.status === 404) {
        title = 'Not found...';
        message = 'Could not find resource or page.';
    }

    console.log(error.message)

    return (
        <>
            <NavBar />
            <ErrorDetails title={title}>
                <p>{message}</p>
            </ErrorDetails>
        </>
    );
}

export default ErrorPage;