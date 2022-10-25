import Head from "next/head";
import Link from "next/link";

export default function index () {
    return (
        <div>
            <Head>
                <title>Hackathon - DHIS2</title>
                <meta name="description" content="Site for showing self registering MVP" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1>Thanks for reporting!</h1>
            <p>Start over?</p>
            <Link href={'/report'}>
                <a className={'border px-2 py-1'}>
                    Report new result
                </a>
            </Link>
        </div>
    );
}
