
import React from 'react';
import { Link } from 'react-router-dom';
import './restaurantlist.css'

const RestaurantList = () => {
  const restaurants = [
    {
      id: 1,
      name: 'Domino\'s',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Dominos_pizza_logo.svg/1200px-Dominos_pizza_logo.svg.png',
    },
    {
      id: 2,
      name: 'Pizza Hut',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Pizza_Hut_classic_logo.svg/1200px-Pizza_Hut_classic_logo.svg.png',
    },
    {
      id: 3,
      name: 'KFC',
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/KFC_logo.svg/640px-KFC_logo.svg.png',
    },
    {
      id: 4,
      name: 'Burger King',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Burger_King_2020.svg/640px-Burger_King_2020.svg.png',
    },
    
  ];

  return (
    <div className="RestaurantList">

      <ul>
        {restaurants.map((restaurant) => (
          <li className="RestaurantItem" key={restaurant.id}>
            <Link className='link' to={`/menu/${restaurant.id}`}>
              <img className='img' src={restaurant.image} alt={restaurant.name} />
              <p className='pa'> {restaurant.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantList;
