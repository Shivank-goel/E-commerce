import React from 'react'
import MainCarousel from "../../HomeCarousel/MainCarousel"
import HomeSectionCarousel from '../../HomeSectionCarousal/HomeSectionCarousel';

const HomePage = () => {
    return (
        <div>
            <MainCarousel/>

            <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10 '>
                
                <HomeSectionCarousel/>
                <HomeSectionCarousel/>
                <HomeSectionCarousel/>
                <HomeSectionCarousel/>
                <HomeSectionCarousel/>
                <HomeSectionCarousel/>
            </div>
        </div>
    )
}

export default HomePage;