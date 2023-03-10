import Head from 'next/head'
import { Inter } from '@next/font/google'
import { memo, useState } from 'react'
import Htag from '../components/ReusableComponents/Htag/Htag'
import Rating from '../components/Rating/Rating'
import { withLayout } from '../layout/Layout'

const inter = Inter({ subsets: ['latin'] })

function Home() {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Head>
        <title>Rating app</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className='font-bold tracking-normal text-xl'>Hello from next js</h1>
        <p className="font-light tracking-normal text-small">There is some text</p>
        <p className="font-light tracking-wide text-base">There is some text</p>
        <p className="font-light tracking-widest text-large">There is some text</p>
        <Htag tag='h1'> Some text</Htag>
        <Htag tag='h2'> Some text</Htag>
        <Htag tag='h3'> Some text</Htag>

        <Rating rating={rating} isEditable setRating={setRating} />
      </main>
    </>
  )
};

export default memo(withLayout(Home));
