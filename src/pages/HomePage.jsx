import React, { useEffect, useState } from 'react';
import CarouselHomePage from '../components/Home/Carousel';
import HotSale from '../components/Home/HotSale';
import NewProduct from '../components/Home/NewProduct';
import * as Firebase from 'firebase'

function HomePage(){
    const [newProducts, setNewProduct] = useState([]);
    const [hotProducts, setHotProduct] = useState([]);
    const db = Firebase.firestore();

    useEffect(()=>{
        const allProductsRef = db.collection("products")
        const temp = allProductsRef.where("isNew", "==", true)
                        .get()
                        .then((querySnapshot)=>{
                            let data = [];
                            querySnapshot.forEach((doc) => {
                                data.push(doc.data());
                            });
                            setNewProduct(data);
                        })
                        .catch((error) => {
                            console.log("Error getting documents: ", error);
                        }); 
        allProductsRef.where("isHotSale", "==", true)
                        .get()
                        .then((querySnapshot)=>{
                            let data = [];
                            querySnapshot.forEach((doc) => {
                                data.push(doc.data());
                            });
                            setHotProduct(data);
                        })
                        .catch((error) => {
                            console.log("Error getting documents: ", error);
                        });
    },[]);
    return(
        <>
            <CarouselHomePage/>
            <NewProduct products={newProducts}/>
            <HotSale products={hotProducts}/>
        </>
        
    )
}
export default HomePage;