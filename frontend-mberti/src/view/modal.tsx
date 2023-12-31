"use Client";
import React, { ReactNode, useState } from "react";
import "./style.scss";
import Image from "next/image";
import { SubjectInputCard } from "@/components/card";
import { ConfirmButton } from "@/components/button";
import { DataHandler } from "@/services/dataHandler";
import { ApiHandle } from "@/services/ApiHandle";

interface ModalTypes {
  isOpen: boolean;
  onClose: Function;
  currentBimestre: number;
  reRender: Function;
}

const Modal = ({ isOpen, onClose, currentBimestre, reRender }: ModalTypes) => {
  const [Disciplina, setDisciplina] = useState("");
  const [Nota, setNota] = useState(0);
  const Bimestre = DataHandler.bimestreFilter(currentBimestre);

  if (!isOpen) return null;

  // FOR RENDER
  const disciplinas = ["Biologia", "Artes", "Geografia", "Sociologia"];

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h3>Bimestre {currentBimestre}</h3>
          <span className="modal-close" onClick={() => onClose()}>
            <Image src={"/X.svg"} width={32} height={32} alt={"close button"} />
          </span>
        </div>
        <form
          className="modal-content"
          onSubmit={async (e) => {
            e.preventDefault();

            const result = {
              name: Disciplina,
              bimestre: Bimestre,
              grade: Nota,
            };

            const {data} = await ApiHandle.createNewGrade(result);

            console.log(data)

            if (data != undefined) {
              onClose();
              alert("Adicionado com sucesso");
              reRender();
            }
          }}
        >
          <h4
            title="Selecione uma disciplina"
            aria-label="Selecione uma disciplina"
          >
            Disciplina
          </h4>
          <div className="modal-disciplina_grid">
            {disciplinas.map((nome, index) => (
              <label key={index} title={nome} aria-label={nome}>
                <input
                  type="radio"
                  name="disciplina"
                  value={nome}
                  onChange={(e) => {
                    const inputValue = e.target.value;

                    setDisciplina(inputValue);
                  }}
                />
                <SubjectInputCard name={nome} />
              </label>
            ))}
          </div>
          <div className="modal-nota">
            <p title="Adicione uma nota" aria-label="Adicione uma nota">Nota</p>
            <label className="nota_container">
              <input
                type="number"
                step={0.1}
                placeholder="7.4"
                min={0}
                max={10}
                onChange={(e) => {
                  const inputValue = Number(e.target.value);
                  setNota(inputValue);
                }}
                required
              />
            </label>
          </div>
          <ConfirmButton />
        </form>
      </div>
    </div>
  );
};

export default Modal;
