import React from "react";
import styled from "styled-components";
import dummy from "../hook/data.json";

export default function MainBody() {
  return (
    <MainBodyDiv>
      {dummy.source.map((e) => {
        return (
          <a target="_blank" href="./detail.html">
            <div>
              <div>
                <MainImgBox alt={e.src} src={e.src} />
              </div>
              <div class="main-info">
                <div class="main-detail">{e.region}</div>
                <div class="main-detail">
                  <span class="main-detail-info">{e.altitude}</span>
                </div>
                <div class="main-detail">
                  <span class="main-detail-info">{e.date}</span>
                </div>
                <div class="main-price main-detail">
                  <span>{e.money}</span>
                </div>
                <span
                  aria-label="평점 5.0점(5점 만점)"
                  class="main-star"
                  role="img"
                >
                  <span class="main-star-svg">
                    <SvgTag
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                    >
                      <path
                        d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
                        fill-rule="evenodd"
                      ></path>
                    </SvgTag>
                  </span>
                  <span aria-hidden="true" class="">
                    5.0
                  </span>
                </span>
              </div>
            </div>
          </a>
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

  padding: 0 80px;

  max-width: 100%;
`;

const MainImgBox = styled.img`
  width: 310px;
  height: 295px;
  border-radius: 10px;
  margin-bottom: 15px;
`;
