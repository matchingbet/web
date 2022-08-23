export default interface ServerError {
    status: string;
    timestamp: string;
    type: string;
    title: string;
    detail: string;
    userMessage: string;
}
