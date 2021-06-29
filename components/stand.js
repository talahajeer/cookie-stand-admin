import If from "./if"

export default function Stand({stand}){

    return(
        <If condition={stand.condition} >
            <p className='m-2 text-gray-600' >
                <span>location : {stand.location} </span>,
                <span>min : {stand.min} </span>,
                <span>max : {stand.max} </span>,
                <span>avg : {stand.avg} </span>
            </p>
        </If>
    )
}