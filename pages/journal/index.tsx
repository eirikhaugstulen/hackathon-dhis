import Head from "next/head";
import {PlusIcon} from "@heroicons/react/24/outline";
import {JournalRecord} from "../../components/JournalRecord/JournalRecord";
import Link from "next/link";

export default function journal () {

    return (
        <div className={'h-screen w-full flex justify-center items-center'}>
            <Head>
                <title>Hackathon - DHIS2</title>
                <meta name="description" content="Site for showing self registering MVP" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={'w-8/12'}>
                <h1 className={'text-primary text-2xl mb-10'}>Journal</h1>

                <div className={'flex flex-col gap-5'}>
                    <JournalRecord date={'10/25/2022'} />
                    <JournalRecord date={'10/24/2022'} />
                    <JournalRecord date={'10/23/2022'} />
                    <JournalRecord date={'10/22/2022'} />
                </div>
            </div>

            <Link href={'/report'}>
                <a className={'fixed flex right-5 items-center gap-2 md:right-14 bottom-10 shadow-lg px-2 py-2 rounded bg-primary/40 hover:bg-primary/50'}>
                    <PlusIcon className={'w-5 h-5'} />
                    <p>New report</p>
                </a>
            </Link>
        </div>
    )
}
