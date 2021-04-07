import { SignButton } from '../SignButton'
import Link from 'next/link'
import styles from './styles.module.scss'
import { useRouter } from 'next/router'

export function Header(){
  const {asPath} = useRouter()
  
  return(
    <header className={styles.headerContainer}>
    <div className={styles.headerContent}>
      <img src="/images/logo.svg" alt="ig.news" />

      <nav>
        <Link href="/">
          <a  className={styles.active}>Home</a>
        </Link>

        <Link href="/posts" prefetch>
          <a >Posts</a>
        </Link>
        
        
      </nav>

      <SignButton />
    </div>
  </header>
  )
}