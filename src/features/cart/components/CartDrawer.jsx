import React from 'react';
import CartHeader from './CartHeader';
import CartFooter from './CartFooter';
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';
import useCart from '../../../Hooks/useCart';


const CartDrawer = ({ onClearCart, onCheckout }) => {
  const { cartItems,isCartOpen,closeCart,totalItems,totalPrice} = useCart();

  return (
    <>
      {/* Backdrop overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-[2px] transition-opacity duration-300 z-40 ${
          isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`} 
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Slide-over panel */}
      <div 
        className={`fixed top-0 right-0 h-[100vh] w-full sm:w-[420px] md:w-[480px] bg-dark shadow-2xl transition-transform duration-300 ease-in-out z-50 flex flex-col border-l border-border ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
      >
        {/* Header (Fixed) */}
        <div className="shrink-0">
          <CartHeader itemCount={totalItems} onClose={closeCart} />
        </div>
        
        {/* Body (Scrollable) */}
        <div className="flex-1 overflow-y-auto p-5 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
          {cartItems.length === 0 ? (
            <EmptyCart onClose={closeCart} />
          ) : (
            <div className="flex flex-col gap-4">
              {cartItems.map((item) => (
                <CartItem 
                  key={item.id} 
                  item={item} 
                 
                />
              ))}
            </div>
          )}
        </div>

        {/* Footer (Fixed) */}
        {cartItems.length > 0 && (
          <div className="shrink-0">
            <CartFooter 
              total={totalPrice} 
              onClearCart={onClearCart}
              onCheckout={onCheckout}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
