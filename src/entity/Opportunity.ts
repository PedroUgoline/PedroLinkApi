import { BaseEntity, Column, Entity, ObjectIdColumn } from "typeorm";

@Entity('opportunity')
export class Opportunity extends BaseEntity {
    constructor(init?: Partial<Opportunity>) {
        super();
        Object.assign(this, init);
    }
    @ObjectIdColumn()
    id : string;

    @Column({name: 'opportunity'})
    opportunity: string;

    @Column({name: 'count'})
    status: string;

    @Column({name: 'start_date'})
    startDate: Date;
}