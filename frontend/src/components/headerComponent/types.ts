// types.ts
export interface Item {
  id: number;
  title: string;
}

export interface SubCategory {
  id: number;
  title: string;
  items: Item[];
}

export interface Category {
  id: number;
  title: string;
  link: string;
  subCategories: SubCategory[];
}
