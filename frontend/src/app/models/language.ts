import { BaseModel } from './base-model';

export interface Language extends BaseModel {
    name: string;
    proficiency: string;
}
