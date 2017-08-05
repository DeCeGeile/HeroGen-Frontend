export function rng(minValue:number, maxValue:number):number{
     return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
}

export function rngFloorless(minValue:number, maxValue:number):number{
     return Math.random() * (maxValue - minValue) + minValue;
}