import {CheckCircleIcon} from "@heroicons/react/24/outline";

interface JournalRecordProps {
    title: string,
    value: string | number,
}

export const JournalRecordRow = ({ title, value }: JournalRecordProps) => (
    <div className={'flex items-center justify-between'}>
        <div className={'flex items-center gap-2'}>
            <CheckCircleIcon className={'w-4 h-4'} />
            <p>{title}</p>
        </div>
        <p>{value}</p>
    </div>
)
