import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from  'axios'
import { useEffect, useState } from 'react'



import Sidebar from '../src/components/Sidebar'
import ProductCard from '../src/components/ProductCard'
import Carousel from '../src/components/Carousel'



export default function Home({data}) {
  //  console.log(data)
  // console.log(data.map(item => item.product_name))

  const [info, setInfo] = useState([info])
  return (
    <div className={styles.container}>
     <Sidebar />

     <main className = {styles.main}>
       <div>
         <h2 className={styles.h2}>Edvora</h2>
         <h3 className={styles.h3}>Products</h3>
         </div>
       <Carousel data= {data}/>
       <Carousel data= {data}/>
       
     </main>
    </div>
  )
}

export async function getStaticProps(context) {
  const res = await axios.get(`https://assessment-edvora.herokuapp.com/`)
  const data = await res.data

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {data} , // will be passed to the page component as props
  }
}