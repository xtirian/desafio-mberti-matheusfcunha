"use Client";
import React, { ReactNode } from "react";
import "./style.scss";
import Image from "next/image";
import { SubjectInputCard } from "@/components/card";
import { ConfirmButton } from "@/components/button";

interface ModalTypes {
  isOpen: boolean;
  onClose: Function;
  currentBimestre: number;
}

const Modal = ({ isOpen, onClose, currentBimestre }: ModalTypes) => {
  if (!isOpen) return null;

  const bimestre = ["PRIMEIRO", "SEGUNDO", "TERCEIRO", "QUARTO"];

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
        <form className="modal-content">
          <h4
            title="Selecione uma disciplina"
            aria-label="Selecione uma disciplina"
          >
            Disciplina
          </h4>
          <div className="modal-disciplina_grid">
            {disciplinas.map((nome) => (
              <label title={nome} aria-label={nome}>
                <input type="radio" name="disciplina" value={nome} />
                <SubjectInputCard disciplina={nome} />
              </label>
            ))}
          </div>
          <div className="modal-nota">
            <p>Nota</p>
            <label className="nota_container">
              <input type="number" step={0.1} placeholder="7.4" />   
            </label>

          </div>
          <ConfirmButton />
        </form>
      </div>
    </div>
  );
};

export default Modal;
