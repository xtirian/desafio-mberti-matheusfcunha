
import React, { useState } from "react";
import "./styles.scss";
import { DeleteButton } from "../button";
import GradeContainer from "../gradeContainer";


interface SubjectInterface {
  disciplina: string,
  nota?: number
}

export const SubjectCard = () => {
 

  return (
    <div className={`card_container biologia`}>
      <h2 className="card_title">Biologia</h2>
      <p className="card_text">28/04/2022</p>
      <DeleteButton />
      <GradeContainer />
    </div>
  );
};



export const SubjectInputCard = ({disciplina}:SubjectInterface) => {
 
  const disciplinaClass = disciplina.toLowerCase()

  return (
    <div className={`card_input_container ${disciplina.toLowerCase()}`}>
      <h2 className="card_title">{disciplina}</h2>
    </div> 
  );
};
