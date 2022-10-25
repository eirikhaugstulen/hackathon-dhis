import Head from "next/head";
import {Form, Formik} from "formik";
import * as Yup from 'yup';
import {useMutation} from "@tanstack/react-query";
import axios from "axios";
import {useRouter} from "next/router";
import {CustomField} from "../../components/CustomField/CustomField";
import {ArrowDownTrayIcon, ArrowLeftIcon} from "@heroicons/react/24/outline";
import Link from "next/link";
import toast from "react-hot-toast";

export default function Index () {
    const router = useRouter();
    const { mutate, isLoading } = useMutation((values): any => axios.post('/test'), {
        onSuccess: () => {
            toast.success('Data is reported')
            router.push('/journal');
        },
        onError: () => {
            toast.error('An error occurred')
        }
    })

    return (
        <div className={'h-screen w-full flex justify-center items-center'}>
            <Head>
                <title>Hackathon - DHIS2</title>
                <meta name="description" content="Site for showing self registering MVP" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={'w-8/12'}>
                <h1 className={'text-primary text-2xl mb-10'}>Report</h1>

                <Formik
                    initialValues={{
                        systolic_blood_pressure: undefined,
                        diastolic_blood_pressure: undefined,
                        pulse: undefined,
                        weight: undefined
                    }}
                    validationSchema={Yup.object({
                        systolic_blood_pressure: Yup.number().typeError('Please input a number').required('Required'),
                        diastolic_blood_pressure: Yup.number().typeError('Please input a number').required('Required'),
                        pulse: Yup.number().typeError('Please input a number').required('Required'),
                        weight: Yup.number().typeError('Please input a number').required('Required')
                    })}
                    // @ts-ignore
                    onSubmit={mutate}
                >
                    <Form className={'flex flex-col'}>
                        <CustomField
                            name={'systolic_blood_pressure'}
                            label={'Systolic blood pressure'}
                            placeholder={''}
                            suffix={'mmHg'}
                        />

                        <CustomField
                            name={'diastolic_blood_pressure'}
                            label={'Diastolic blood pressure'}
                            placeholder={''}
                            suffix={'mmHg'}
                        />

                        <CustomField
                            name={'pulse'}
                            label={'Pulse'}
                            placeholder={''}
                            suffix={'BPM'}
                        />

                        <CustomField
                            name={'weight'}
                            label={'Weight'}
                            placeholder={''}
                            suffix={'Kg'}
                        />

                        <div className={'flex justify-between mt-10'}>
                            <Link href={'/journal'}>
                                <a>
                                    <ArrowLeftIcon className={'text-black w-5 h-5'} />
                                </a>
                            </Link>
                            <button className={'flex gap-1 items-center rounded-full bg-primary text-white px-5 py-2 text-sm hover:bg-primary-hover'}>
                                <ArrowDownTrayIcon className={'w-4 h-4'} />
                                <p>Save</p>
                            </button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}
