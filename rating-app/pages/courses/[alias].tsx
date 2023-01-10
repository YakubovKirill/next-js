import Head from 'next/head'
import { Inter } from '@next/font/google'
import { memo, useState } from 'react'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import axios from 'axios'
import { withLayout } from '../../layout/Layout'
import { ParsedUrlQuery } from 'querystring'

const inter = Inter({ subsets: ['latin'] })
const firstCategory = 0;

function Course(props: CourseProps) {
  const { menu, page, products } = props;

  return (
    <>
      {products && products.length}
    </>
  )
};

export default memo(withLayout(Course));

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: menu } = await axios.post("https://courses-top.ru/api/top-page/find", {
    firstCategory
  });
  return {
    paths: menu.flatMap((m: any) => m.pages.map((p: any) => '/courses/' + p.alias)),
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) return {
    notFound: true,
  }
  const { data: menu } = await axios.post("https://courses-top.ru/api/top-page/find", {
    firstCategory
  });

  const { data: page } = await axios.get("https://courses-top.ru/api/top-page/byAlias/" + params.alias);
  const { data: products } = await axios.post("https://courses-top.ru/api/product/find", {
    category: page.category,
    limit: 10,
  });

  return {
    props: {
      menu,
      page,
      products,
      firstCategory,
    }
  }
}

interface CourseProps extends Record<string, unknown> {
  menu: any[],
  page: any,
  products: any[],
  firstCategory: number,
}
