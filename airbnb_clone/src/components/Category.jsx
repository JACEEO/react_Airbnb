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
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export default function Category() {
  const navigate = useNavigate();

  const [id, setId] = useState(true);

  const pageNav = () => {
    setId((prev) => {
      return !prev;
    });
    navigate(`/`);
    console.log(id);
  };

  // useEffect(() => {
  //   alert(`first render`);
  //   if (!id) {
  //     return () => {
  //       alert(false);
  //     };
  //   }

  //   return () => {
  //     alert(`change render`);
  //   };
  // }, [id]);
  return (
    <CategoryWrap>
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
          {main.category.map((app, index) => {
            return (
              <SwiperSlide key={index}>
                <CategoryBtn
                  className="category-btn"
                  role="radio"
                  aria-checked="true"
                  type="button"
                  onClick={pageNav}
                >
                  <div className="category-btn-div">
                    <span className="category-span">
                      <CategoryImg src={app.src} alt={app.name} />
                      <div>
                        <span className="category-font">{app.name}</span>
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
      <FilterWrap>
        <Filter>
          <svg
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              display: "block",
              height: "14px",
              width: "14px",
              marginRight: "10px",
            }}
            aria-hidden="true"
            role="presentation"
            focusable="false"
          >
            <path d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
          </svg>
          필터
        </Filter>
      </FilterWrap>
    </CategoryWrap>
  );
}

const CategoryWrap = styled.div`
  position: sticky;
  top: 81px;
  z-index: 1;

  display: flex;
`;

const FilterWrap = styled.div`
  width: 130px;
  background-color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

const Filter = styled.div`
  display: flex;

  font-size: 13px;
  padding: 15px 18px;
  border: 1px solid #dddddd;
  border-radius: 10px;
`;

const CategoryBox = styled.div`
  padding: 18px 0;

  width: 100%;
  height: 98px;
  max-width: 1200px;

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
