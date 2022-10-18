function Error({ statusCode, res }: any) {
    return (
        <div>
            <p>res</p>
            <p>
                {statusCode
                    ? `An error occurred on server`
                    : 'An error occurred on client'}
            </p>
        </div>

    )
}


export default Error