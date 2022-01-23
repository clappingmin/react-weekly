import { Link, useParams } from 'react-router-dom'; // 주소에서 id를 받아오기 위해서 사용
import styled from 'styled-components';

function Detail() {
  const { day } = useParams();

  return (
    <div>
      <Container>
        <h1>
          <span>{day}요일</span> 평점 남기기
        </h1>
        <Link to="/">
          <button>평점 남기기</button>
        </Link>
      </Container>
    </div>
  );
}

const Container = styled.header`
  background-color: #fff;
  border: 1px solid #ddd;
  box-sizing: border-box;
  width: 350px;
  height: 688px;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 30px;
  padding: 30px;
  align-items: center;

  h1 {
    text-align: center;
    font-size: 20px;

    span {
      background-color: rgb(241, 168, 59);
      color: #fff;
      padding: 3px;
      border-radius: 5px;
    }
  }
`;

export default Detail;
