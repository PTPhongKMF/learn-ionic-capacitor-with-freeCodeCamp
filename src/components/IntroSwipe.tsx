import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import { IonButton } from '@ionic/react';

export default function IntroSwipe({setShowIntro}: {setShowIntro: React.Dispatch<React.SetStateAction<boolean>>}) {
  const swiper = useSwiper();

  return (
    <Swiper>
      <SwiperSlide>
        <div className='flex flex-col justify-center items-center'>
          <img src={imgUrl} />
          <h1>THIS IS INTRO SLIDER</h1>
          <SlideNextButton />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className='flex flex-col justify-center items-center'>
          <img src={imgUrl} />
          <IonButton onClick={() => setShowIntro(false)}>Finish</IonButton>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <IonButton onClick={() => swiper.slideNext()}>Slide</IonButton>
  );
}

const imgUrl = "https://www.sustainablebusinesstoolkit.com/wp-content/uploads/Keep-the-Environment-Clean-7-1024x601.png"
const imgUrl2= "https://cdn.pixabay.com/photo/2023/10/21/11/46/sunset-8331285_1280.jpg"