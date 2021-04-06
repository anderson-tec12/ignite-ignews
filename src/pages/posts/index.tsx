import styles from './styles.module.scss'
import Head from 'next/head'

export default function Posts(){
  return(
    <>
      <Head>
        <title>Posts | ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="">
            <time>12 de março de 2021</time>
            <strong>Creating a monorepo with lerna </strong>
            <p> Creating a monorepo with lerna  Creating a monorepo with lerna  
              Creating a monorepo with lerna </p>
          </a>

          <a href="">
            <time>12 de março de 2021</time>
            <strong>Creating a monorepo with lerna </strong>
            <p> Creating a monorepo with lerna  Creating a monorepo with lerna  
              Creating a monorepo with lerna </p>
          </a>


          <a href="">
            <time>12 de março de 2021</time>
            <strong>Creating a monorepo with lerna </strong>
            <p> Creating a monorepo with lerna  Creating a monorepo with lerna  
              Creating a monorepo with lerna </p>
          </a>
        </div>
      </main>
    </>
  )
}