import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import dataProducts from '../../data'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './SmalSlider.css';

// import required modules
import { EffectCards } from 'swiper/modules';
import Card from '../Card/Card';

export default function SmalSlider() {

    const firstThreeProducts = dataProducts().slice(0, 3);
    return (
        <>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >

                {firstThreeProducts.map((item) =>
                    <SwiperSlide key={item.id}>
                        <Card id={item.id} title={item.title} photo={item.photo} price={item.price} />
                    </SwiperSlide>
                )}


            </Swiper>
        </>
    );
}
