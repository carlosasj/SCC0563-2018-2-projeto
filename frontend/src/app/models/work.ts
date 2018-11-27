import { BaseModel } from './base-model';

export interface Work extends BaseModel {
    place: string;
    role: string;
    from?: string;
    until?: string;
}
