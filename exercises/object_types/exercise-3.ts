import { getWhales, getWhaleSightings } from "./data.js";

type Whale = {
  species: string;
  weightInKg: number;
  likesToEat?: string;
  trainingSessionsAttended?: number;
  tuskLengthInCm?: number;
  finLengthInCm?: number;
};

const whales: Record<string, Whale> = getWhales();

const whaleSightings: Record<string, string[]> = getWhaleSightings();

function getWhaleNamesBySpecies(species: string): string[] {
  return Object.keys(whales).filter(
    (name) => whales[name]?.species === species
  );
}

function greeting(name: string, whale: Whale): string {
  return `Hi, I'm ${name}, a ${whale.weightInKg}kg ${whale.species}.`;
}

getWhaleNamesBySpecies("Skiller Whale").forEach((name) => {
  if (whales[name] !== undefined) console.log(greeting(name, whales[name]!));
  if (whaleSightings[name] !== undefined)
    console.log("Comments:", whaleSightings[name]?.join(", "));
});
