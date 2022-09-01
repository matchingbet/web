function Error({ statusCode, res }: any) {
    return (
        <div>
            <p>res</p>
            <p>
                {statusCode
                    ? `An error ${statusCode} occurred on server`
                    : 'An error occurred on client'}
            </p>
        </div>

    )
}

Error.getInitialProps = ({ res, err }: any) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode, res }
}

export default Error