import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css'
import HeaderCardButton from './HeaderCardButton';

const Header = props => {
    return <>
        <header className={classes.header}>
            <h1>Meals</h1>
            <HeaderCardButton />
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="A fine dine with foods." />
        </div>
    </>
};

export default Header;