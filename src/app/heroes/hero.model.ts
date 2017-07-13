import { Skillset } from './skillset.model';
import { ClassType } from "app/heroes/class-type.model";
export class Hero {
    name: string;
    skillset: Skillset;
    classType: ClassType;
}