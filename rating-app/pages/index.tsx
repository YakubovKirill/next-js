import Head from 'next/head'
import { Inter } from '@next/font/google'
import { memo } from 'react'

const inter = Inter({ subsets: ['latin'] })

function Home() {
  return (
    <>
      <Head>
        <title>Rating app</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className='font-semibold'>Hello from next js</h1>
        <p className='font-light'>sdfsdfsdf</p>
      </main>
    </>
  )
};

export default memo(Home);
