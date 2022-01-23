import Score from '../components/Score';
import styled from 'styled-components';

function Home() {
  const weekArray = ['일', '월', '화', '수', '목', '금', '토'];
  const today = new Date().getDay();

  return (
    <div>
      <Container>
        <h1>내 일주일은?</h1>
        <Score day={weekArray[today % 7]} />
        <Score day={weekArray[(today + 1) % 7]} />
        <Score day={weekArray[(today + 2) % 7]} />
        <Score day={weekArray[(today + 3) % 7]} />
        <Score day={weekArray[(today + 4) % 7]} />
        <Score day={weekArray[(today + 5) % 7]} />
        <Score day={weekArray[(today + 6) % 7]} />
      </Container>
    </div>
  );
}

const Container = styled.header`
  background-color: #fff;
  border: 1px solid #ddd;
  width: 350px;
  box-sizing: border-box;
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
  }
`;

export default Home;
