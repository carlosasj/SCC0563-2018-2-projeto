import { Publication } from './publication';
import { BaseModel } from './base-model';
import { Education } from './education';
import { Work } from './work';
import { SkillsGroup } from './skills-group';

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
    work?: Work[];
    publications?: Publication[];
    skillsGroups?: SkillsGroup[];
}
