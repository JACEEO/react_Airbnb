import React from "react";
import styled from "styled-components";

export default function MainLeft() {
  return (
    <>
      <div className="detail-user">
        <div className="detail-user-info">
          <div>
            <h2 className="detail-h2">Kia And Rob 님이 호스팅하는 집 전체</h2>
            <span className="detail-span">
              최대 인원 14명 · 침실 5개 · 침대 9개 · 욕실 3.5개
            </span>
          </div>

          <div>
            <img
              className="detail-img"
              alt="Kia And Rob님은 슈퍼호스트입니다. Kia And Rob님에 대해 자세히 알아보세요."
              src="https://a0.muscache.com/im/pictures/user/e9ed23e7-3c33-499f-a26d-3ff3b8dc3542.jpg?im_w=240"
              data-original-uri="https://a0.muscache.com/im/pictures/user/e9ed23e7-3c33-499f-a26d-3ff3b8dc3542.jpg?im_w=240"
            />
          </div>
        </div>

        <div className="detail-special">
          <div className="special-thing">
            <div>
              <MedalSvg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
              >
                <path d="M26 2a1 1 0 0 1 .922.612l.04.113 2 7a1 1 0 0 1-.847 1.269L28 11h-3v5h6v2h-2v13h-2l.001-2.536a3.976 3.976 0 0 1-1.73.527L25 29H7a3.982 3.982 0 0 1-2-.535V31H3V18H1v-2h5v-4a1 1 0 0 1 .883-.993L7 11h.238L6.086 8.406l1.828-.812L9.427 11H12a1 1 0 0 1 .993.883L13 12v4h10v-5h-3a1 1 0 0 1-.987-1.162l.025-.113 2-7a1 1 0 0 1 .842-.718L22 2h4zm1 16H5v7a2 2 0 0 0 1.697 1.977l.154.018L7 27h18a2 2 0 0 0 1.995-1.85L27 25v-7zm-16-5H8v3h3v-3zm14.245-9h-2.491l-1.429 5h5.349l-1.429-5z"></path>
              </MedalSvg>
            </div>
            <div className="space">
              <div className="space-font-top">업무 전용 공간</div>
              <div className="space-font-bottom">
                와이파이를 갖추고 업무에 적합한 공용 공간입니다.
              </div>
            </div>
          </div>
          <div className="special-thing">
            <div className="">
              <MedalSvg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
              >
                <path d="m16 17c3.8659932 0 7 3.1340068 7 7s-3.1340068 7-7 7-7-3.1340068-7-7 3.1340068-7 7-7zm0 2c-2.7614237 0-5 2.2385763-5 5s2.2385763 5 5 5 5-2.2385763 5-5-2.2385763-5-5-5zm9.6666667-18.66666667c1.0543618 0 1.9181651.81587779 1.9945142 1.85073766l.0054858.14926234v6.38196601c0 .70343383-.3690449 1.35080636-.9642646 1.71094856l-.1413082.0779058-9.6666667 4.8333334c-.5067495.2533747-1.0942474.2787122-1.6171466.0760124l-.1717078-.0760124-9.66666666-4.8333334c-.62917034-.3145851-1.04315599-.93418273-1.09908674-1.62762387l-.00648607-.16123049v-6.38196601c0-1.05436179.81587779-1.91816512 1.85073766-1.99451426l.14926234-.00548574zm0 2h-19.33333337v6.38196601l9.66666667 4.83333336 9.6666667-4.83333336z"></path>
              </MedalSvg>
            </div>
            <div className="space">
              <div className="space-font-top">
                Kia And Rob님은 슈퍼호스트입니다
              </div>
              <div className="space-font-bottom">
                슈퍼호스트는 풍부한 경험과 높은 평점을 자랑하며 게스트가
                숙소에서 편안히 머무를 수 있도록 최선을 다하는 호스트입니다.
              </div>
            </div>
          </div>
          <div className="special-thing-bottom">
            <div>
              <MedalSvg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
              >
                <path d="m11.6667 0-.00095 1.666h8.667l.00055-1.666h2l-.00055 1.666 6.00065.00063c1.0543745 0 1.9181663.81587127 1.9945143 1.85073677l.0054857.14926323v15.91907c0 .4715696-.1664445.9258658-.4669028 1.2844692l-.1188904.1298308-8.7476886 8.7476953c-.3334303.3332526-.7723097.5367561-1.2381975.5778649l-.1758207.0077398h-12.91915c-2.68874373 0-4.88181754-2.1223321-4.99538046-4.7831124l-.00461954-.2168876v-21.66668c0-1.05436021.81587582-1.91815587 1.85073739-1.99450431l.14926261-.00548569 5.999-.00063.00095-1.666zm16.66605 11.666h-24.666v13.6673c0 1.5976581 1.24893332 2.9036593 2.82372864 2.9949072l.17627136.0050928 10.999-.0003.00095-5.6664c0-2.6887355 2.122362-4.8818171 4.7832071-4.9953804l.2168929-.0046196 5.66595-.0006zm-.081 8-5.58495.0006c-1.5977285 0-2.9037573 1.2489454-2.9950071 2.8237299l-.0050929.1762701-.00095 5.5864zm-18.586-16-5.999.00062v5.99938h24.666l.00065-5.99938-6.00065-.00062.00055 1.66733h-2l-.00055-1.66733h-8.667l.00095 1.66733h-2z"></path>
              </MedalSvg>
            </div>
            <div className="space">
              <div className="space-font-top">
                11월 30일 오전 3:50 전까지 무료로 취소하실 수 있습니다.
              </div>
              <div className="space-font-bottom"></div>
            </div>
          </div>
        </div>

        <div>
          <section>
            <div className="section-div">
              <h2>
                <img
                  className="section-aircover"
                  src="https://a0.muscache.com/im/pictures/51a7f002-b223-4e05-a2af-0d4838411d92.jpg"
                  alt="에어커버"
                />
              </h2>
              <div className="section-info">
                모든 예약에는 호스트가 예약을 취소하거나 숙소 정보가 정확하지
                않은 경우 또는 체크인에 문제가 있는 상황에 대비한 무료 보호
                프로그램이 포함됩니다.
              </div>
              <button type="button" className="section-btn">
                더 알아보기
              </button>
            </div>
          </section>
        </div>

        <div className="user-cmt">
          <div>
            <span className="user-cmt-span">
              Enjoy a private mountain getaway with huge views on 10 wooded
              acres! The property is nestled among mature timber, with a creek
              running through the backyard. Most days, you'll get to see moose
              :) The main house is 3700+ sq ft with 3 bedrooms, a loft, and 3.5
              bathrooms; the detached garage is heated with 2 separate bunkrooms
              with 5 total beds. Starlink wifi, hot tub, covered deck &amp;
              patio, pool table, sunrise over Pike's Peak, sunset over
              Pennsylvania Mtn, and views of the Milky Way at night :)
            </span>
          </div>
          <div className="user-btn">
            <button className="user-btn-style">
              <span className="section-btn">더 보기</span>
              <span className="user-svg">
                <SeeMoreSvg
                  viewBox="0 0 18 18"
                  role="presentation"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z"></path>
                </SeeMoreSvg>
              </span>
            </button>
          </div>

          <div className="empty-box"></div>
          <div className="empty-box"></div>
        </div>
      </div>
    </>
  );
}

const SeeMoreSvg = styled.svg`
  height: 12px;
  width: 12px;
  display: block;
`;

const MedalSvg = styled.svg`
  display: block;
  height: 24px;
  width: 24px;
  fill: currentcolor;
`;
