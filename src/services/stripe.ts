import Stripe from 'stripe'
// import { verison } from '../../package.json'

export const  stripe = new Stripe(
  process.env.STRIPE_KEY, {
    apiVersion:'2020-08-27',
    appInfo:{
      name:'ignews',
      version: '0.1.0'
    }
  }
)