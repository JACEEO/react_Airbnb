import styled from "styled-components";

export const NavBar = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;

  max-width: 1470px;

  position: sticky;
  top: 0;
  z-index: 10;

  background-color: #ffffff;
  height: ${(props) => (props.value ? "100%" : "100px")};

  padding: 0 80px;
  border-bottom: 1px solid #dddddd;

  transform: translateY(${(props) => (props.value ? "0" : "70px")});
  transition: transform 250ms ease;
`;

export const NavLink = styled.link`
  cursor: pointer;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const SearchWrap = styled.div`
  padding: 0 24px;
  flex: 0 1 auto;
  width: 460px;
`;

export const NavSearch = styled.div`
  max-width: 1120px;

  text-align: left;
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 40px;
  box-shadow: 0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%);

  align-items: center;
  display: inline-flex;

  visibility: ${(props) => (props.value ? "visible" : "hidden")};

  padding: 0 10px;
`;

export const SearchBox = styled.div`
  position: absolute;
  top: 0;
  visibility: ${(props) => (props.value ? "hidden" : "visible")};

  border: 1px solid #dddddd;
  border-radius: 40px;

  width: 370px;
  height: 60px;

  display: flex;
  justify-content: flex-end;
`;

export const SearchInput = styled.input`
  border: none;
  height: 30px;
  width: 300px;
  position: absolute;
  top: 13px;
  left: 22px;

  font-size: large;
  color: gray;

  z-index: 100;

  :focus {
    outline: none;
  }
`;

export const SearchBoxBtn = styled.button`
  background-color: #ffffff;
  cursor: pointer;

  border-radius: 40px;

  margin-right: 10px;
`;

export const SearchUl = styled.ul`
  visibility: ${(props) => (props.value ? "hidden" : "visible")};

  margin-top: ${(props) => (props.value ? "0" : "10px")};
  width: 370px;

  z-index: 1000;

  height: ${(props) => (props.value ? "0" : "10px")};
`;

export const SearchLi = styled.li`
  height: 30px;

  border: 1px solid #dddddd;
  border-radius: 5px;

  background-color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

export const Profile = styled.div`
  width: 320px;
  height: 80px;

  display: flex;
  justify-content: space-between;

  align-items: center;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const ProfileA = styled.a`
  margin-right: 8px;
  font-size: 0.9rem;
  font-weight: 600;

  @media screen and (max-width: 1240px) {
    font-size: 0.5rem;
  }
`;

export const ProfileDetail = styled.div`
  border: 1px solid #dddddd;
  border-radius: 50px;
  width: 77px;
  height: 42px;
  align-items: center;
  justify-content: space-around;
  display: flex;

  position: relative;

  cursor: pointer;
`;

export const ProfileLogin = styled.div`
  width: 250px;
  height: 250px;

  box-shadow: 1px 1px 5px 1px #dddddd;

  position: absolute;

  border: none;
  border-radius: 10px;
  top: 50px;
  right: 0;

  background-color: #ffffff;

  display: ${(props) => (props.value ? "none" : "flex")};
  justify-content: space-around;
  flex-direction: column;
`;
