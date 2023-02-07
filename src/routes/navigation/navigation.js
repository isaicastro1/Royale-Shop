import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";

import { signOutUser } from "../../utils/firebase/firebase";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";

import {
  NavigationWrapper,
  LogoContainer,
  NavLink,
  NavLinksContainer,
} from "./navigation.styles.js";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <>
      <NavigationWrapper>
        <LogoContainer to="/">
          <CrownLogo />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="/shop">
            <p>SHOP</p>
          </NavLink>

          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              <p>SIGN OUT</p>
            </NavLink>
          ) : (
            <NavLink to="/auth">
              <p>SIGN IN</p>
            </NavLink>
          )}

          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationWrapper>
      <Outlet />
    </>
  );
};

export default Navigation;
