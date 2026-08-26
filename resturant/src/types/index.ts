export type Language = 'en' | 'ar';

export type CategoryId = 'all' | 'starters' | 'mains' | 'desserts' | 'drinks';

export interface MenuItem {
  id: string;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  price: number;
  category: 'starters' | 'mains' | 'desserts' | 'drinks';
  image: string;
  dietaryTags?: string[];
  dietaryTagsAr?: string[];
  isChefSpecial?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  titleAr: string;
  category: 'atmosphere' | 'dishes' | 'interior' | 'chef';
  categoryLabel: string;
  categoryLabelAr: string;
  url: string;
  aspectRatio?: 'tall' | 'wide' | 'square';
}

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  text: string;
  rating: number;
  date: string;
}

export interface ReservationFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  seatingArea: 'main' | 'terrace' | 'chefs_table' | 'private_dining';
  specialRequests: string;
}

export interface ChefInfo {
  name: string;
  nameAr: string;
  title: string;
  titleAr: string;
  bio: string;
  bioAr: string;
  quote: string;
  quoteAr: string;
  image: string;
  experienceYears: number;
}
