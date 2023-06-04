import { InnerWrapper, TextWrapper, ListText } from '../styles/styled';

function Users() {
  return (
    <InnerWrapper>
      <TextWrapper>
        <div>789개의 게시글이 있습니다.</div>
        <ListText>USERS</ListText>
        <div>홈 커뮤니티</div>
      </TextWrapper>
    </InnerWrapper>
  );
}

export default Users;
