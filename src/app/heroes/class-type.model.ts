import { StatModifier } from './stat-modifier.model';
export class ClassType{
    name:string;
    baseHealth: number;
    baseMana: number;
    hpModifier:StatModifier;
    mpModifier:StatModifier;
    physicalModifier:StatModifier;
    magicalModifier:StatModifier;
    healModifier:StatModifier;
    defenseModifier:StatModifier;
    magicDefenseModifier:StatModifier;
}