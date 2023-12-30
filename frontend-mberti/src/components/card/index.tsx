
import React, { useState } from "react";
import "./styles.scss";
import { DeleteButton } from "../button";
import GradeContainer from "../gradeContainer";

const SubjectCard = () => {
 

  return (
    <div className={`card_container biologia`}>
      <h2 className="card_title">Biologia</h2>
      <p className="card_text">28/04/2022</p>
      <DeleteButton />
      <GradeContainer />
    </div>
  );
};

export default SubjectCard;
