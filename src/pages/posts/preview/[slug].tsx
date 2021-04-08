import { GetStaticPaths, GetStaticProps } from "next"
import { getSession, useSession } from "next-auth/client"
import { redirect } from "next/dist/next-server/server/api-utils"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { RichText } from "prismic-dom"
import { useEffect } from "react"
import { getPrismicClient } from "../../../services/prismic"
import Styles from '../post.module.scss'

interface PostProps{
  post:{
    slug: string,
    title: string,
    content: string,
    updatedAt: string
  }
}

export default function Post({post}:PostProps){
  const [session] = useSession()
  const router = useRouter()

  useEffect(() => {
    if(session?.activeSubscription){
      router.push(`/posts/${post.slug}`)
    }

  },[session])

  return(
    <>
      <Head>
        <title>{post.title} | ignews</title>
      </Head>

      <main className={Styles.container}>
        <article className={Styles.post}>
          <h1>{post.title}</h1>
          <time>{post.updatedAt}</time>

          <div 
            className={`${Styles.postContent} ${Styles.postPreviewcontent}`}
            dangerouslySetInnerHTML={{__html:post.content}} 
          />

          <div className={Styles.continueReading}>
            Wanna continue reading?
            <Link href="/" >
              <a href=""> Subiscribe now 🤗</a>
            </Link>
          </div>
        </article>
      </main>
    </>
  )
}

export const getStaticPaths:GetStaticPaths = async () => {
  return {
    paths:[
      // {
      //   params:
      //     {
      //       slug:'es10---novas-features-do-javascript'
      //     }
      // }
    ],
    fallback: 'blocking' // true | false | blocking
  }
}

export const getStaticProps:GetStaticProps = async ({params}) => {
 
  const {slug} = params
  
  

  const prismic = getPrismicClient()

  const response = await prismic.getByUID('publication', String(slug) ,{})

  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content.slice(0,3)),
    updatedAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  }

  return {
    props:{
      post
    },
    revalidate: 60 * 30, // 30 minutos
  }
}