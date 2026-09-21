import { products } from './products';

export type NavItem = {
  label: string;
  href: string;
  key: string;
  children?: { label: string; href: string; sub: string }[];
  tint?: 'cold' | 'hot';
};

export const navigation: NavItem[] = [
  { label: 'Home', href: '/', key: '' },
  { label: 'About', href: '/about-us', key: 'about-us' },
  {
    label: 'Products',
    href: '/products',
    key: 'products',
    tint: 'cold',
    children: products.map((p) => ({
      label: p.name,
      href: `/products/${p.slug}`,
      sub: `Category ${p.number}`
    }))
  },
  { label: 'Industries', href: '/industries', key: 'industries' },
  { label: 'Approvals', href: '/approvals-compliance', key: 'approvals-compliance' },
  { label: 'Quality', href: '/quality', key: 'quality' }
];