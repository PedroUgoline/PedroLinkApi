import { Opportunity } from '../entity/Opportunity';
import { createQueryBuilder } from 'typeorm';
import * as Boom from '@hapi/boom';


export const getAllOpportunities = async () => {
    return await Opportunity.find();
};
export const getAllOpportunitiesByStatus = async (status) => {
    return await Opportunity.find({ status });
};
export const getOpportunityByIdentifier = async (opportunityIndentifier) => {
    try {
        return await Opportunity.findOne({ id: opportunityIndentifier });
    } catch (error) {
        console.log(error);
        throw Boom.badRequest("DEU RUIM");
    }

};

export const createOpportunity = async ({ id, opportunity, status }) => {
    const opportunityCreate = new Opportunity({
        id,
        opportunity,
        status,
        startDate: new Date()
    });

    await opportunityCreate.save();

    return opportunityCreate;
};

export const updateOpportunity = async ({ id, opportunity, status }) => {
    const opportunityUpdate = await createQueryBuilder(Opportunity)
        .update()
        .where({ id })
        .set({ opportunity, status })
        .execute();

    return opportunityUpdate;
};
export const deleteOpportunity = async (id) => {
    const opportunityUpdate = await createQueryBuilder(Opportunity)
        .delete()
        .where({ id })
        .execute();

    return opportunityUpdate;
};