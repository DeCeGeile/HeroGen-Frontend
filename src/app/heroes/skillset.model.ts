import { Ability } from './ability.model';
export class Skillset{
    id:number;
    name:string;
    primaryAbility:Ability;
    secondaryAbility:Ability;
    tertiaryAbility:Ability;
    quaternaryAbility:Ability;
}