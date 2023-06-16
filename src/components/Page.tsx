import React from 'react'

interface PageProps {
    children: React.ReactNode
    title: string
    className?: string
    pageClassName?: string
    hideSideBar?: boolean
    loading?: boolean
}

const Page: React.FC<PageProps> = ({
    title = '',
    className = '',
    pageClassName = '',
    hideSideBar = false,
    loading = false,
    children
}) => {
    return (
        <div className={`${className} page flex flex-row h-screen`}>
            {loading && (
                <i className='absolute top-1/2 left-1/2 z-50 pi pi-spin pi-spinner animate-spin text-4xl pointer-events-none'></i>
            )}
            {loading && (
                <div className='absolute z-40 top-0 left-0 w-full h-full bg-black bg-opacity-10 backdrop-blur-sm'></div>
            )}
            <div className={`sm:w-8/12 mx-auto ${pageClassName}`}>
                <div className='m-4 mb-8 text-center'>
                    <h1>{title}</h1>
                </div>
                <div className='flex flex-col'>{children}</div>
            </div>
        </div>
    )
}

export default Page
