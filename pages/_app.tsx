import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../Components/Layout'
import React from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
  <Layout  >
  <Component {...pageProps} />
  </Layout>
  </React.Fragment>
  )

}

export default MyApp
