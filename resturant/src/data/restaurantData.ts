import type { MenuItem, GalleryItem, TestimonialItem, ChefInfo } from '../types';

export const SIGNATURE_DISHES: MenuItem[] = [
  {
    id: 'wagyu-tenderloin',
    name: 'Wagyu Tenderloin',
    nameAr: 'شريحة واغيو تندرلوين',
    description: 'A5 Japanese Wagyu, charred shallot puree, wild maitake mushrooms, black truffle jus.',
    descriptionAr: 'واغيو ياباني بدرجة A5، بيوريه البصل المكرمل، فطر المايتاكي البري، وصلصة الترفل الأسود.',
    price: 85,
    category: 'mains',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    dietaryTags: ['Gluten-Free', "Chef's Special"],
    dietaryTagsAr: ['خالٍ من الجلوتين', 'إبداع الشيف'],
    isChefSpecial: true
  },
  {
    id: 'truffle-risotto',
    name: 'Truffle & Porcini Risotto',
    nameAr: 'ريزوتو الترفل وبورچيني البري',
    description: 'Acquerello carnaroli rice, aged Parmigiano Reggiano, shaved winter black truffles.',
    descriptionAr: 'أرز كارنارولي الفاخر، جبن بارميجانو ريجانو المعتق، مع شرائح الترفل الأسود الطازج.',
    price: 42,
    category: 'mains',
    image: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=800&q=80',
    dietaryTags: ['Vegetarian'],
    dietaryTagsAr: ['نباتي']
  },
  {
    id: 'seared-salmon',
    name: 'Wild King Salmon',
    nameAr: 'سلمون كينغ البري المشوي',
    description: 'Pan-seared salmon, saffron beurre blanc, baby leeks, trout caviar garnish.',
    descriptionAr: 'سلمون محمر مع صلصة الزعفران والزبدة الفاخرة، كراث مصغر، وكافيار التراوت.',
    price: 48,
    category: 'mains',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80',
    dietaryTags: ['Gluten-Free'],
    dietaryTagsAr: ['خالٍ من الجلوتين']
  },
  {
    id: 'burrata-tomato',
    name: 'Burrata & Heirloom Tomato',
    nameAr: 'بوراتا مع طماطم الهيرلوم',
    description: 'Artisanal Pugliese burrata, heirloom tomatoes, aged balsamic reduction, basil oil.',
    descriptionAr: 'جبن البوراتا الإيطالي الفاخر، طماطم ملونة طازجة، اختزال البلسمك المعتق، وزيت الريحان.',
    price: 28,
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb19655?auto=format&fit=crop&w=800&q=80',
    dietaryTags: ['Vegetarian', 'Gluten-Free'],
    dietaryTagsAr: ['نباتي', 'خالٍ من الجلوتين']
  },
  {
    id: 'chocolate-fondant',
    name: 'Valrhona Chocolate Fondant',
    nameAr: 'فوندان شوكولاتة فالرونا',
    description: '70% Dark chocolate lava cake, smoked Madagascar vanilla bean gelato, hazelnut praline.',
    descriptionAr: 'كيك الشوكولاتة الداكنة ٧٠٪ الدافق، چيلاتو الفانيليا المدخنة، وبرالين البندق.',
    price: 22,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80',
    dietaryTags: ['Signature Dessert'],
    dietaryTagsAr: ['حلويات توقيع لونا'],
    isChefSpecial: true
  },
  {
    id: 'citrus-panna-cotta',
    name: 'Citrus & Blood Orange Panna Cotta',
    nameAr: 'بانا كوتا الحمضيات والبرتقال الأحمر',
    description: 'Silky cream infused with lemon verbena, blood orange gelée, candied citrus zest.',
    descriptionAr: 'قشطة حريرية بعبق اللويزة، چيليه البرتقال الدموي، وبشر الحمضيات المحلاة.',
    price: 19,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80',
    dietaryTags: ['Gluten-Free'],
    dietaryTagsAr: ['خالٍ من الجلوتين']
  }
];

