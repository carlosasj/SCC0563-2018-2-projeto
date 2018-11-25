import { BaseModel } from './base-model';

export interface Education extends BaseModel {
    universityName: string;
    course: string;
    from?: string;
    until?: string;
}
