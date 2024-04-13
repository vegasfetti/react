


import { useState } from 'react'
import Slider from '../components/Slider/Slider'
import Products from '../components/Products/Products'
import Team from '../components/Team/Team'
import Clouds from '../components/Clouds/Clouds'
import Newsletter from '../components/Newsletter/Newsletter'
import Testimonials from '../components/Testimonials/Testimonials'


function HomePage() {

    return (
        <>
            <Slider />

            <div className="container">

                <Clouds />
                <Products />
                <Team />
            </div>
            <Newsletter />
            <Testimonials />


        </>
    )
}

export default HomePage
