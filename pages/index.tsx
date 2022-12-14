import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Chúc mừng sinh nhật <a href="https://static.tuoitre.vn/tto/i/s626/2017/05/03/ha-ma-1-1493799302.jpg">Hân Béo</a>
        </h1>

        {/* <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p> */}

        <div className={styles.grid}>
          <a href="https://www.youtube.com/watch?v=Wu8NeFXaoOc" className={styles.card}>
            <h2>Chúc Hân ngày càng xinh xắn   &rarr;</h2>
            <p>Nhưng đối với Quân thì Hân xinh nhất dồi.</p>
          </a>

          <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS04WCKykf7Ko_4QIvLbGhlp7Hbircn8IHuaognWiURFowJd73OaJoD9XUdYm_CR5la1-0&usqp=CAU" className={styles.card}>
            <h2>Chúc Hân ngày càng khỏe mạnh &rarr;</h2>
            <p>Với Quân thì Hân phải khỏe nhìu hơn, suốt ngày bịnh</p>
          </a>

          {/* <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a> */}

          {/* <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a> */}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
