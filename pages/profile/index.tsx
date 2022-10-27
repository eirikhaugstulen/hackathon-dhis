import Head from "next/head";
import {ProfileForm} from "../../components/ProfileForm/ProfileForm";

export default function Index () {
    return (
        <div className={'min-h-screen w-full flex justify-center'}>
            <Head>
                <title>Hackathon - DHIS2</title>
                <meta name="description" content="Site for showing self registering MVP" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={'w-8/12 mt-20'}>
                <div className={'flex text-primary items-center justify-between mb-10'}>
                    <h1 className={'text-2xl'}>Profile</h1>
                </div>

                <ProfileForm />
            </div>
        </div>
    )
}
