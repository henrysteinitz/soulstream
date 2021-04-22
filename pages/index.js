import Head from 'next/head'
import { Screen } from '../components/screen.js'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Screen size="full" />
    </div>
  )
}
