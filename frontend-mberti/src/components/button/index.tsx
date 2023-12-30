"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "./style.scss";

//TODO - COLOCAR FUNÇÕES NOS BOTÕES

export const AddButton = () => {
  const isClient = typeof window === "object"; // IMPORTANT BECAUSE THE REACT RUN IN SHADOW DOMS, SO IT HASN'T CONTROL ABOUT THE DOM 'TIL GET TO THE CLIENT SIDE

  // GET THE WINDOW SIZE
  const [windowSize, setWindowSize] = useState({
    width: isClient ? window.innerWidth : 0,
  }); //CHECK IF IS RUNNING IN THE CLIENT SIDE

  useEffect(() => {
    if (!isClient) {
      return;
    }

    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);

    // CALLS THE HANDLER SO IT CAN ATT THE WINDOWS SIZE
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    }; // IMPORTANT SO IT DON'T CAUSE A LOOP
  }, [isClient]); // SO IT ATT EVERY CHANGE ON SCREEN


  // MODDAL

  

  return (
    <>
      {windowSize.width >= 768 ? (
        <button className="custom_button add" title="Clique para adicionar um uma nova nota" aria-label="Clique para adicionar um uma nova nota">
          <p className="text">Lançar nota</p>{" "}
          <Image src="/Plus.svg" width={32} height={32} alt={"Add button"} />{" "}
        </button>
      ) : (
        <button className="custom_button add" title="Clique para adicionar um uma nova nota" aria-label="Clique para adicionar um uma nova nota">
          <p></p>
          <Image src="/Plus.svg" width={32} height={32} alt={"Add button"} />
        </button>
      )}
    </>
  );
};

export const DeleteButton = () => {
  return (
    <button className="custom_button delete" title="Clique para deletar um uma nova nota" aria-label="Clique para deletar um uma nova nota">
      <Image src="/Trash.svg" width={32} height={32} alt={"Delete button"} />
    </button>
  );
};
