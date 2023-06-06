import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavWrapper = styled.div`
  width: 150px;
  height: 100%;
  margin: 60px 0px 0px 40px;
`;
const NavStyle = styled(NavLink)`
  > p {
    margin: 30px 0px;
    color: var(--brand-color);
    font-weight: 900;
    letter-spacing: 1px;
    &:hover {
      text-decoration-line: underline;
      text-decoration-color: var(--accent-color);
      text-decoration-thickness: 5px;
    }
  }
`;

function MainNav() {
  return (
    <NavWrapper>
      <NavStyle to='/community'>
        <p>COMMUNITY</p>
      </NavStyle>
      <NavStyle to='/shoppingmall'>
        <p>SHOPPINGMALL</p>
      </NavStyle>
      <NavStyle to='/users'>
        <p>USERS</p>
      </NavStyle>
    </NavWrapper>
  );
}

export default MainNav;
