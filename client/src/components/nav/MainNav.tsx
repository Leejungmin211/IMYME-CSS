import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavWrapper = styled.div`
  width: 150px;
  height: 100%;
  margin-left: 40px;
`;

function MainNav() {
  return (
    <NavWrapper>
      <NavLink to='/community'>
        <div>COMMUNITY</div>
      </NavLink>
      <NavLink to='/shoppingmall'>
        <div>SHOPPINGMALL</div>
      </NavLink>
      <NavLink to='/users'>
        <div>USERS</div>
      </NavLink>
    </NavWrapper>
  );
}

export default MainNav;
