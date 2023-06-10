import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  height: 100%;
  margin: 60px 0px 0px 40px;
`;

const NavStyle = styled(NavLink)`
  margin-bottom: 30px;
  > p {
    color: var(--brand-color);
    font-weight: 900;
    letter-spacing: 1px;
    display: inline;
    position: relative;
    &:hover {
      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -1px; /* 조정할 값 */
        width: 100%;
        height: 100%; /* 텍스트의 높이만큼 border 적용 */
        border-bottom: 5px solid var(--accent-opacity-color);
        border-radius: 3px;
        box-sizing: border-box;
        z-index: -1;
      }
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
