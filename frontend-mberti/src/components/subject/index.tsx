'use client'
import React from "react";
import "./style.scss";
import { AddButton } from "../button";
import SubjectCard from "../card";

interface SubjectContainerTypes {
  selectBimestre: number;
}

interface SubjectDataAPI {
  _id: string;
  name: string;
  bimestre: string;
  grade: number;
  createdAt: Date;
  updatedAt: Date;
}

const SubjectContainer = ({ selectBimestre }: SubjectContainerTypes) => {
  const bimestre = ["PRIMEIRO", "SEGUNDO", "TERCEIRO", "QUARTO"];

  const disciplinasBimestre: SubjectDataAPI[] = [];

  return (
    <section className="subject_container">
      <header>
        <h1 className="subject_container_text">Bimestre {selectBimestre}</h1>
        <AddButton />
      </header>

      <div className="cards_grid">
        {disciplinasBimestre.map((disciplina) => (
          <SubjectCard />
        ))}
      </div>
    </section>
  );
};

export default SubjectContainer;
