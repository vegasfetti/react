import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Slider.css';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

export default function Slider() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="slide slide1">
                        <div className="slide-text">
                            <h1 className='text-4xl text-white'>Стиль, комфорт, домашняя гармноия</h1>
                            <p className='text-white'>Стиль, комфорт, домашняя гармноия - это наши приоритеты. <br></br> Для того что бы вам было комфортно и дома. Сроим чудо вместе.</p>
                            <a className='text-white px-[30px] py-[10px] border border-1 border-solid border-white w-fit rounded' href="#">Перейти</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide slide2">
                        <div className="slide-text">
                            <h1 className='text-4xl text-white'>Стиль, комфорт, домашняя гармноия</h1>
                            <p className='text-white'>Стиль, комфорт, домашняя гармноия - это наши приоритеты. <br></br> Для того что бы вам было комфортно и дома. Сроим чудо вместе.</p>
                            <a className='text-white px-[30px] py-[10px] border border-1 border-solid border-white w-fit rounded' href="#">Перейти</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide slide3">
                        <div className="slide-text">
                            <h1 className='text-4xl text-white'>Стиль, комфорт, домашняя гармноия</h1>
                            <p className='text-white'>Стиль, комфорт, домашняя гармноия - это наши приоритеты. <br></br> Для того что бы вам было комфортно и дома. Сроим чудо вместе.</p>
                            <a className='text-white px-[30px] py-[10px] border border-1 border-solid border-white w-fit rounded' href="#">Перейти</a>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    );
}
