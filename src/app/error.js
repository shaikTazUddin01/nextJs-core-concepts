"use client"

const ErrorPage = ({error,reset}) => {
    console.log(error);
    return (
        <div>
            <h1 className='text-4xl '>Something is wrong</h1>
            <h1 className='text-4xl '>{error?.message}</h1>
        </div>
    );
};

export default ErrorPage;