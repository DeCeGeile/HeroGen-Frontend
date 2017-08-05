import { AbilityType } from '../heroes/ability-type.model';
import { ClassType } from '../heroes/class-type.model';
import { Ability } from '../heroes/ability.model';
import { Hero } from "app/heroes/hero.model";
import { Skillset } from "app/heroes/skillset.model";
import { StatModifier, generateStat } from '../heroes/stat-modifier.model';
import { rng } from "app/helpers/rng.component";
import { getClassTypeNameSet, getAbilityName, getHeroName } from "app/generation-files/data-generation-service";
import { compareValues } from "app/helpers/comparators.component";
export class BaseDataBuilder {
    public generateHero(): Hero {
        return {
            name: getHeroName(),
            classType: this.generateClassType(),
            skillset: this.generateSkillset()
        };
    }

    public generateClassType(): ClassType {
        let physicalModifier: StatModifier = generateStat('Physical Damage');
        let magicalModifier: StatModifier = generateStat('Magical Damage');
        let healModifier: StatModifier = generateStat('Healing');
        let hpModifier: StatModifier = generateStat('HP');
        let mpModifier: StatModifier = generateStat('MP');
        let defenseModifier: StatModifier = generateStat('Physical Defense');
        let magicDefenseModifier: StatModifier = generateStat('Magical Defense');

        //prefix generated by average of scores
        let averageOfStats = (physicalModifier.value + magicalModifier.value + healModifier.value + hpModifier.value +
            mpModifier.value + defenseModifier.value + magicalModifier.value) / 7;

        //baseName generated by dominant ability modifier
        let modifiers: StatModifier[] = [physicalModifier, magicalModifier, healModifier, hpModifier, mpModifier, defenseModifier, magicDefenseModifier]
            .sort(compareValues);

        //suffix generated by hp/defensives VS mp/offensives
        let aggregates: StatModifier[] = [
            {
                value: (physicalModifier.value + magicalModifier.value + mpModifier.value) / 3,
                name: "Offensive Aggregate"
            },
            {
                value: (defenseModifier.value + magicDefenseModifier.value + hpModifier.value) / 3,
                name: "Defensive Aggregate"
            },
            healModifier
        ].sort(compareValues);

        return {
            name: getClassTypeNameSet(averageOfStats, modifiers[0], modifiers[1], aggregates[0]).getName(),
            physicalModifier: physicalModifier,
            magicalModifier: magicalModifier,
            healModifier: healModifier,
            hpModifier: hpModifier,
            mpModifier: mpModifier,
            defenseModifier: defenseModifier,
            magicDefenseModifier: magicDefenseModifier
        };
    }

    generateSkillset(): Skillset {
        return {
            primaryAbility: this.generateAbility(),
            secondaryAbility: this.generateAbility(),
            tertiaryAbility: this.generateAbility(),
            quaternaryAbility: this.generateAbility()
        };
    }

    public generateAbility(): Ability {
        let abilityTypes = [AbilityType.PHYSICAL, AbilityType.MAGICAL, AbilityType.HEALING];


        let abilityType = abilityTypes[rng(0, 2)];
        let value = (abilityType === AbilityType.PHYSICAL) ? rng(5, 25) : rng(10, 25);
        let manaCost = abilityType !== AbilityType.PHYSICAL ? 0 : rng(3, 10);

        return {
            name: getAbilityName(abilityType, value, manaCost),
            abilityType: abilityType,
            value: value,
            manaCost: manaCost
        };
    }
}