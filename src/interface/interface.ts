export interface ProductItem{
    "id":number,
    "title":string,
    "description":string,
    "author":string,
    "imageLink":string,
    "language":string,
    "country":string,
    "price":number
}

export interface ProductListInitialState{
    "loading":boolean,
    "products":ProductItem[],
    "getProductFailure":boolean,
    "error":object

}

export interface CartInitialState{
    "loading":boolean,
    "addToCartSuccess":ProductItem[],
    "addToCartFailure":boolean,
    "error":{}

}

export interface ProductParams{
  productId: string;
};

export type CallBack = ()=>void;

