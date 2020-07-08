export interface Image {
  id: number;
  url: string;
}

export interface Category {
  id: number;
  name: string;
}

export interface Item {
  id: number;
  title: string;
  description: string;
  price: number;
  images: Image[];
  category: Category;
}