import { BaseModel } from './base-model';
import { Education } from './education';

export interface Curriculum extends BaseModel {
    owner?: number;

    name?: string;
    headline?: string;
    image?: string;
    phone?: string;
    email?: string;
    github?: string;
    linkedin?: string;

    education?: Education[];
}
