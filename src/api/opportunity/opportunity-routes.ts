import { Server } from "@hapi/hapi"
import * as Validations from './opportunity-validations'
import * as Controller from './opportunity-controller'

export const initRoutes = (server: Server) => {
    server.route([
        {
            method: 'GET',
            path: '/opportunities',
            handler: Controller.getOpportunities,
        },
        {
            method: 'GET',
            path: '/opportunities/{id}',
            handler: Controller.getOpportunityById,
            options: {
                validate: {
                    params: Validations.OpportunityId
                }
            }
        },
        {
            method: 'GET',
            path: '/opportunities/status/{status}',
            handler: Controller.getOpportunityByStatus,
            options: {
                validate: {
                    params: Validations.OpportunityStatus
                }
            }
        },
        {
            method: 'POST',
            path: '/opportunities',
            handler: Controller.createOpportunity,
            options: {
                validate: {
                    payload: Validations.OpportunityPayload
                }
            }
        },
        {
            method: 'PUT',
            path: '/opportunities/{id}',
            handler: Controller.updateOpportunity,
            options: {
                validate: {
                    params: Validations.OpportunityId,
                    payload: Validations.OpportunityPayload
                }
            }
        },
        {
            method: 'DELETE',
            path: '/opportunities/{id}',
            handler: Controller.deleteOpportunity,
            options: {
                validate: {
                    params: Validations.OpportunityId
                }
            }
        }
    ])
};