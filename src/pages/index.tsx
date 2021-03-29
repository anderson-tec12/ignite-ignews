import {GetServerSideProps} from 'next'
import styles from './index.module.scss'
import  Head from 'next/head'
import { SubscribeButton } from '../components/SubscribeButton'
import { stripe } from '../services/stripe'

interface HomeProps{
  product:{
    priceId: string,
    amount: Number  
  }
}

export default function Home(props:HomeProps) {
  console.log(props)
  const {product} = props
  return(
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head> 
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>
          👏 Hey, Welcome
          </span>

          <h1>News abount the  <span>React</span> world.</h1>

          <p>
            Get access to all the publications <br />
            <span>for {product !== undefined && product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId}/>
        </section>

        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  ) 
    
}

export const getServerSideProps:GetServerSideProps = async () => {  

  const price  = await stripe.prices.retrieve('price_1IaLLyLnHhasAJPT3z5ZJ00B', {
    expand: ['product']
  })

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style:'currency',
      currency:'USD'
    }).format(price.unit_amount / 100)
  }

  return {
    props:{
      product
    }
  }
}
