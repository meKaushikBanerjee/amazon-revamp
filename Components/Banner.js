import Image from 'next/image';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
    return (
        <div className="w-full">
            <div className="w-full h-full" />
            <Carousel autoPlay infiniteLoop autoFocus showStatus={false} showIndicators={false} showThumbs={false} interval={5000} stopOnHover={true} centerMode={true} centerSlidePercentage={85} dynamicHeight={true} emulateTouch={true} >

                <div>
                    <Image priority="true" src="/../public/images/1.jpg" alt="" width={2000} height={800}/>
                </div>

                <div>
                    <Image priority="true" src="/../public/images/2.jpg" alt="" width={2000} height={800}/>
                </div>

                <div>
                    <Image priority="true" src="/../public/images/3.jpg" alt="" width={2000} height={800}/>
                </div>

                <div>
                    <Image priority="true" src="/../public/images/4.jpg" alt="" width={2000} height={800}/>
                </div>

            </Carousel>
        </div>
    )
}

export default Banner
