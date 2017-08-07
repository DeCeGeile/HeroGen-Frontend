import { rng, rngFloorless } from "app/helpers/rng.component";

export class StatModifier {
    name:string;
    value:number;
}

export function generateStat(name:string):StatModifier{
    return {name : name, value: rngFloorless(.5, 2)};
}