export interface User {
  _id: string;
  name: string;
  points: number;
  redeemHistory: ProductApi[];
}

export interface ProductApi {
    img: {
      url: string;
      hdUrl: string;
    };
    _id: string;
    name: string;
    cost: string;
    category: string;
  }

