import classes from './styles/Checkerpage.module.css';

const CheckerPage = () => {
    return(
        <div>
           <div className={classes.box}>
                <h1 style={{'textAlign':'center'}}className={classes.title}>Deepfake Detector</h1>
                <form method='post' action="">
                        <input type="url" name="url" placeholder='Enter the url of the image' className={classes.inputs}/>
                        <input type="file" name="file-input" className={classes['file-input']} />
                        <button type='submit' className={classes['btn-primary']}>Submit</button>
                </form>
           </div>
           <div className={classes.results}>
                <div className={classes.resultImage}>

                </div>
                <h1><b>Results:</b></h1>
                <p className={classes.resPhrase}>
                    This is a better image with no tamper in it.<br/>
                    Accuracy : 85%
                </p>
           </div>
        </div>

        
    );
}

export default CheckerPage;