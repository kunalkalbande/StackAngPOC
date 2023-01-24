export interface Pokemon {
    value: string;
    viewValue: string;
  }
  
 export interface PokemonGroup {
    disabled?: boolean;
    name: string;
    pokemon: Pokemon[];
  }