import useContextStates from "../hooks/useContextStates";

export default function Error() {
    const { error } = useContextStates();

        { error ? (
            <div className="alert alert-danger alert-dismissible fade show text-white" role="alert">
                <h1>Status: {error.status}</h1>
                <h1>Message: {error.message}</h1>
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>) : <></>}
}