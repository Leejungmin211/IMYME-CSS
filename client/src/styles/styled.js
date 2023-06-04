import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  margin: 20px 30px 0px 30px;
`;

export const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
`;

export const InnerWrapper = styled.div`
  width: 1200px; /* 기본 컨텐츠영역 크기 */
  height: 100%;
  box-sizing: border-box;
  position: relative;
  margin-left: 100px;
  display: flex;
  justify-content: center;
`;

export const TextWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  justify-content: space-between;
  align-items: baseline;
`;

export const ListText = styled.h1`
  color: var(--color-lightviolet);
  font-size: 62px;
  font-weight: 900;
`;
