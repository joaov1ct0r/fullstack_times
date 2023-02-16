import ITime from "./ITime";

export default interface IGetTimesReq {
    message: string,
    times: ITime[]
}