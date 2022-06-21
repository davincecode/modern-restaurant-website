/* eslint-disable import/no-anonymous-default-export */
import images from './images';

  const wines = [
    {
      title: 'Chapel Hill Shiraz',
      price: '$156',
      tags: 'AU | Bottle',
    },
    {
      title: 'Catena Malbee',
      price: '$159',
      tags: 'AU | Bottle',
    },
    {
      title: 'La Vieillw Rose',
      price: '$144',
      tags: 'FR | 750 ml',
    },
    {
      title: 'Rhino Pale Ale',
      price: '$131',
      tags: 'CA | 750 ml',
    },
    {
      title: 'Irish Guinness',
      price: '$126',
      tags: 'IE | 750 ml',
    },
  ];

  const cocktails = [
    {
      title: 'Aperol Sprtiz',
      price: '$120',
      tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
    },
    {
      title: "Dark 'N' Stormy",
      price: '$116',
      tags: 'Dark rum | Ginger beer | Slice of lime',
    },
    {
      title: 'Daiquiri',
      price: '$110',
      tags: 'Rum | Citrus juice | Sugar',
    },
    {
      title: 'Old Fashioned',
      price: '$131',
      tags: 'Bourbon | Brown sugar | Angostura Bitters',
    },
    {
      title: 'Negroni',
      price: '$126',
      tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
    },
  ];

  const awards = [
    {
      imgUrl: images.award02,
      title: 'Bib Gourmond',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
    },
    {
      imgUrl: images.award01,
      title: 'Rising Star',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
    },
    {
      imgUrl: images.award05,
      title: 'AA Hospitality',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
    },
    {
      imgUrl: images.award03,
      title: 'Outstanding Chef',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
    },
]



export default { wines, cocktails, awards };

