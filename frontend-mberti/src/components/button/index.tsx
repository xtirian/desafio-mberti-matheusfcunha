"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "./style.scss";

//TODO - COLOCAR FUNÇÕES NOS BOTÕES
interface ButtonFunction {
  openModal?: Function;
  deleteCard?: Function;
}

export const AddButton = ({ openModal }: ButtonFunction) => {
  // MODDAL

  return (
    <button
      className="custom_button add"
      title="Clique para adicionar um uma nova nota"
      aria-label="Clique para adicionar um uma nova nota"
      onClick={() => openModal !== undefined && openModal()}
    >
      <p className="text">Lançar nota</p>
      <Image src="/Plus.svg" width={32} height={32} alt={"Add button"} />{" "}
    </button>
  );
};

export const DeleteButton = () => {
  return (
    <button
      className="custom_button delete"
      title="Clique para deletar um uma nova nota"
      aria-label="Clique para deletar um uma nova nota"
    >
      <Image src="/Trash.svg" width={32} height={32} alt={"Delete button"} />
    </button>
  );
};

export const ConfirmButton = () => {
  // MODDAL

  return (
    <button type="submit"
      className="custom_button formSubmit"
      title="Clique para confirmar e adicionar nota"
      aria-label="Clique para confirmar e adicionar nota"
      
    >
      <p className="text">Confirmar</p>
    </button>
  );
};