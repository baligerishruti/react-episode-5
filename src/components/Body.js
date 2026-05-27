import RestaurantCard from './RestaurantCard';
import restaurantList from '../utils/mockData';
import { useState } from 'react';
const Body = () => {
    // local state variable
    const [restaurants, setRestaurants] = useState(restaurantList);
    return (
        <div className='body'> 
            {/* <div className='search' style={{padding: '10px'}}>Search</div> */}
            <div className="filter" style={{padding: '10px'}}>
                <button className="filter_btn" onClick={() =>{
                    const restaurantLists = restaurantList.filter(restaurant => restaurant.info.avgRating > 4)
                    setRestaurants(restaurantLists);
                }}>
                    Top Rated Restaurants
                </button>
                <button className="reset_btn" onClick={() =>{
                    setRestaurants(restaurantList);
                    }}>
                    Reset
                </button>
            </div>
            <div className='restaurant-container'>
                {restaurants.map((restaurant, index) => (
                    <RestaurantCard
                        restaurantDto={restaurant.info}
                        key={restaurant.info.id || index}
                    />
                ))}
            </div>
        </div>
    );
}

export default Body;