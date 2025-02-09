export type Article = {
  id: number;
  userId: number;
  title: string;
  body: string;
};


export interface ICardData {
  title: string;
  imageSrc: string;
  link: string;
  preis:number;
}

export interface ISimilarData {
  title: string;
  imageSrc: string;
  link: string;
  description:string;
}