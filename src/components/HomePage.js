import classes from './styles/Homepage.module.css';

const HomePage = () => {
    return(
        <div className={classes.container}>
            <div className={classes['inner-container']}>
                <h3>Think before you believe , predict Fakes easily!!</h3>
                <a href='/get-started'>
                    <button className={classes.primary}>
                        Get Started
                    </button>
                </a>
            </div>
        </div>
    );
}

export default HomePage;