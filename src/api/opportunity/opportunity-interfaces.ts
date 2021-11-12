import { Request } from "@hapi/hapi";

export interface OpportunityIdRequest extends Request{
    params: {
        id:string;
    }
}
export interface OpportunityStatusRequest extends Request{
    params: {
        status:string;
    }
}


export interface CreateOpportunityRequest extends Request {
    payload:{
        id: string;
        opportunity:string;
        status:string;
    }
}


export interface UpdateOpportunityRequest extends Request {
    params: {
        id:string;
    }
    payload:{
        status: string;
        opportunity:string;
    }
}