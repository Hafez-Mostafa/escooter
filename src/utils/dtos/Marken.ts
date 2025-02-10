// export interface ICreateMarkeDto {
//     title: string,
//     imageSrc: string,
//     preis: number,
//     link: string,
// }

// export interface IUpdateMarkeDto {
//     title?: string,
//     imageSrc?: string,
//     preis?: number,
//     link?: string,
// }



  
  export interface ICreateScooterDTO {
    id: string;
    brand: string;
    model: string;
    price: number;
    stock?: number;
    description?: string; // Additional details (optional)
  }
  export interface IUpdateScooterDTO {
    id?: string;
    brand?: string;
    model?: string;
    price?: number;
    stock?: number;
    description?: string; // Additional details (optional)
  }
  