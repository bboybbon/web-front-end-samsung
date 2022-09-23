import { number } from 'prop-types';
import CartTotal from './CartTotal';
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart';

export default function CartFooter ({
  ...restProps 
}) {
  const useCart = useContext(CartContext)
  return (
  <footer {...restProps}>
    <CartTotal>{useCart.totalPrice}</CartTotal>
  </footer>
  )
}

CartFooter.propTypes = {
  total: number.isRequired,
};

// export default CartFooter;
