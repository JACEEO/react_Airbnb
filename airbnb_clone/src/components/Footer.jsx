import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { onTrue } from "../recoil/airplane";

export default function Footer() {
  const on = useRecoilValue(onTrue);

  return (
    <footer>
      <FooterWrap value={on}>
        <div className="footer_box">
          <div className="footer_map">
            <span className="">© 2022 Airbnb, Inc.</span>
            <span className="" aria-hidden="true">
              ·
            </span>
            <a href="/terms/privacy_policy">개인정보 처리방침</a>
            <span aria-hidden="true">·</span>
            <a href="/terms">이용약관</a>
            <span aria-hidden="true">·</span>
            <a href="/sitemaps/v2">사이트맵</a>
            <span aria-hidden="true">·</span>
            <a
              target="_blank"
              href="/home/updated_cancellation_policies?korean_strict_policy=true#strict"
            >
              한국의 변경된 환불 정책
            </a>
            <span aria-hidden="true">·</span>
            <a target="_blank" href="/about/company-details">
              회사 세부정보
            </a>
          </div>

          <div className="footer_mid"></div>

          <div></div>
        </div>

        <div className="footer_info">
          <div className="footer_info_detail">
            웹사이트 제공자: Airbnb Ireland UC, private unlimited company, 8
            Hanover Quay Dublin 2, D02 DP23 Ireland | 이사: Dermot Clarke,
            Killian Pattwell, Andrea Finnegan | VAT 번호: IE9827384L | 사업자
            등록 번호: IE 511825 | 연락처: terms@airbnb.com, 웹사이트,
            080-822-0230 | 호스팅 서비스 제공업체: 아마존 웹서비스 |
            에어비앤비는 통신판매 중개자로 에어비앤비 플랫폼을 통하여 게스트와
            호스트 사이에 이루어지는 통신판매의 당사자가 아닙니다. 에어비앤비
            플랫폼을 통하여 예약된 숙소, 체험, 호스트 서비스에 관한 의무와
            책임은 해당 서비스를 제공하는 호스트에게 있습니다.
          </div>
        </div>
      </FooterWrap>
    </footer>
  );
}

const FooterWrap = styled.div`
  background-color: ${(props) => (props.value ? "#ffffff" : "#c7c6c6")};

  border-top: 1px solid #dddddd;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
