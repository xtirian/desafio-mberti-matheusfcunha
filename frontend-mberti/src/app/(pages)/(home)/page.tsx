'use client'
import './style.scss'
import SubjectContainer from '@/components/subject'

export default function Home() {

  const elementos = [];
  
  for(let i = 1; i <= 4; i++){
    elementos.push(<SubjectContainer key={i} selectBimestre={i} />)
  }

  return (
    <main className='mainContainer'>
      {/* TODO: COLOCAR O LOADING NO FINAL */}
      
      {elementos}

      {/* MODAL */}
     
    </main>
  )
}
