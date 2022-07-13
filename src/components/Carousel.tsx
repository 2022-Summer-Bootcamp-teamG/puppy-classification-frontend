import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import CarouselBox from './CarouselBox';
import SwiperCore, { Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import sample1 from '../assets/images/sample1.jpg';
import sample2 from '../assets/images/sample2.jpg';
import sample3 from '../assets/images/sample3.jpg';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';

/*
    이미지 캐러셀 컨테이너
    TODO: API 연동 후 props&key 및 Link 추가 필요
*/

function Carousel() {
  SwiperCore.use([Navigation, Scrollbar]);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [swiperSetting, setSwiperSetting] = useState<Swiper | null>(null);

  useEffect(() => {
    if (!swiperSetting) {
      setSwiperSetting({
        spaceBetween: 23,
        direction: 'vertical',
        navigation: {
          prevEl: prevRef.current, // 이전 버튼
          nextEl: nextRef.current, // 다음 버튼
        },
        scrollbar: { draggable: true, el: null },
        slidesPerView: 3,
        onBeforeInit: (swiper: SwiperCore) => {
          if (typeof swiper.params.navigation !== 'boolean') {
            if (swiper.params.navigation) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }
          swiper.navigation.update();
        },
        breakpoints: {
          768: {
            direction: 'horizontal',
            slidesPerView: 3, //브라우저가 768보다 클 때
            spaceBetween: 4,
          },
          1024: {
            direction: 'horizontal',
            slidesPerView: 3, //브라우저가 1024보다 클 때
            spaceBetween: 4,
          },
        },
      });
    }
  }, [swiperSetting]);

  return (
    <Common>
      <Button ref={prevRef}>
        <FaArrowLeft style={faStyle} />
      </Button>
      {swiperSetting && (
        <Swiper {...swiperSetting}>
          <SwiperSlide>
            <CarouselBox img={sample1} breedName="웰시코기" percent={98} />
          </SwiperSlide>
          <SwiperSlide>
            <CarouselBox img={sample2} breedName="골든 리트리버" percent={87} />
          </SwiperSlide>
          <SwiperSlide>
            <CarouselBox img={sample3} breedName="포메라니안" percent={82} />
          </SwiperSlide>
        </Swiper>
      )}
      <Button ref={nextRef}>
        <FaArrowRight style={faStyle} />
      </Button>
    </Common>
  );
}

const Common = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  width: 70rem;
  .swiper {
    &-wrapper,
    &-container {
      width: 70rem;
      margin: 0;
    }
    &-container {
      margin-left: 1.5rem;
    }
  }
  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 50rem;
    .swiper {
      &-wrapper,
      &-container {
        width: 50rem;
        margin: 0;
      }
      &-container {
        margin-left: 1.5rem;
      }
    }
  }
  @media all and (max-width: 767px) {
    display: flex;
    width: 20rem;
    margin-top: 3rem;
    .swiper {
      &-wrapper,
      &-container {
        width: 20rem;
        margin: 0;
      }
      &-slide {
        display: flex;
        justify-content: center;
      }
    }
  }
`;

const Button = styled.button`
  display: flex;
  background: none;
  border: none;
  @media all and (max-width: 767px) {
    display: none;
  }
`;

const faStyle = {
  width: '2rem',
  height: '1.5rem',
};

export default Carousel;
