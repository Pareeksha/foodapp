
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './menu.css'

const Menu = ({ handleAddToCart }) => {
  const { restaurantId } = useParams();
  const [cartItems, setCartItems] = useState([]);

  const menuItems = [
    {
      id: 1,
      rid:1,
      iimage :'https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/menu/f65964c6-de96-475d-a5a9-3f3698d66ee7_new_peppy_paneer.jpg',
      name: 'Paneer pizza',
      price: 250,
      quantity: 1
    },
    {
      id: 2,
      rid:1,
      name: 'Barbeque pizza',
      iimage :'https://static.toiimg.com/thumb/msid-80373284,width-1280,resizemode-4/80373284.jpg',
      price: 350,
      quantity: 1
    },
    {
      id: 3,
      rid:1,
      name: 'Garlic breadstick',
      iimage :'https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/menu/0d598b3d-643f-405a-b076-5eaa4e7b57da_Garlic_bread.png',
      price: 115,
      quantity: 1
    },
    {
      id: 4,
      rid:2,
      name: 'Mexican Fiesta',
      iimage :'https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/mexican-fiesta.559a1961ca021b8fb90367c6918e50f1.1.jpg',
      price: 325,
      quantity: 1
    },
    {
      id: 5,
      rid:2,
      name: 'Spicy Schezwan Pasta',
      iimage :'https://api.pizzahut.io/v1/content/en-in/in-1/images/side/spicy-schezwan-pasta-single.35bd38e62a72be9688fcef445470b8dd.1.jpg',
      price: 175,
      quantity: 1
    },
    {
      id: 6,
      rid:2,
      name: 'Oreo tub',
      iimage :'https://api.pizzahut.io/v1/content/en-in/in-1/images/dessert/oreo-tub-single.3b27d61a1247f9fa9ad0b827e91cdc22.1.jpg',
      price: 100,
      quantity: 1
    },
    {
      id: 7,
      rid:3,
      name: 'Family feast',
      iimage :'https://cdn4.singleinterface.com/files/banner_images/34404/7532_1624879318_Familyfeast310x236.jpg',
      price: 850,
      quantity: 1
    },
    {
      id: 8,
      rid:3,
      name: 'Tandoori Zinger burger',
      iimage :'https://cdn4.singleinterface.com/files/banner_images/34404/5473_1624883091_TandooriZinger310x236min.jpg',
      price: 199,
      quantity: 1
    },
    {
      id: 9,
      rid:3,
      name: 'Large Popcorn chicken',
      iimage :'https://cdn4.singleinterface.com/files/banner_images/34404/5085_1624884497_Popcornlarge310x236.jpg',
      price: 228,
      quantity: 1
    },
    {
      id: 10,
      rid:4,
      name: 'King duo',
      iimage :'https://burgerkingec.com/wp-content/uploads/2020/05/duo-king-post.png',
      price: 445,
      quantity: 1
    },
    {
      id: 11,
      rid:4,
      name: 'Triple burger',
      iimage :'https://www.foodandwine.com/thmb/K_t1B_xBKIKYm_ZoNIEqaBvuXcQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Burger-King-Everything-Seasoned-Bun-FT-BLOG0922-c8c7859b9c794c42af7700b5b957a874.jpg',
      price: 515,
      quantity: 1
    },
    {
      id: 12,
      rid:4,
      name: 'Fresh chicken wrap',
      iimage :'https://content.jdmagicbox.com/comp/delhi/v6/011pxx11.xx11.170524142016.f4v6/catalogue/burger-king-sarojini-nagar-delhi-fast-food-270vfl0.jpg',
      price: 175,
      quantity: 1
    },
    
  ];
  
  const filteredMenuItems = menuItems.filter(item => item.rid === parseInt(restaurantId));

  const addToCart = (menuItem) => {
    if (!cartItems.find((item) => item.id === menuItem.id)) {
      handleAddToCart(menuItem);
      setCartItems([...cartItems, menuItem]);
    }
  };

  return (
    <div className='Menu'>
      <h2>Menu:</h2>
      <ul>
        {filteredMenuItems.map((item) => (
          <li key={item.id}>
            <img className='image' src={item.iimage} alt={item.name} />
            <br />
            {item.name} - Rs.{item.price} <br></br>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <Link to="/cart">
        <div className="cart-icon">
         <i className='fas fa-cart-plus' style={{fontSize:"30px",color:'black'}}></i>
          <span >{cartItems.length}</span>
        </div>
      </Link>
    </div>
  );
};

export default Menu;
