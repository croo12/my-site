import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export const Home = () => {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Link href={"https://dododo-19447.tistory.com"} passHref>블로그로 가는 길</Link>
      </div>
    </main>
  )
}

export default Home;
