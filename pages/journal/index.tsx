import Head from "next/head";
import {PlusIcon} from "@heroicons/react/24/outline";
import Link from "next/link";
import {UserCircleIcon} from "@heroicons/react/24/solid";
import {JournalPage} from "../../components/JournalPage/JournalPage";

export default function Journal () {
    return (
        <div className={'min-h-screen w-full flex justify-center'}>
            <Head>
                <title>Hackathon - DHIS2</title>
                <meta name="description" content="Site for showing self registering MVP" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={'w-8/12 mt-20'}>
                <div className={'flex text-primary items-center justify-between mb-10'}>
                    <h1 className={'text-2xl'}>Journal</h1>
                    <Link href={'/profile'}>
                        <a>
                            <UserCircleIcon className={'w-16 h-16'} />
                        </a>
                    </Link>
                </div>

                <JournalPage />
            </div>

            <Link href={'/report'}>
                <a className={'fixed flex right-5 items-center gap-2 md:right-14 bottom-10 shadow-lg px-2 py-2 rounded bg-[#c1b9d9] hover:bg-primary/50'}>
                    <PlusIcon className={'w-5 h-5'} />
                    <p>New report</p>
                </a>
            </Link>
        </div>
    )
}
