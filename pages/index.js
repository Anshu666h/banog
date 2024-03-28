import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Sorry 404</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="banned" />
        <p className="description">
          This website banned under section 108 due to gambling<code>Contact support</code>
        </p>
    <marquee>This website is banned by goverment due to not follow rules !<marquee>
      </main>

      <Footer />
    </div>
  )
}
