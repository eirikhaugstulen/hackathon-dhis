import Head from "next/head";
import {Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import {useMutation} from "@tanstack/react-query";
import axios from "axios";
import {useRouter} from "next/router";

export default function Index () {
    const router = useRouter();
    const { mutate, isLoading } = useMutation((values): any => axios.post('/test'), {
        onSettled: () => {
            router.push('/success');
        },
    })

    return (
        <div>
            <Head>
                <title>Hackathon - DHIS2</title>
                <meta name="description" content="Site for showing self registering MVP" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <p>Hi, Morten!</p>

            <Formik
                initialValues={{
                    systolic_blood_pressure: 0,
                    diastolic_blood_pressure: 0,
                    pulse: 0,
                    weight: 0
                }}
                validationSchema={Yup.object({
                    systolic_blood_pressure: Yup.number().typeError('Needs to be a number'),
                    diastolic_blood_pressure: Yup.number().typeError('Needs to be a number'),
                    pulse: Yup.number().typeError('Needs to be a number'),
                    weight: Yup.number().typeError('Needs to be a number')
                })}
                // @ts-ignore
                onSubmit={mutate}
            >
                <Form className={'flex flex-col'}>
                    <Field name={'systolic_blood_pressure'} />
                    <Field name={'diastolic_blood_pressure'} />
                    <Field name={'pulse'} />
                    <Field name={'weight'} />

                    <button
                        type={'submit'}
                    >
                        Report
                    </button>
                </Form>
            </Formik>
        </div>
    )
}
