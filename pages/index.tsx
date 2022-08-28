import type { NextPage } from 'next'

import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name='keywords' content='ninja' />
      </Head>
      <div >

        <h1 className={styles.title}>Home</h1>
        <p className={styles.text}>Lorem ipsum dolor, sit a
          met consectetur adipisicing elit. Ut
          molestiae, doloremque voluptates natus esse vel a
          d voluptas necessitatibus illo, recusan
          dae sed, eligendi asperiores adipisci officii
          s harum assumenda quas odit eaque.</p>
        <Link href='/ninjas'>
          <a className={styles.btn}>    See Ninjas Listing </a>
        </Link>

      </div>
    </>
  )
}

export default Home
