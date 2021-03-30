import styles from './styles.module.scss'
import {FaGithub} from 'react-icons/fa'
import {signIn, signOut,useSession} from 'next-auth/client'

import {FiX} from 'react-icons/fi'
export function SignButton(){
  const [session] = useSession()
  const isUSerLoggedIn = session

  console.log(session)
  return (

    !isUSerLoggedIn ? (
    <button
      type="button"
      className={styles.signInButton}
      onClick={() => {signIn('github')}}
    >
      <FaGithub  color="#eba417" />
      
      Sign in with Github
    </button>) : (
      <button
      type="button"
        className={styles.signInButton}
        onClick={() => {signOut()}}
      >
        
        <FaGithub  color="#04d361" />
        {session.user.name}
        <FiX color="#737380" className={styles.closeIcon}/>
      </button>
    )
  )
}