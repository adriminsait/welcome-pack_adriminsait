export interface CharacterInterface {
    id: number;
    name: string;
    image: string;
    species: string;
    gender: string;
    status: string;
    origin: ori,
  }
  
  export interface CharacterResponseInterface {
    info: {
      count: number;
      next: string;
      pages: number;
      prev: string;
    };
    results: CharacterInterface[];
  }

  interface ori {
    name: string;
  }