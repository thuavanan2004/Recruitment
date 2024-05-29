import { Carousel } from 'antd';
import slide1 from "../../../assets/images/slide1.jpg";
import slide2 from "../../../assets/images/slide2.jpg";
import slide3 from "../../../assets/images/slide3.jpg";
import slide4 from "../../../assets/images/slide4.jpg";

function CarouselCompany () {

    const contentStyle = {
        margin: 0,
        height: '300px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
        borderRadius: "10px"
        
    };
    const imageStyle = {
        width: '100%', 
        height: '100%',
        borderRadius: "10px",
        objectFit: 'cover',
    };



    return (
        <>
            <Carousel autoplay = {false} autoplaySpeed={1500}>
                <div>
                    <h3 style={contentStyle}><img src={slide1} alt='slide1'  style={imageStyle} /></h3>
                </div>
                
                <div>
                    <h3 style={contentStyle}><img src={slide2} alt='slide2'  style={imageStyle} /></h3>
                </div>
                
                <div>
                    <h3 style={contentStyle}><img src={slide3} alt='slide3' style={imageStyle} /></h3>
                </div>
                
                <div>
                    <h3 style={contentStyle}><img src={slide4} alt='slide4'  style={imageStyle} /></h3>
                </div>
                
            </Carousel>
        </>
    )
}
export default CarouselCompany;