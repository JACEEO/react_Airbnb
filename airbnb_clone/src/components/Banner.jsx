import React from "react";
import styled from "styled-components";

export default function Banner() {
  return (
    <BannerTop>
      <h1 class="banner_h1">
        <span class="banner_top">2022 겨울 업그레이드를 소개합니다</span>
      </h1>

      <span class="banner_right">
        <button type="button" class="banner_button">
          <span class="banner_video">
            <img
              class="banner_img"
              height="30"
              width="53"
              src="https://a0.muscache.com/im/pictures/da6ccae2-c381-450d-90f8-54223f6eb6dd.jpg?im_q=highq&amp;im_w=240"
              alt=""
            />
            동영상 재생
          </span>
        </button>

        <div class="banner_line"></div>
        <a target="_blank" href="/" class="banner_a">
          새로운 기능 확인하기
        </a>
      </span>
    </BannerTop>
  );
}

const BannerTop = styled.div`
  padding: 0 80px;

  width: 100%;
  max-width: 1310px;

  background-color: #f7f7f7;

  border-bottom: 1px solid #dddddd;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
