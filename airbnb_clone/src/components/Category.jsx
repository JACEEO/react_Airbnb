import React from "react";
import styled from "styled-components";
import main from "../hook/data.json";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, FreeMode, Mousewheel } from "swiper";

export default function Category() {
  return (
    <CategoryBox>
      <Swiper
        slidesPerView={10}
        spaceBetween={10}
        slidesPerGroup={10}
        freeMode={true}
        navigation={true}
        mousewheel={true}
        modules={[Navigation, FreeMode, Mousewheel]}
        className="mySwiper"
      >
        {main.category.map((app) => {
          return (
            <SwiperSlide>
              <CategoryBtn
                class="category-btn"
                role="radio"
                aria-checked="true"
                type="button"
              >
                <div class="category-btn-div">
                  <span class="category-span">
                    <CategoryImg src={app.src} alt={app.name} />
                    <div>
                      <span class="category-font">{app.name}</span>
                    </div>
                  </span>
                </div>
                <ActiveBar />
              </CategoryBtn>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </CategoryBox>
  );
}

const CategoryBox = styled.div`
  padding: 18px 0;

  width: 100%;
  height: 98px;
  max-width: 1200px;

  position: unset;
  height: 100%;
  background-color: #ffffff;

  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  grid-column-gap: 32px;

  margin-left: 80px;

  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const CategoryBtn = styled.button`
  display: inline-flex;
  flex-flow: column;
  justify-content: space-between;

  height: 100%;

  color: #717171;

  background-color: #ffffff;

  cursor: pointer;

  :hover {
    color: #222222;
  }
`;

const CategoryImg = styled.img`
  width: 24px;
  height: 24px;

  color: #717171;
`;

const ActiveBar = styled.div`
  ${CategoryBtn}:hover & {
    width: 100%;
    border: 1px solid #dddddd;
  }
`;
