import styled from 'styled-components';

const Image = styled.img`
  width: 200px;
  &:hover {
    content: url('/images/logoHover.svg');
  }
`;

function Header() {
  return (
    <div>
      <Image src={'/images/logo.svg'} alt='logo' />
    </div>
  );
}

export default Header;
