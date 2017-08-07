import { StatModifier } from "app/heroes/stat-modifier.model";

export class ClassTypeRequest {
    averageOfStats:number;
    dominantModifier:StatModifier;
    secondaryModifier:StatModifier;
}