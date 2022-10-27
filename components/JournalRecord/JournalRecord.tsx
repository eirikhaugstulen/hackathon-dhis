import {JournalRecordRow} from "../JournalRecordRow/JournalRecordRow";

export interface Vital {
    date: string,
    diastolic: string,
    systolic: string,
    pulse: string,
    weight: string,
}

interface JournalRecordProps {
    vital: Vital,
}

export const JournalRecord = ({ vital }: JournalRecordProps) => (
    <>
        <div className={'w-full bg-purple-100/50 text-secondary-text rounded py-2 px-3'}>
            <div>
                {vital?.date}
            </div>

            <JournalRecordRow
                title={'Systolic blood pressure'}
                value={`${vital.systolic} mmHg`}
            />

            <JournalRecordRow
                title={'Diastolic blood pressure'}
                value={`${vital.diastolic} mmHg`}
            />

            <JournalRecordRow
                title={'Pulse'}
                value={`${vital.pulse} BPM`}
            />

            <JournalRecordRow
                title={'Weight'}
                value={`${vital.weight} Kg`}
            />
        </div>
    </>
)
