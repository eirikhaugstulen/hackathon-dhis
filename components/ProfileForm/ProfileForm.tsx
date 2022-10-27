import {Form, Formik} from "formik";
import {CustomField} from "../CustomField/CustomField";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {ArrowDownTrayIcon, ArrowLeftIcon} from "@heroicons/react/24/solid";
import Link from "next/link";

export const ProfileForm = () => {
    const { data, isLoading, isError } = useQuery(['profile'], () => axios.get('http://172.104.146.122:8080/api/self-reporting/info/dwWgzxGz0S4'))

    const valuesFromApi = { ...data?.data?.info }
    const initialValues = {
        id: 'dwWgzxGz0S4',
        firstName: '',
        lastName: '',
        dob: '',
        phone: '',
        email: '',
        ...valuesFromApi,
    }

    if (isLoading) {
        return (
            <div className={'flex flex-col mt-10 gap-3'}>
                <p>First name</p>
                <div className={'rounded-full h-7 bg-gray-200 w-full animate-pulse'} />
                <p>Last name</p>
                <div className={'rounded-full h-7 bg-gray-200 w-full animate-pulse'} />
                <p>Date of birth</p>
                <div className={'rounded-full h-7 bg-gray-200 w-full animate-pulse'} />
                <p>Phone number</p>
                <div className={'rounded-full h-7 bg-gray-200 w-full animate-pulse'} />
                <p>Email</p>
                <div className={'rounded-full h-7 bg-gray-200 w-full animate-pulse'} />
            </div>
        )
    }

    if (isError) {
        return <p>An error occurred</p>;
    }

    return (
        <Formik
            initialValues={initialValues}
            // @ts-ignore
            onSubmit={(values) => console.log(values)}
        >
            <Form>
                <CustomField name={'firstName'} label={'First name'}/>
                <CustomField name={'lastName'} label={'Last name'}/>
                <CustomField name={'dob'} label={'Date of birth'}/>
                <CustomField name={'phone'} label={'Phone number'}/>
                <CustomField name={'email'} label={'Email'}/>

                <div className={'flex justify-between items-center mt-5'}>
                    <Link href={'/journal'}>
                        <a>
                            <ArrowLeftIcon className={'w-5 h-5'} />
                        </a>
                    </Link>

                    <button
                        className={'flex gap-1 items-center rounded-full bg-primary text-white px-5 py-2 text-sm hover:bg-primary-hover'}
                        type={'submit'}
                    >
                        <ArrowDownTrayIcon className={'w-4 h-4'} />
                        <p>Save</p>
                    </button>
                </div>
            </Form>
        </Formik>
    );
}
