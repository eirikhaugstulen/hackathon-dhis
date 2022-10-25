import type { NextPage } from 'next'
import Head from 'next/head'
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Hackathon - DHIS2</title>
        <meta name="description" content="Site for showing self registering MVP" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <div className={'flex justify-center items-center'}>
            <div className={'w-full text-center md:w-72 bg-red-500'}>
                <div>
                    <Link href={'/report'}>
                        <a>
                            Login
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
