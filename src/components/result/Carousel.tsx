import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import CarouselBox from './CarouselBox';
import SwiperCore, { Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Button } from '../common/Button';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import { Link } from 'react-router-dom';

/*
    이미지 캐러셀 컨테이너
*/
interface Props {
  breed: string;
  breed_id: number;
  img: string;
  percent: number;
}

function Carousel({ props }: { props: Props[] }) {
  SwiperCore.use([Navigation, Scrollbar]);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [swiperSetting, setSwiperSetting] = useState<Swiper | null>(null);
  console.log(props);
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
      <Button ref={prevRef} isNone={true}>
        <FaArrowLeft style={faStyle} />
      </Button>
      {swiperSetting && (
        <Swiper {...swiperSetting}>
          {props &&
            props.map(prop => (
              <SwiperSlide>
                <Link to={`/detail/${prop.breed_id}`} style={{ textDecoration: 'none' }}>
                  <CarouselBox
                    key={prop.breed_id}
                    img={prop.img}
                    breedName={prop.breed}
                    percent={prop.percent}
                  />
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>
      )}
      <Button ref={nextRef} isNone={true}>
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

const faStyle = {
  width: '2rem',
  height: '1.5rem',
};

export default Carousel;
