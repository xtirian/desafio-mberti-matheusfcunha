"use client";
import React, { useState } from "react";
import "./style.scss";
import Image from "next/image";

const GradeContainer = () => {
  const [FlagForm, setFlagForm] = useState(false);
  const [Nota, setNota] = useState(0);

  const openForm = () => {
    FlagForm?setFlagForm(!FlagForm):setFlagForm(!FlagForm);

    console.log(FlagForm)
  }

  return (
    <div className="grade_container" onDoubleClick={() => openForm()} title="Clique duas vezes para editar a nota" aria-label="Clique duas vezes para editar a nota" >
      <Image src={"/Chart.svg"} width={19.75} height={20} alt={"chart"} />

      {FlagForm ? 
      <form action="" method="put" onSubmit={e => {
        e.preventDefault()
        const inputValue = e.currentTarget as HTMLFormElement
        console.log("submit")
        setNota(Number(inputValue[0].value))

        setFlagForm(false)
      }}><label className="grade_text">
        Nota:{" "} 
        <input type="number" step={0.01}  min={0} max={10} placeholder="Nota" autoFocus={true} required />
        </label>
      </form>
      : <>
      <p className="grade_text">Nota: {Nota.toFixed(2)}</p>
      </>}
    </div>
  );
};

export default GradeContainer;
