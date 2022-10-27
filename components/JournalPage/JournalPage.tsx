import {JournalRecord, Vital} from "../JournalRecord/JournalRecord";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {Loading} from "../JournalRecord/Loading/Loading";

export const JournalPage = () => {
    const { data, isLoading, isError } = useQuery(['vitals'], (): any => axios.get('http://172.104.146.122:8080/api/self-reporting/vital-signs/dwWgzxGz0S4'))

    if (isLoading) {
        return (
            <div className={'flex flex-col gap-5'}>
                <Loading />
                <Loading />
                <Loading />
                <Loading />
            </div>
        )
    }

    if (isError) {
        return (
            <p>An error occurred</p>
        )
    }

    return (
        <>
            <div className={'flex flex-col gap-5'}>
                {data?.data?.vitals?.map((vital: Vital, index: number) => (
                    <JournalRecord vital={vital} key={`${vital.date}-${index}`}/>))}
            </div>
        </>
    );
}
