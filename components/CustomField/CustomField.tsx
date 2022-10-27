import {ErrorMessage, Field} from "formik";

interface CustomField {
    name: string,
    label: string,
    suffix?: string,
    placeholder?: string,
}

export const CustomField = ({ name, label, suffix, placeholder }: CustomField) => (
    <div>
        <label htmlFor={name}>
            {label}
        </label>
        <div className={'flex mt-2 rounded group focus-within:text-gray-800 focus-within:ring-2'}>
            <Field
                className={`w-full px-1 py-2 text-gray-500 outline-none ring-sky-300  border border-dhis-light ${suffix ? 'border-r-0 rounded-l' : 'rounded'}`}
                name={name}
                placeholder={placeholder}
            />

            {suffix && (
                <div className={'px-3 min-w-[60px] text-sm flex items-center text-gray-600 justify-center rounded-r border border-dhis-light'}>
                    <p>{suffix}</p>
                </div>
            )}
        </div>
        <div className={'text-red-600 text-sm my-2'}>
            <ErrorMessage name={name} />
        </div>
    </div>
)
