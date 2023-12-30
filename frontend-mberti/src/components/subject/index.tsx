'use Client'
import React, { useEffect, useState } from "react";
import "./style.scss";
import { AddButton } from "../button";
import {SubjectCard} from "../card";
import Modal from "@/view/modal";

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
  

  const disciplinasBimestre: SubjectDataAPI[] = [];


  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  useEffect(() => {
    console.log(isModalOpen)
  
    
  }, [isModalOpen])
  

  return (
    <section className="subject_container">
      <header>
        <h1 className="subject_container_text">Bimestre {selectBimestre}</h1>
        <AddButton openModal={openModal} />
      </header>

      <div className="cards_grid">
        <SubjectCard />
        {disciplinasBimestre.map((disciplina) => (
          <SubjectCard />
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} currentBimestre={selectBimestre} />
    </section>
  );
};

export default SubjectContainer;
