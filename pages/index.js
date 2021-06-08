import Head from 'next/head'
import { Carousel } from '../components/carousel.js'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
        <Carousel />
    </div>
  )
}
