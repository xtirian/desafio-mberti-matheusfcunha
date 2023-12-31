import type { Metadata } from 'next';
import '../sass/globals.scss';


export const metadata: Metadata = {
  title: 'desafio-Matheus F Cunha',
  description: 'Frontend criado para atender as demandas do teste técnico enviados pela Monteiro Berti',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
