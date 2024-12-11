export const LIMIT_PRODUCTS = 20;

export const TIER_SELECTION = [
  {
    label: 'All',
    value: 'All',
    id: 1,
  },
  {
    label: 'Premium',
    value: 'Premium',
    id: 2,
  },
  {
    label: 'Deluxe',
    value: 'Deluxe',
    id: 3,
  },
  {
    label: 'Basic',
    value: 'Basic',
    id: 4,
  },
];

export const THEME_SELECTION = [
  {
    label: 'All',
    value: 'All',
    id: 1,
  },
  {
    label: 'Colorful',
    value: 'Colorful',
    id: 2,
  },
  {
    label: 'Halloween',
    value: 'Halloween',
    id: 3,
  },
  {
    label: 'Light',
    value: 'Light',
    id: 4,
  },
  {
    label: 'Dark',
    value: 'Dark',
    id: 5,
  },
];

export const TIME_SELECTION = [
  {
    label: 'Latest',
    value: 'desc',
    id: 1,
  },
  {
    label: 'Oldest',
    value: 'asc',
    id: 2,
  },
];

export const PRICE_SELECTION = [
  {
    label: 'Low to High',
    value: 'asc',
    id: 1,
  },
  {
    label: 'High to Low',
    value: 'desc',
    id: 2,
  },
];

export const MENU_HEADER_URL = {
  Home: 'home',
  AboutUs: 'about-us',
  OurTeams: 'our-teams',
  MarketplaceRoadmap: 'marketplace-roadmap',
  WhitePaper: 'white-paper',
};

export const MENU_HEADER_ITEMS = [
  { label: 'HOME', key: 1, localUrl: MENU_HEADER_URL.Home },
  { label: 'ABOUT US', key: 2, localUrl: MENU_HEADER_URL.AboutUs },
  { label: 'OUR TEAMS', key: 3, localUrl: MENU_HEADER_URL.OurTeams },
  { label: 'MARKETPLACE ROADMAP', key: 4, localUrl: MENU_HEADER_URL.MarketplaceRoadmap },
  { label: 'WHITE PAPER', key: 6, localUrl: MENU_HEADER_URL.WhitePaper },
];
