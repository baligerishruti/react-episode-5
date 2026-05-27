import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search Bar
 *  - RestaurantContainer
 *      - RestaurantCard
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 *  - Social Links 
 */

/**
 * Inline CSS can be used to style individual components 
 *  This is not recommended for large applications as it can lead to code that is hard to maintain and read.
*/





const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Body />
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);