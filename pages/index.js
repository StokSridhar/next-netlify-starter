import Head from 'next/head'
import Header from '@components/Header' 

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="SSR Palace" />
        <p className="description">
         Coming Soon.. 
        </p>
      </main>
 
    </div>
  )
}
