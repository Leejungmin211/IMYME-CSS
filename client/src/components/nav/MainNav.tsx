import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavWrapper = styled.div`
  width: 150px;
  height: 100%;
  margin-left: 40px;
`;
const NavStyle = styled(NavLink)`
  > div {
    margin: 15px 0px;
  }
`;

function MainNav() {
  return (
    <NavWrapper>
      <NavStyle to='/community'>
        <div>COMMUNITY</div>
      </NavStyle>
      <NavStyle to='/shoppingmall'>
        <div>SHOPPINGMALL</div>
      </NavStyle>
      <NavStyle to='/users'>
        <div>USERS</div>
      </NavStyle>
    </NavWrapper>
  );
}

export default MainNav;
