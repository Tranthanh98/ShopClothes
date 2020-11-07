import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../assests/slideshow_2.jpg';
import img2 from '../../assests/slideshow_3.jpg';
import img3 from '../../assests/slideshow_4.jpg';
 
class CarouselHomePage extends Component {
    constructor(props){
        super(props);
        this.state={
            carouselArr:[]
        }
    }
    componentDidMount(){
        this.setState({
            carouselArr: [
                {
                   "id":0,
                   "image":img1,
                   "name":"https://routine.vn/pages/summer-collection-20",
                   "price":null
                },
                {
                   "id":1,
                   "image":img2,
                   "name":"https://routine.vn/pages/summer-collection-20",
                   "price":null
                },
                {
                   "id":2,
                   "image":img3,
                   "name":"https://routine.vn/blogs/thong-bao/mung-sinh-nhat-qua-toi-chan-that",
                   "price":null
                }
             ]
        })
    }

    render() {
        return (
            <Carousel showArrows={true}>
                {
                    this.state.carouselArr.map((i, index)=>{
                        return (
                            <div key={index}>
                                <img src={i.image} width="80vh" alt=""/>
                            </div>
                        )
                    })
                }
            </Carousel>
        );
    }
}
export default CarouselHomePage;