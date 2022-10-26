import type { NextPage } from 'next'
import Head from 'next/head'
import Link from "next/link";
import {ArrowRightIcon, ArrowRightOnRectangleIcon, UserCircleIcon} from "@heroicons/react/24/outline";
import {Field, Form, Formik} from "formik";
import {CustomField} from "../components/CustomField/CustomField";
import {useCallback, useState} from "react";

const Home: NextPage = () => {
    const [step, setStep] = useState(0)

    const onChangeNumber = useCallback(() => {

    }, [])

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

                    <div className={'my-10'}>
                        <Formik
                            initialValues={{
                                name: '',
                                identifier: '',
                            }}
                            onSubmit={() => {}}
                        >
                            <Form>
                                {step === 0 ? (
                                    <>
                                        <CustomField name={'name'} label={'Last name'} placeholder={''} />
                                        <CustomField name={'identifier'} label={'Identifier'} placeholder={''} />
                                    </>
                                ) : (
                                    <div className={'flex gap-2'}>
                                        <input className={'border text-center rounded py-4 px-1 w-16'} />
                                        <input className={'border text-center rounded py-4 px-1 w-16'} />
                                        <input className={'border text-center rounded py-4 px-1 w-16'} />
                                        <input className={'border text-center rounded py-4 px-1 w-16'} />
                                    </div>
                                )}
                            </Form>
                        </Formik>
                    </div>

                    <div className={'mt-24 flex'}>
                        {step === 0 ? (
                            <button
                                className={'flex gap-1 items-center rounded-full bg-primary text-white px-5 py-2 text-sm hover:bg-primary-hover'}
                                onClick={() => setStep(1)}
                            >
                                <ArrowRightIcon className={'w-4 h-4'} />
                                <p>Next</p>
                            </button>
                        ) : (
                            <Link href={'/journal'}>
                                <a className={'flex gap-1 items-center rounded-full bg-primary text-white px-5 py-2 text-sm hover:bg-primary-hover'}>
                                    <ArrowRightOnRectangleIcon className={'w-4 h-4'} />
                                    <p>Login</p>
                                </a>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
