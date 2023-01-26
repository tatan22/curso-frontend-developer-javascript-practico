const menuEmail = document.querySelector('.navbar-email')
const  desktopMenu = document.querySelector('.desktop-menu')
const  menuHamIcon = document.querySelector('.menu')
const  mobileMenu = document.querySelector('.mobile-menu')
const  menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const  shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', togglemobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu(){
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
  if (!isAsideClosed){
    shoppingCartContainer.classList.add('inactive')
  }
  desktopMenu.classList.toggle('inactive');
}

function togglemobileMenu(){
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
  if (!isAsideClosed){
    shoppingCartContainer.classList.add('inactive')
  }
  mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  const isdesktopMenuClosed = desktopMenu.classList.contains('inactive');
  
  if (!isMobileMenuClosed){
    mobileMenu.classList.add('inactive')
  }

  if (!isdesktopMenuClosed){
    desktopMenu.classList.add('inactive')
  }

  shoppingCartContainer.classList.toggle('inactive');
}

const productList = [];
productList.push({
  name:'Bike',
  price: 120,
  image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name:'Pantalla',
  price: 220,
  image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name:'Compu',
  price: 640,
  image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

// Dos Formas de Recorrer un array con for
// for (product of productList){

// }
// for (product in productList){

// }
function renderProducts (arr){
  for (product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add ('product-card');
  
    const productImg = document.createElement('img')
    productImg.setAttribute('src', product.image )
  
    const productInfo = document.createElement('div');
    productInfo.classList.add ('product-info');
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText = '$ ' + product.price;
    const productName = document.createElement('P');
    productName.innerText = product.name;
  
    productInfoDiv.appendChild(productName);
    productInfoDiv.appendChild(productPrice);
  
    const productInfoFigure = document.createElement('figure');
    const producImgCart = document.createElement('img');
    producImgCart.setAttribute('src', './icons/bt_add_to_cart.svg' )
  
    productInfoFigure.appendChild(producImgCart);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard)
  }
}
renderProducts(productList);


