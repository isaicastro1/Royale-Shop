import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationWrapper = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 15px;
`;

export const NavLinksContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 500px) {
    justify-content: space-around;
  }
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;

  @media screen and (max-width: 500px) {
    padding: 0;

    & p {
      font-size: 13px;
    }
  }
`;
