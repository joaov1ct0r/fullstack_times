import useContextStates from "../hooks/useContextStates";

export default function ErrorHandler() {
    const { errorHandler } = useContextStates();

    return (
        <div className="alert alert-danger alert-dismissible fade show text-white" role="alert">
                <h1>Status: {errorHandler?.status}</h1>
                <h1>Message: {errorHandler?.message}</h1>
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
    )
}