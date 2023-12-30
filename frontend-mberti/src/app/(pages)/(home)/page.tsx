'use client'
import './style.scss'
import SubjectContainer from '@/components/subject'
import Modal from '@/view/modal'
import { useState } from 'react'

export default function Home() {

  const elementos = [];
  
  for(let i = 1; i <= 4; i++){
    elementos.push(<SubjectContainer key={i} selectBimestre={i} />)
  }


  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className='mainContainer'>
      {/* TODO: COLOCAR O LOADING NO FINAL */}
      
      {elementos}

      {/* MODAL */}

      <Modal isOpen={isModalOpen} onClose={() => closeModal} />

     
    </main>
  )
}
