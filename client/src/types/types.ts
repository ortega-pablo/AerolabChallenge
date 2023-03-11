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

export interface UserApi {
  _id: string;
  name: string;
  points: number;
  createDate: string;
  redeemHistory: ProductApi[];
  __v: number;
}

export interface postAddPoints {
  amount: number;
}

export interface responsePostAddPoints {
  message: 'Points Updated';
  'New Points': number;
}

export interface postRedeem {
  productId: string;
}

export interface responsePostRedeem {
  message: "You've redeem the product successfully",
}