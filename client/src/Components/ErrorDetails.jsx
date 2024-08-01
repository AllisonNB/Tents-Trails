import classes from './ErrorDetails.module.css';

function ErrorDetails({ title, children }) {
    return (
        <div className={classes.content}>
            <h1>{title}</h1>
            {children}
        </div>
    );
}

export default ErrorDetails;
