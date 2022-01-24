import { useState } from 'react';
import { Link, useParams } from 'react-router-dom'; // 주소에서 id를 받아오기 위해서 사용
import styled from 'styled-components';
import DetailScore from '../components/DetailScore';

function Detail() {
  const { day } = useParams();

  return (
    <div>
      <Container>
        <h1>
          <span>{day}요일</span> 평점 남기기
        </h1>
        <DetailScore />
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

  .score {
    display: flex;

    div {
      height: 33px;
      width: 33px;
      background-color: rgb(221, 221, 221);
      margin: 5px;
      border-radius: 50%;
    }
  }
  button {
    width: 200px;
    height: 50px;
    color: #fff;
    background-color: blue;
    border: none;
    border-radius: 10px;
    margin-top: 20px;
    font-weight: 600;
  }
`;

export default Detail;
