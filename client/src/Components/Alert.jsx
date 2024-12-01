import classes from './Alert.module.css';

const Alert = ({hideAlert}) => {

        return (
            <div className={classes.box}>
                <h1>Important</h1>
                <p>This website's server is hosted on Render and may take 1 minute to load after a period of inactivity</p>
                <button onClick={hideAlert}>Okay</button>
            </div>
        )
    }
    
export default Alert;