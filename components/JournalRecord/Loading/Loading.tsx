
export const Loading = () => (
    <div className={'w-full bg-purple-100/50 flex rounded flex-col gap-3 rounded py-2 px-3'}>
        <div className={'h-5 rounded-full w-1/12 animate-pulse bg-purple-200'} />
        <div className={'flex w-full justify-between'}>
            <div className={'flex flex-col gap-3 w-1/4'}>
                <div className={'h-5 rounded-full animate-pulse bg-purple-200'} />
                <div className={'h-5 rounded-full animate-pulse bg-purple-200'} />
                <div className={'h-5 rounded-full animate-pulse bg-purple-200'} />
                <div className={'h-5 rounded-full animate-pulse bg-purple-200'} />
            </div>
            <div className={'flex flex-col gap-3  w-16'}>
                <div className={'h-5 rounded-full animate-pulse bg-purple-200'} />
                <div className={'h-5 rounded-full animate-pulse bg-purple-200'} />
                <div className={'h-5 rounded-full animate-pulse bg-purple-200'} />
                <div className={'h-5 rounded-full animate-pulse bg-purple-200'} />
            </div>
        </div>
    </div>
)
