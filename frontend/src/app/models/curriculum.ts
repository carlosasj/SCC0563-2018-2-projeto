import { CredentialsUserResponse } from './credentials';
import { Publication } from './publication';
import { BaseModel } from './base-model';
import { Education } from './education';
import { Work } from './work';
import { SkillsGroup } from './skills-group';
import { Language } from './language';

export interface Curriculum extends BaseModel {
    owner?: CredentialsUserResponse;

    name?: string;
    headline?: string;
    image?: string;
    phone?: string;
    email?: string;
    github?: string;
    linkedin?: string;
    block?: boolean;

    education?: Education[];
    work?: Work[];
    publications?: Publication[];
    skillsGroups?: SkillsGroup[];
    languages?: Language[];
}
