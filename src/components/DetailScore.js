import { useEffect, useState } from 'react';
import styled from './DetailScore.module.css';
import styled2 from 'styled-components';

function DetailScore() {
  const [clicked, setClicked] = useState(0);

  const onClick = (e) => {
    e.preventDefault();
    setClicked((now) => (now = e.target.id));
  };

  useEffect(() => {
    changeBg();
  }, [clicked]);

  const changeBg = () => {
    for (let i = 1; i <= 5; i++) {
      const temp = document.getElementById(i);
      if (i <= clicked) {
        if (temp.classList.contains(styled.changeBg)) continue;
        else {
          temp.classList.add(styled.changeBg);
        }
      } else {
        temp.classList.remove(styled.changeBg);
      }
    }
  };

  return (
    <Container id="container">
      <div className={styled.score} id={1} onClick={onClick}></div>
      <div className={styled.score} id={2} onClick={onClick}></div>
      <div className={styled.score} id={3} onClick={onClick}></div>
      <div className={styled.score} id={4} onClick={onClick}></div>
      <div className={styled.score} id={5} onClick={onClick}></div>
    </Container>
  );
}

const Container = styled2.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export default DetailScore;
