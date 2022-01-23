import { Link } from 'react-router-dom';
import styled from './Score.module.css';

function Scrore({ day }) {
  return (
    <div className={styled.container}>
      <p>{day}</p>
      <div className={styled.weekScore}>
        <div className={styled.score}></div>
        <div className={styled.score}></div>
        <div className={styled.score}></div>
        <div className={styled.score}></div>
        <div className={styled.score}></div>
        <Link to={`/review/${day}`}>
          <div className={styled.moveButton}> </div>
        </Link>
      </div>
    </div>
  );
}

export default Scrore;
