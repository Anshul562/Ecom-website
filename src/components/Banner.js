import React from 'react'
import "react-responsive-carousel"
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
function Banner() {
    return (
        <div className='relative'>
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000} >
                <div>
                    <img loading="lazy" src="https://raw.githubusercontent.com/Anshul562/Ecom-website/main/1.png?token=GHSAT0AAAAAABQZMDPN5QZDZYIIMMYCGTVUYQWDW6A" />
                </div>
                <div>
                    <img loading="lazy" src="https://raw.githubusercontent.com/Anshul562/Ecom-website/main/2.png?token=GHSAT0AAAAAABQZMDPNC5GKLPE7P4J56Y7UYQWDXNA" />
                </div>
                <div>
                    <img loading="lazy" src="https://raw.githubusercontent.com/Anshul562/Ecom-website/main/3.png?token=GHSAT0AAAAAABQZMDPNQGNJB5MGBQP6OHNUYQWDXWQ" />
                </div>

            </Carousel>
        </div>
    )
}

export default Banner