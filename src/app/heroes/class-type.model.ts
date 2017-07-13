import { StatModifier } from './stat-modifier.model';
export class ClassType{
    name:string;
    hpModifier:StatModifier;
    mpModifier:StatModifier;
    damageModifier:StatModifier;
    healModifier:StatModifier;
    defenseModifier:StatModifier;
}