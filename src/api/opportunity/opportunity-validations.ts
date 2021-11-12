import * as Joi from '@hapi/joi';

export const OpportunityId = Joi.object({
    id: Joi.string().required(),
});
export const OpportunityStatus = Joi.object({
    status: Joi.string().required()
});

export const OpportunityPayload = Joi.object({
    id : Joi.string().trim().required(),
    opportunity: Joi.string().required(),
    status: Joi.string().required()
});
