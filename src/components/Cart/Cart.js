import { useContext } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';

const Cart = props => {
    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

    const hasItems = cartCtx.items.length > 0;

    const cartItems = <ul className={classes['cart-items']}>
        {cartCtx.items.map((item) => <li key={Math.random()}>{item.name}</li>)}
    </ul>;
    return <Modal onClose={props.onClose}>
        {cartItems}
        <div className={classes.total}>
            <span>{totalAmount}</span>
            <span>24</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            {hasItems && <button className={classes.button}>Order</button>}
        </div>
    </Modal>
}

export default Cart;