import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export const Home = () => {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <a href={"https://dododo-19447.tistory.com"} target='_blank'>블로그로 가는 길</a>
      </div>
    </main>
  )
}

export default Home;
