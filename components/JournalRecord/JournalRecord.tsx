import {JournalRecordRow} from "../JournalRecordRow/JournalRecordRow";

interface JournalRecordProps {
    date: string,
}

export const JournalRecord = ({ date }: JournalRecordProps) => (
    <>
        <div className={'w-full bg-purple-100/50 rounded py-2 px-3'}>
            <div>
                {date}
            </div>

            <JournalRecordRow
                title={'Diastolic blood pressure'}
                value={'23'}
            />

            <JournalRecordRow
                title={'Systolic blood pressure'}
                value={'14'}
            />

            <JournalRecordRow
                title={'Pulse'}
                value={'98'}
            />

            <JournalRecordRow
                title={'Weight'}
                value={'88'}
            />
        </div>
    </>
)
