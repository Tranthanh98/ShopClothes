import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../assests/slideshow_2.jpg';
import img2 from '../../assests/slideshow_3.jpg';
import img3 from '../../assests/slideshow_4.jpg';
import * as Firebase from 'firebase'

 
class CarouselHomePage extends Component {
    constructor(props){
        super(props);
        this.state={
            carouselArr:[],
            img:""
        }
    }
    componentDidMount(){
        const images = Firebase.storage();
        const pathRef = images.ref().child('image-slideshow');

        pathRef.listAll()
            .then(res => {
                let datas = [];
                res.items.forEach(img=> {
                    img.getDownloadURL()
                            .then((url) => datas.push(url))
                            .catch(e => console.log("err:",e));
                });
                this.setState({carouselArr: datas});
            })
            .catch(e => console.log("err:",e));
    }

    render() {
        return (
            <Carousel showArrows={true}>
                {
                    this.state.carouselArr.map((i, index)=>{
                        return (
                            <div key={index}>
                                <img src={i} width="80vh" alt=""/>
                            </div>
                        )
                    })
                }
            </Carousel>
        );
    }
}
export default CarouselHomePage;