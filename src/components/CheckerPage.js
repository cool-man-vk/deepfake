import classes from './styles/Checkerpage.module.css';

const CheckerPage = () => {
    return(
        <div>
           <div className={classes.box}>
                <h1>Deepfake Detector</h1>
                <form method='post' action="">
                        <input type="url" name="url" placeholder='Enter the url of the image' className={classes.inputs}/>
                        <input type="file" name="file-input" className={classes['file-input']} />
                        <button type='submit' className={classes['btn-primary']}>Submit</button>
                </form>
           </div>
           <div className={classes.results}>
                <h1>Results:</h1>
                <div className={classes.resultImage}>

                </div>
                <h4><b>Results:</b>85% accuracy</h4>
           </div>
        </div>

        
    );
}

export default CheckerPage;