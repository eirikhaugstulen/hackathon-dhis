import type { NextPage } from 'next'
import Head from 'next/head'
import Link from "next/link";
import {ArrowRightOnRectangleIcon, UserCircleIcon} from "@heroicons/react/24/outline";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Hackathon - DHIS2</title>
        <meta name="description" content="Site for showing self registering MVP" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <div className={'flex justify-center items-center h-screen'}>
            <div className={'w-full md:w-72'}>
                <UserCircleIcon className={'h-10 w-10 text-primary'} />
                <h1 className={'text-primary text-2xl mt-2'}>Self reporting app</h1>
                <p className={'text-secondary'}>Log in</p>
                <div className={'mt-24 flex'}>
                    <Link href={'/journal'}>
                        <a className={'flex gap-1 items-center rounded-full bg-primary text-white px-5 py-2 text-sm hover:bg-primary-hover'}>
                            <ArrowRightOnRectangleIcon className={'w-4 h-4'} />
                            <p>Login</p>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
