import { ResponseToolkit } from '@hapi/hapi'
import { CreateOpportunityRequest, OpportunityIdRequest, OpportunityStatusRequest, UpdateOpportunityRequest } from './opportunity-interfaces';
import * as Boom from '@hapi/boom';
import * as OpportunityService from '../../service/opportunity-service';


export const getOpportunities = async (request, responseToolkit: ResponseToolkit) => {
    const opportunities = await OpportunityService.getAllOpportunities();

    return responseToolkit.response(opportunities).code(200);
}


export const getOpportunityById = async (request: OpportunityIdRequest, responseToolkit: ResponseToolkit) => {
    const { id } = request.params;
    const opportunity = await OpportunityService.getOpportunityByIdentifier(id);

    if (!opportunity) {
        throw Boom.notFound(`Opportunity not find: ${id}`);
    }

    return responseToolkit.response(opportunity).code(200);
}

export const getOpportunityByStatus = async (request: OpportunityStatusRequest, responseToolkit: ResponseToolkit) => {
    const { status } = request.params;
    const opportunity = await OpportunityService.getAllOpportunitiesByStatus(status);

    if (!opportunity || opportunity.length === 0) {
        throw Boom.notFound(`Don't have opportunities with status: ${status}`);
    }

    return responseToolkit.response(opportunity).code(200);
}


export const createOpportunity = async (request: CreateOpportunityRequest, responseToolkit: ResponseToolkit) => {
    const { id, opportunity, status } = request.payload;

    const opportunityCreate = await OpportunityService.createOpportunity({
        id,
        opportunity,
        status
    });


    return responseToolkit.response(opportunityCreate).code(201);

};
export const updateOpportunity = async (request: UpdateOpportunityRequest, responseToolkit: ResponseToolkit) => {
    const { opportunity, status } = request.payload;
    const { id } = request.params;

    const opportunityUpdate = await OpportunityService.updateOpportunity({
        id,
        opportunity,
        status
    });

    return responseToolkit.response(opportunityUpdate).code(201);
};
export const deleteOpportunity = async (request: OpportunityIdRequest, responseToolkit: ResponseToolkit) => {
    const { id } = request.params;

    const opportunity = await OpportunityService.getOpportunityByIdentifier(id);

    if (!opportunity) {
        throw Boom.notFound(`Opportunity not find: ${id}`);
    }

    await OpportunityService.deleteOpportunity(id);

    return responseToolkit.response(`Opportunity Deleted: ${id}`).code(200);
}


