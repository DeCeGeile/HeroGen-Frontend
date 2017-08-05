//BACKEND CALLS!
import { ClassTypeNameSet } from "app/generation-files/class-type-name-set.model";
import { StatModifier } from "app/heroes/stat-modifier.model";

export function getClassTypeNameSet(prefixValue:number, dominantStat:StatModifier, secondaryStat:StatModifier, suffixStat:StatModifier):ClassTypeNameSet {
    return new ClassTypeNameSet(
        "Terrible",
        "Warrior",
        "of Wrath"
    );
}

export function getAbilityName(abilityType: number, value:number, manaCost:number){
    return "Touch";
}

export function getHeroName(){
    return "Ivan Bonkodore";
}