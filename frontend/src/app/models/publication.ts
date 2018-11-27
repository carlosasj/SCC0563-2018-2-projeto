import { BaseModel } from './base-model';

export interface Publication extends BaseModel {
    title: string;
    publisher?: string;
    date?: string;
}
