//BACKEND CALLS!
import { ClassTypeNameSet } from "app/generation-files/class-type-name-set.model";
import { StatModifier } from "app/heroes/stat-modifier.model";
import { AggregateScore } from "app/generation-files/aggregate-score.model";

export function getClassTypeNameSet(averageOfStats:number, dominantStat:StatModifier, secondaryStat:StatModifier, aggregates:AggregateScore[]):ClassTypeNameSet {
    return new ClassTypeNameSet(
        "Terrible",
        "Warrior",
        "of Wrath"
    );
}

export function getAbilityName(abilityType: number, value:number, manaCost:number):string{
    return "Touch";
}

export function getHeroName(){
    return "Ivan Bonkodore";
}