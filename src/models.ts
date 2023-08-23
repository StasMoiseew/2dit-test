export interface Task1Accordion {
  title: string;
  description: string;
}

export interface Product {
  title: string;
  vendor: string;
  category: string;
  price: number;
  imageUrl: string;
  isHit?: boolean;
  isSale?: boolean;
  isNew?: boolean;
  onStorage?: boolean;
}