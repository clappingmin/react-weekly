import { Link } from 'react-router-dom';
import styled from './Score.module.css';
import styled2 from 'styled-components';

function Scrore({ day, rand }) {
  return (
    <div className={styled.container}>
      <p>{day}</p>
      <div className={styled.weekScore}>
        <Circle number={1} rand={rand}></Circle>
        <Circle number={2} rand={rand}></Circle>
        <Circle number={3} rand={rand}></Circle>
        <Circle number={4} rand={rand}></Circle>
        <Circle number={5} rand={rand}></Circle>
        <Link to={`/review/${day}`}>
          <div className={styled.moveButton}> </div>
        </Link>
      </div>
    </div>
  );
}
const Circle = styled2.div`
  height: 33px;
  width: 33px;
  background-color: ${(props) =>
    props.number <= props.rand ? 'rgb(252, 236, 96)' : 'rgb(221, 221, 221)'};
  margin: 5px;
  border-radius: 50%;
`;

export default Scrore;
