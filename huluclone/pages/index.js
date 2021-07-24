import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hulu Clone</title>
        <meta name="description" content="Hulu Clone app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header Component */}
      <Header/>

      {/* Navbar Component */}

      {/* Body Component */}
    </div>
  )
}
