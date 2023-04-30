import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';
import tour5 from './images/tour-5.jpeg';
import tour6 from './images/tour-6.jpeg';

export const pageLinks = [
  {
    id: 1,
    href: '#home',
    text: 'home',
  },
  {
    id: 2,
    href: '#about',
    text: 'about',
  },
  {
    id: 3,
    href: '#services',
    text: 'services',
  },
  {
    id: 4,
    href: '#tours',
    text: 'tours',
  },
];

export const socialLinks = [
  {
    id: 1,
    href: 'https://www.twitter.com',
    target: '_blank',
    icon: 'fab fa-facebook',
  },
  {
    id: 2,
    href: 'https://www.twitter.com',
    target: '_blank',
    icon: 'fab fa-twitter',
  },
  {
    id: 3,
    href: 'https://www.twitter.com',
    target: '_blank',
    icon: 'fab fa-squarespace',
  },
];

export const services = [
  {
    id: 1,
    title: 'saving money',
    icon: 'fas fa-wallet fa-fw',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    id: 2,
    title: 'endless hiking',
    icon: 'fas fa-tree fa-fw',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },

  {
    id: 3,
    title: 'amazing comfort',
    icon: 'fas fa-socks fa-fw',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
];

export const toursData = [
  {
    id: 1,
    image: tour1,
    title: 'Tibet Adventure',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    country: 'China',
    duration: 6,
    price: 2100,
    startDate: '08/26/2023',
  },
  {
    id: 2,
    image: tour2,
    title: 'Best of Java',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    country: 'Indonesia',
    duration: 11,
    price: 1400,
    startDate: '10/01/2023',
  },
  {
    id: 3,
    image: tour3,
    title: 'explore hong kong',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    country: 'Hong Kong',
    duration: 8,
    price: 5000,
    startDate: '09/15/2022',
  },
  {
    id: 4,
    image: tour4,
    title: 'Kenya Highlights',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    country: 'Kenya',
    duration: 20,
    price: 3300,
    startDate: '12/05/2022',
  },
  {
    id: 5,
    image: tour5,
    title: 'south african grandeur',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    country: 'south africa',
    duration: 8,
    price: 3300,
    startDate: '12/08/2022',
  },
  {
    id: 6,
    image: tour6,
    title: 'nameste india',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    country: 'india',
    duration: 12,
    price: 2500,
    startDate: '25/08/2022',
  },
];
