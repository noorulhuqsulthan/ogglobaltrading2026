export type Theme = 'dark' | 'light';

export type NavChild = { label: string; href: string; sub: string };

export type NavItem = {
  label: string;
  href: string;
  key: string;
  tint?: 'cold' | 'hot';
  children?: NavChild[];
};

export type { Product, ProductFeature } from '@/data/products';