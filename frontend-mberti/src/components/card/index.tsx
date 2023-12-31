
import React, { useState } from "react";
import "./styles.scss";
import { DeleteButton } from "../button";
import GradeContainer from "../gradeContainer";


interface SubjectInterface {
  id: string,
  name: string,
  nota: number,
  date?: string
  reRender: Function
}

export const SubjectCard = (data : SubjectInterface) => {
 

  return (
    <div className={`card_container ${data.name.toLowerCase()}`}>
      <h2 className="card_title">{data.name}</h2>
      <p className="card_text">{data.date}</p>
      <DeleteButton id={data.id} reRender={data.reRender} />
      <GradeContainer grade={data.nota} id={data.id} />
    </div>
  );
};


interface SubjectInputInterface {
  name: string,
}

export const SubjectInputCard = ({name}:SubjectInputInterface) => {
 

  return (
    <div className={`card_input_container ${name.toLowerCase()}`}>
      <h2 className="card_title">{name}</h2>
    </div> 
  );
};
