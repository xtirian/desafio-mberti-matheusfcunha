import Image from 'next/image'
import styles from './page.module.scss'
import { AddButton, DeleteButton } from '@/components/button'
import SubjectCard from '@/components/card'

export default function Home() {
  return (
    <main>
      {/* TODO: COLOCAR O LOADING NO FINAL */}

      <SubjectCard />
    </main>
  )
}
