import React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { guestChildNum, guestNum } from "../recoil/airplane";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function MainRight() {
  const location = useLocation();

  const navigate = useNavigate();

  const detail = location.state.e;

  const money = detail.money;

  const clean = parseInt(money * 0.08);

  const service = parseInt(money * 0.05);

  const tax = parseInt(money * 0.1);

  const makeCash = (e) => {
    return Number(e).toLocaleString();
  };

  const [num, setNum] = useRecoilState(guestNum);

  const onPlus = () => {
    setNum(num + 1);
  };

  const onMinus = () => {
    if (num > 1) {
      return setNum(num - 1);
    }
    return;
  };

  const [childNum, setChildNum] = useRecoilState(guestChildNum);

  const onChildPlus = () => {
    setChildNum(childNum + 1);
  };

  const onChildMinus = () => {
    if (childNum > 0) {
      return setChildNum(childNum - 1);
    }
    return;
  };

  const [guest, setGuest] = useState(true);

  const onGuest = () => {
    setGuest(!guest);
  };

  return (
    <>
      <div className="detail-side">
        <div className="sticky">
          <div className="side-bar">
            <div className="side-blk">
              <div className="side-mny">
                <div>
                  <span className="side-mny-span">₩{makeCash(money)}</span>
                  <span>/ 박</span>
                </div>

                <div className="side-star">
                  <span>
                    <SideStar
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                    >
                      <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"></path>
                    </SideStar>
                  </span>
                  <span>{detail.star} ·</span>
                  <span>후기 7개</span>
                </div>
              </div>

              <div className="side-btn-div">
                <div className="side-chk-box">
                  <div className="side-chkin">
                    <div>체크인</div>
                    <div>2022. 12. 06.</div>
                  </div>
                  <div className="side-chkout">
                    <div>체크아웃</div>
                    <div>2022. 12. 11.</div>
                  </div>
                </div>
                <SideGuest value={guest}>
                  <div>
                    <div>인원</div>
                    <div>게스트 {num + childNum}명</div>
                  </div>
                  <div className="side-guest-cnt">
                    <MdOutlineKeyboardArrowDown
                      onClick={onGuest}
                      className="rotate"
                    />
                  </div>
                </SideGuest>
              </div>
              <GuestBox value={guest}>
                <GuestLi>
                  <div style={{ padding: "5px 0" }}>
                    성인
                    <div style={{ fontSize: "13px", paddingTop: "5px" }}>
                      만 13세 이상
                    </div>
                  </div>
                  <GusetNumber>
                    <SumSpan onClick={onMinus}>-</SumSpan>
                    <span>{num}</span>
                    <SumSpan onClick={onPlus}>+</SumSpan>
                  </GusetNumber>
                </GuestLi>
                <GuestLi>
                  <div style={{ padding: "5px 0" }}>
                    유아
                    <div style={{ fontSize: "13px", paddingTop: "5px" }}>
                      만 2세 이상 ~ 만 12세
                    </div>
                  </div>
                  <GusetNumber>
                    <SumSpan onClick={onChildMinus}>-</SumSpan>
                    <span>{childNum}</span>
                    <SumSpan onClick={onChildPlus}>+</SumSpan>
                  </GusetNumber>
                </GuestLi>
              </GuestBox>
              <div
                className="side-res"
                onClick={() => {
                  navigate(`/reservation/${detail.id}`, { state: detail });
                }}
              >
                <button className="side-res-btn">예약하기</button>
              </div>

              <div className="res-info">
                예약 확정 전에는 요금이 청구되지 않습니다.
              </div>
              <div className="side-cal-div">
                <div className="side-cal">
                  <div>{makeCash(money)} x 5박</div>
                  <div>{makeCash(money * 5)}</div>
                </div>
                <div className="side-cal">
                  <div>청소비</div>
                  <div>{makeCash(clean)}</div>
                </div>
                <div className="side-cal">
                  <div>서비스 수수료</div>
                  <div>{makeCash(service)}</div>
                </div>
                <div className="side-cal">
                  <div>세금</div>
                  <div>{makeCash(tax)}</div>
                </div>
              </div>
              <div className="side-allcal">
                <div className="side-cal">
                  <div>총 합계</div>
                  <div>₩{makeCash(clean + service + tax + money * 5)}원</div>
                </div>
              </div>
            </div>
          </div>
          <div className="side-info">
            <div className="side-info-div">
              <h2 className="side-info-h2">저렴한 요금</h2>
              <span>
                검색하시는 날짜의 요금은 지난 3개월의 평균 1박 요금보다 ₩283,513
                저렴합니다.
              </span>
            </div>
            <div>
              <MoneySvg
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
              >
                <g stroke="none">
                  <path d="M25.55 1a5 5 0 0 1 3.344 1.282l.192.182 17.207 17.208a3 3 0 0 1 .135 4.098l-.135.144-18.379 18.379a3.001 3.001 0 0 1-3.32.63l-6.42 3.81c-1.296.768-2.948.452-3.894-.736l-.115-.153-.118-.186L2.094 25.046a5 5 0 0 1-.53-3.7l3.435-14.01L5 6a5 5 0 0 1 4.783-4.995L10 1h15.55zM5 15.733l-1.494 6.09a3 3 0 0 0 .219 2.034l.1.186 11.93 20.574.07.112a1 1 0 0 0 1.328.283l5.797-3.441L6.464 25.086a5 5 0 0 1-1.457-3.272L5 21.55v-5.817zM25.55 3H10a3 3 0 0 0-2.995 2.824L7 6v15.55a3 3 0 0 0 .743 1.977l.136.144L25.086 40.88a1 1 0 0 0 1.32.083l.094-.083L44.88 22.5a1 1 0 0 0 .083-1.32l-.083-.094L27.67 3.879A3 3 0 0 0 25.55 3zM14 7a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                  <path
                    d="M25.556 5H10a1 1 0 0 0-.993.883L9 6v15.556a1 1 0 0 0 .206.608l.087.1 16.505 16.505 16.971-16.971L26.263 5.293a1 1 0 0 0-.575-.284L25.556 5z"
                    fillOpacity=".2"
                  ></path>
                </g>
              </MoneySvg>
            </div>
          </div>
          <div className="report">
            <div>
              <button className="report-btn">
                <span>
                  <ReportSvg
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                  >
                    <path d="M28 6H17V4a2 2 0 0 0-2-2H3v28h2V18h10v2a2 2 0 0 0 2 2h11l.115-.006a1 1 0 0 0 .847-1.269L27.039 14l1.923-6.724A1 1 0 0 0 28 6z"></path>
                  </ReportSvg>
                </span>
                <span className="report-con"> 숙소 신고하기 </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const SideStar = styled.svg`
  display: block;
  height: 12px;
  width: 12px;
  fill: currentcolor;
`;

const SideGuest = styled.div`
  padding: 26px 6px 10px 12px;

  display: flex;
  justify-content: space-between;

  align-items: center;

  .rotate {
    font-size: 28px;
    cursor: pointer;
    transform: rotate(${(props) => (props.value ? "0" : "180deg")});
    transition: all 0.3s;
  }
`;

const MoneySvg = styled.svg`
  display: block;
  height: 32px;
  width: 32px;
  fill: rgb(227, 28, 95);
  stroke: currentcolor;
`;

const ReportSvg = styled.svg`
  display: block;
  height: 16px;
  width: 16px;
  fill: currentcolor;
`;

const GuestBox = styled.div`
  position: absolute;

  top: 210px;

  width: 280px;
  height: 200px;

  border: 1px solid;

  background-color: #ffffff;

  padding: 20px;

  visibility: ${(props) => (props.value ? "hidden" : "visible")};
  transition: all 0.2s;
`;

const GusetNumber = styled.div`
  padding: 10px;

  width: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SumSpan = styled.span`
  font-size: 24px;

  color: #2e2e2e;
  border: 1px solid #dddddd;
  border-radius: 50%;
  padding: 4px 10px;

  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

const GuestLi = styled.li`
  list-style: none;

  display: flex;
  justify-content: space-between;
`;
