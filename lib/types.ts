export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: ProductCategory;
  isPopular?: boolean;
  isNew?: boolean;
}

export type ProductCategory = 
  | 'birthday-cakes'
  | 'wedding-cakes'
  | 'cupcakes'
  | 'pastries'
  | 'specials';

export interface CartItem extends Product {
  quantity: number;
}

export interface Testimonial {
  id: string;
  name: string;
  occasion: string;
  text: string;
  rating: number;
  image?: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  occasion: string;
  feedback?: string;
}

export interface CustomOrderForm {
  name: string;
  email: string;
  phone: string;
  flavors: string[];
  size: string;
  theme: string;
  occasion: string;
  dateNeeded: string;
  delivery: 'delivery' | 'pickup';
  budgetRange: string;
  notes: string;
  referenceImage?: File;
}