export const FULL_MENU_EXTRA: MenuItem[] = [
  ...SIGNATURE_DISHES,
  {
    id: 'lobster-bisque',
    name: 'Maine Lobster Bisque',
    nameAr: 'شوربة البيسك بالكركند',
    description: 'Velvety lobster reduction, cognac cream, tarragon, brioche crouton.',
    descriptionAr: 'شوربة الكركند المخملية مع كريمة الكونياك، الطرخون، ومكعبات البريوش الفاخر.',
    price: 32,
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'smoked-octopus',
    name: 'Charred Spanish Octopus',
    nameAr: 'أخطبوط إسباني مشوي على الفحم',
    description: 'Smoked paprika oil, fingerling potato confit, chorizo emulsion, romesco sauce.',
    descriptionAr: 'أخطبوط مشوي مع زيت البابريكا المدخنة، بطاطس كونفيه، وصلصة الروميسكو الإسبانية.',
    price: 36,
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'moonlight-elixir',
    name: 'Moonlight Elixir Cocktail',
    nameAr: 'كوكتيل إكسير القمر',
    description: 'Empress 1908 gin, elderflower liqueur, lavender syrup, clarified lemon, edible gold shimmer.',
    descriptionAr: 'جين إمبريس، مشروب الزهور الفاخر، سيروب اللافندر، عصير الليمون المصفى، ولمسات الذهب الخالص.',
    price: 24,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80',
    isChefSpecial: true
  },
  {
    id: 'vintage-wine-pairing',
    name: 'Sommelier Reserve Vintage Pairing',
    nameAr: 'تشكيلة الخمائر والعصائر المعتقة',
    description: 'Curated organic grape infusions and artisanal non-alcoholic Botanical elixirs.',
    descriptionAr: 'مجموعة منقوع النباتات العطرية والمشروبات العضوية الفاخرة المنسقة خصيصاً لكل طبق.',
    price: 65,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Main Dining Hall',
    titleAr: 'صالة الطعام الرئيسية',
    category: 'interior',
    categoryLabel: 'Interior Ambiance',
    categoryLabelAr: 'تصميم الصالة',
    url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    aspectRatio: 'wide'
  },
  {
    id: 'gal-2',
    title: 'Precision Plating',
    titleAr: 'دقة وتنسيق الطبق',
    category: 'dishes',
    categoryLabel: 'Culinary Craft',
    categoryLabelAr: 'إبداع الطهي',
    url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    aspectRatio: 'tall'
  },
  {
    id: 'gal-3',
    title: 'Chef Adrian Vale at Work',
    titleAr: 'الشيف أدريان فيل أثناء العمل',
    category: 'chef',
    categoryLabel: 'Kitchen Mastery',
    categoryLabelAr: 'إتقان المطبخ',
    url: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=80',
    aspectRatio: 'square'
  },
  {
    id: 'gal-4',
    title: 'Moonlight Terrace',
    titleAr: 'تراس ضوء القمر الخارجية',
    category: 'atmosphere',
    categoryLabel: 'Outdoor Atmosphere',
    categoryLabelAr: 'الأجواء الخارجية',
    url: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
    aspectRatio: 'wide'
  },
  {
    id: 'gal-5',
    title: 'Truffle & Porcini Mastery',
    titleAr: 'إبداع الترفل والبورشيني',
    category: 'dishes',
    categoryLabel: 'Signature Gastronomy',
    categoryLabelAr: 'الأطباق الخاصة',
    url: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=1200&q=80',
    aspectRatio: 'tall'
  },
  {
    id: 'gal-6',
    title: 'Private Sommelier Cellar',
    titleAr: 'قبو المشروبات الخاص',
    category: 'interior',
    categoryLabel: 'Private Lounge',
    categoryLabelAr: 'الأجنحة الخاصة',
    url: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80',
    aspectRatio: 'square'
  }
];

export const CHEF_DATA: ChefInfo = {
  name: 'Adrian Vale',
  nameAr: 'أدريان فيل',
  title: 'Executive Culinary Director',
  titleAr: 'المدير التنفيذي لفنون الطهي',
  bio: 'Trained under legendary masters in Paris and San Sebastian, Chef Adrian Vale has refined Luna’s culinary philosophy around the harmony of seasonal produce, precise heat control, and poetic aesthetic presentation.',
  bioAr: 'تدرب الشيف أدريان فيل على يد كبار أساطير الطهي في باريس وسان سيباستيان، وقام بتطوير فلسفة مطعم لونا لتتمحور حول التناغم بين المنتجات الموسمية الطازجة، ضبط درجات الحرارة الدقيق، والتقديم الجمالي الساحر.',
  quote: 'True luxury is not complexity; it is the perfect harmony of pure flavors, immaculate texture, and genuine warmth.',
  quoteAr: 'الفخامة الحقيقية ليست في التعقيد؛ بل في التناغم التام بين النكهات الخالصة والتفاصيل الدافئة.',
  image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80',
  experienceYears: 18
};

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'rev-1',
    author: 'Elena Rostova',
    role: 'Gastronomy Critic',
    text: 'Every dish felt intentional, balanced, and beautifully presented. Luna has set a new benchmark for fine dining sophistication.',
    rating: 5,
    date: 'February 2026'
  },
  {
    id: 'rev-2',
    author: 'Marcus Vance',
    role: 'Design Director',
    text: 'The interplay of warm lighting, incredible acoustics, and Chef Vale’s Wagyu Tenderloin made our anniversary night utterly magical.',
    rating: 5,
    date: 'January 2026'
  },
  {
    id: 'rev-3',
    author: 'Sophia Sterling',
    role: 'Frequent Dining Guest',
    text: 'Impeccable service from the moment you step through the entrance. The Truffle Risotto alone is worth traveling across town for.',
    rating: 5,
    date: 'February 2026'
  }
];
