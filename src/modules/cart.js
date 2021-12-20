const cart = () => {
  const cartBtn = document.getElementById('cart');

  const cartModal = document.querySelector('.cart');

  const closeModal = cartModal.querySelector('.cart-close');

  const openCart = () => {
    cartModal.style.display = 'flex';
  }
  const closeCart = () => {
    cartModal.style.display = '';
  }


  // cartBtn.onclick = openCart;
  cartBtn.addEventListener('click', openCart);

  // closeModal.onclick = closeCart;
  closeModal.addEventListener('click', closeCart);
}

export default cart;