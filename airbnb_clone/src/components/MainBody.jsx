import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import dummy from "../hook/data.json";
import { AiOutlineHeart } from "react-icons/ai";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination, Mousewheel } from "swiper";
import { useState } from "react";

export default function MainBody() {
  const [select, setSelect] = useState([]);

  const navigate = useNavigate();

  console.log(select);
  return (
    <MainBodyDiv>
      {dummy.source.map((e, index) => {
        return (
          <ImageWrap key={index}>
            <div
              onClick={() => {
                navigate(`/detail/${e.id}`, { state: { e } });
              }}
              style={{ cursor: "pointer" }}
            >
              <Swiper
                navigation={true}
                pagination={true}
                mousewheel={true}
                modules={[Pagination, Navigation, Mousewheel]}
                className="mySwiper"
                style={{ width: "310px" }}
              >
                <SwiperSlide style={{ padding: "0", height: "295px" }}>
                  <MainImgBox alt={e.src} src={e.src} />
                </SwiperSlide>
                <SwiperSlide style={{ padding: "0", height: "295px" }}>
                  <MainImgBox alt={e.src} src={e.src} />
                </SwiperSlide>
                <SwiperSlide style={{ padding: "0", height: "295px" }}>
                  <MainImgBox alt={e.src} src={e.src} />
                </SwiperSlide>
                <SwiperSlide style={{ padding: "0", height: "295px" }}>
                  <MainImgBox alt={e.src} src={e.src} />
                </SwiperSlide>
              </Swiper>

              <div className="main-info">
                <div className="main-detail">{e.region}</div>
                <div className="main-detail">
                  <span className="main-detail-info">{e.altitude}</span>
                </div>
                <div className="main-detail">
                  <span className="main-detail-info">{e.date}</span>
                </div>
                <div className="main-price main-detail">
                  <span>{e.money}</span>
                </div>
                <span className="main-star" role="img">
                  <span className="main-star-svg">
                    <SvgTag
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                    >
                      <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"></path>
                    </SvgTag>
                  </span>
                  <span>5.0</span>
                </span>
              </div>
            </div>

            <Heart>
              <HeartBtn
                onClick={() => {
                  !select.includes(e.id)
                    ? setSelect((select) => [...select, e.id])
                    : setSelect(select.filter((button) => button !== e.id));
                }}
                style={{ color: select.includes(e.id) ? "#ff385c" : "#dddddd" }}
              >
                <AiOutlineHeart
                  style={{
                    width: "25px",
                    height: "25px",
                  }}
                />
              </HeartBtn>
            </Heart>
          </ImageWrap>
        );
      })}
    </MainBodyDiv>
  );
}

const SvgTag = styled.svg`
  display: block;

  height: 12px;
  width: 12px;

  fill: currentcolor;
`;

const MainBodyDiv = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 40px 24px;

  padding: 0 60px 100px 80px;
  max-width: 100%;
`;

const MainImgBox = styled.img`
  width: 100%;
  height: 100%;

  border-radius: 10px;
`;

const ImageWrap = styled.div`
  position: relative;
  height: 100%;

  cursor: pointer;
`;

const Heart = styled.div`
  position: absolute;
  top: 15px;
  right: 10px;
`;

const HeartBtn = styled.button`
  background-color: transparent;
`;
