"use client";
import { ApiHandle } from "@/services/ApiHandle";
import "./(pages)/(home)/style.scss";
import SubjectContainer from "@/components/subject";
import { useEffect, useState } from "react";
import { getType } from "@/services/types.interface";

export default function Home() {
  const [dataAPI, setDataAPI] = useState<getType>({
    primeiro: [],
    segundo: [],
    terceiro: [],
    quarto: [],
  });

  

  async function callAfterUpdate() {
    const data = await ApiHandle.getAllInfos();
    setDataAPI(data);
  }

  useEffect(() => {
    callAfterUpdate(); // Chama a função dentro do useEffect
  }, []); // A execução ocorre uma vez, sem dependências

  return (
    <main className="mainContainer">
      <SubjectContainer
        selectBimestre={1}
        apiData={dataAPI.primeiro}
        reRender={callAfterUpdate}
      />
      <SubjectContainer
        selectBimestre={2}
        apiData={dataAPI.segundo}
        reRender={callAfterUpdate}
      />
      <SubjectContainer
        selectBimestre={3}
        apiData={dataAPI.terceiro}
        reRender={callAfterUpdate}
      />
      <SubjectContainer
        selectBimestre={4}
        apiData={dataAPI.quarto}
        reRender={callAfterUpdate}
      />
    </main>
  );
}
