import Head from 'next/head'
import { Inter } from '@next/font/google'
import { memo, useState } from 'react'
import Htag from '../components/ReusableComponents/Htag/Htag'
import Rating from '../components/Rating/Rating'
import { withLayout } from '../layout/Layout'
import { GetStaticProps } from 'next'
import axios from 'axios'

const inter = Inter({ subsets: ['latin'] })

function Home({ pokemon, menu }: HomeProps) {
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

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0;
  const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto").then(data => data);
  const { data: menu } = await axios.post("https://courses-top.ru/api/top-page/find", {
    firstCategory
  });
  const pokemon = data.name;

  return {
    props: {
      pokemon,
      menu,
      firstCategory,
    }
  }
}

interface HomeProps extends Record<string, unknown> {
  pokemon: string,
  menu: any[],
  firstCategory: number,
}
