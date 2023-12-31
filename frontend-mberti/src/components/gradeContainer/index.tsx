"use client";
import React, { useEffect, useState } from "react";
import "./style.scss";
import Image from "next/image";
import { ApiHandle } from "@/services/ApiHandle";

interface gradeContainerTypes {
  grade: number;
  id: string;
}

const GradeContainer = ({ grade, id }: gradeContainerTypes) => {
  const [FlagForm, setFlagForm] = useState(false);
  const [Nota, setNota] = useState(grade);

  const openForm = () => {
    FlagForm ? setFlagForm(!FlagForm) : setFlagForm(!FlagForm);
  };


  const [GoodGrade, setGoodGrade] = useState("bad")

  const [ImageLink, setImageLink] = useState("/badChart.svg")



  useEffect(() => {
    if(Nota<=5){
      setGoodGrade("bad")    
      setImageLink("/badChart.svg")  
    } 
    if(Nota > 5 && Nota < 7.5){
      setGoodGrade("average") 
      setImageLink("/averageChart.svg")     
    } 
    if(Nota >= 7.5){
      setGoodGrade("good")      
      setImageLink('/goodChart.svg')
    } 

  }, [Nota])

  
  

  return (
    <div
      className={`grade_container ${GoodGrade}`}
      onDoubleClick={() => openForm()}
      title="Clique duas vezes para editar a nota"
      aria-label="Clique duas vezes para editar a nota"
    >
      <Image src={ImageLink} width={19.75} height={20} alt={"chart"} />

      {FlagForm ? (
        <form
          action=""
          method="put"
          onSubmit={(e) => {
            e.preventDefault();

            const form = e.currentTarget as HTMLFormElement;

            const inputValue = form.elements[0] as HTMLInputElement;

            const putForm = {
              id: id,
              grade: Number(inputValue.value),
            };

            try {
              ApiHandle.updateGrade(putForm);

              setNota(Number(inputValue.value));

              setFlagForm(false);
            } catch (error) {
              alert(error)
            }
          }}
        >
          <label className="grade_text">
            Nota:{" "}
            <input
              type="number"
              step={0.1}
              min={0}
              max={10}
              placeholder="Nota"
              autoFocus={true}
              required
            />
          </label>
        </form>
      ) : (
        <>
          <p className="grade_text">Nota: {Nota.toFixed(1)}</p>
        </>
      )}
    </div>
  );
};

export default GradeContainer;
