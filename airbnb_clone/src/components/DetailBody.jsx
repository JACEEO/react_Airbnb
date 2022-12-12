import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

export default function DetailBody() {
  const location = useLocation();

  const detail = location.state.e;
  return (
    <>
      <section>
        <div className="main-section-padding">
          <div className="main-section-margin">
            <div className="main-section-padding-top">
              <span>
                <h1 className="main-h1">
                  10-Acre Retreat-10 Beds-Hot Tub-Pool Table-Pets
                </h1>
              </span>
              <div className="main-between">
                <div className="main-host">
                  <span className="main-star">
                    <span>
                      <StarSvg
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="presentation"
                        focusable="false"
                      >
                        <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"></path>
                      </StarSvg>
                    </span>
                    <span className="">5.0 · </span>
                    <span className=""> 후기 7개 · </span>
                  </span>

                  <span className="main-star">
                    <span> 슈퍼호스트 · </span>
                  </span>

                  <span className="main-star">
                    <span> {detail.region} </span>
                  </span>
                </div>
                <div className="main-save">
                  <div className="main-star">
                    <span className="_14tkmhr">
                      <HeartSvg
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="presentation"
                        focusable="false"
                      >
                        <g fill="none">
                          <path d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9"></path>
                          <path d="M16 3v23V3z"></path>
                          <path d="M6 13l9.293-9.293a1 1 0 0 1 1.414 0L26 13"></path>
                        </g>
                      </HeartSvg>
                    </span>
                    공유하기
                  </div>

                  <div className="main-star">
                    <span className="_14tkmhr">
                      <HeartSvg
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="presentation"
                        focusable="false"
                      >
                        <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
                      </HeartSvg>
                    </span>
                    저장
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const StarSvg = styled.svg`
  display: block;
  height: 14px;
  width: 14px;
  fill: currentcolor;
`;

const HeartSvg = styled.svg`
  display: block;
  fill: none;
  height: 16px;
  width: 16px;
  stroke: currentcolor;
  stroke-width: 2;
  overflow: visible;
`;
