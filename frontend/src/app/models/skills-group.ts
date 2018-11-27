import { BaseModel } from './base-model';

export interface SkillsGroup extends BaseModel {
    groupTitle: string;
    sk1: string;
    sk2?: string;
    sk3?: string;
    sk4?: string;
    sk5?: string;
}
