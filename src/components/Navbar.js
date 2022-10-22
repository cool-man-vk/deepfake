import classes from './styles/Navbar.module.css';

const Navbar = () => {
    const navOptions = [
        {name:'Home',link:'/'},
        {name:'Get started',link:'/get-started'}
    ];

    return(
        <div className={classes.navbar}>
            <div className={classes.logo}>
                <a href='/'><h2>Vignesh</h2></a>
            </div>
            <div className={classes.options}>
                <ul className={classes.menus}>
                    {
                        navOptions.map(
                            (opt) => {
                                return (
                                    <a href={opt.link}>
                                        <li>{opt.name}</li>
                                    </a>
                                );
                            }
                        )
                    }
                </ul>
            </div>
        </div>
    );
}

export default Navbar