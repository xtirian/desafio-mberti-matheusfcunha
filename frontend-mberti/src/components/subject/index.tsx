"use client";
import React, { useEffect, useState } from "react";
import "./style.scss";
import { AddButton } from "../button";
import { SubjectCard } from "../card";
import Modal from "@/view/modal";
import { DataHandler } from "@/services/dataHandler";

interface SubjectContainerTypes {
  selectBimestre: number;
  apiData: [];
  reRender: Function
}

interface SubjectInterface {
  _id: string,
  name: string,
  grade: number,
  createdAt: string,
  updatedAt: string,
}

const SubjectContainer = ({
  selectBimestre,
  apiData,
  reRender
}: SubjectContainerTypes) => {
  //

  const [Data, setData] = useState(apiData)


  useEffect(() => {
    setData(apiData)
  }, [apiData]);

  // MODAL
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };



 

  return (
    <section className="subject_container">
      <header>
        <h1 className="subject_container_text">Bimestre {selectBimestre}</h1>
        <AddButton openModal={openModal} />
      </header>

      <div className="cards_grid">
        {Data.map((disciplina: SubjectInterface, index) => (
          <SubjectCard
            key={`${disciplina.name} ${index}`}
            name={disciplina.name}
            nota={disciplina.grade}
            date={DataHandler.dateReturn(disciplina.createdAt, disciplina.updatedAt)}
            id={disciplina._id}
            reRender={reRender}
          />
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        currentBimestre={selectBimestre}
        reRender={reRender}

      />
    </section>
  );
};

export default SubjectContainer;
