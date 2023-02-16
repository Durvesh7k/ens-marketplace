import React from 'react'
import { Grid } from 'react-loader-spinner'



const Loading = ({ value }) => {
    return (
        <>
            <div className='mb-20'>
                <div className='flex justify-center items-center h-96'>
                    <div className='grid gap-6 justify-center'>
                        <div className='flex justify-center mb-0'>
                            <Grid
                                height="120"
                                width="120"
                                color="#645CBB"
                                ariaLabel="grid-loading"
                                radius="12.5"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                            />
                        </div>
                        <div className='flex justify-center'>
                            <h1 className='text-2xl font-mono text-white font-semibold'>{value}</h1>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Loading