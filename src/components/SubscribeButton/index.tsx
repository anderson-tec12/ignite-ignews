import { useSession, signIn } from 'next-auth/client'
import style from './styles.module.scss'
interface SubscribeButtonProps{
  priceId:string
}
export function SubscribeButton({priceId}:SubscribeButtonProps){
  const [session] = useSession()

  function handleSubscribe(){
    if(!session){
      signIn('github')
      return
    }

    // checkout sesssion
  }

  return(
    <button 
      type="button"
      className={style.subscribeButton}
      onClick={handleSubscribe}
      > Subscribe now</button>
  )
}