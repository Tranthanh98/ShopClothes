import React from 'react';
import CarouselHomePage from '../components/Home/Carousel';
import HotSale from '../components/Home/HotSale';
import NewProduct from '../components/Home/NewProduct';


function HomePage(){
    return(
        <>
            <CarouselHomePage/>
            <NewProduct/>
            <HotSale/>
        </>
        
    )
}
export default HomePage;