import Head from 'next/head'
import styles from '../styles/Home.module.css'
import SimpleCard from './components/card';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>XIMB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://ximb.edu.in/">XIMB Dashboard!</a>
        </h1>

        <SimpleCard/>

      </main>
    </div>
  )
}
