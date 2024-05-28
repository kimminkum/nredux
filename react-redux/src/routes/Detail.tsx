import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

const Detail: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // useParams 훅을 사용하여 URL에서 id 추출
  console.log(id); // id 값 확인

  return (
    <div>
      <h1>Detail Page</h1>
      <p>{id}</p>
    </div>
  );
};

export default Detail;
