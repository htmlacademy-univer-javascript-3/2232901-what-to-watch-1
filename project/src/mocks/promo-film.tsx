import {Film} from '../types/film';

export const promoFilm: Film = {
  name: 'The Grand Budapest Hotel',
  genre: 'Comedy',
  releaseYear: 2014,
  backGroundSrc: 'img/bg-the-grand-budapest-hotel.jpg',
  src: 'img/the-grand-budapest-hotel-poster.jpg',
  description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&aposs friend and protégé.\n' +
    '\nGustave prides himself on providing first-class service to the hotel&aposs guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave&aposs lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.\n',
  director: 'Wes Anderson',
  duration: '1h 39m',
  id: 0,
  ratingCount: 240,
  ratingScore: 8.9,
  starring: [
    'Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe'
  ],
  videoSrc: 'https://10.react.pages.academy/static/film/video/bubbles.mp4',
  reviews: [
    {
      text: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious\n' +
        'Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed films in\n' +
        'years.',
      author: 'Kate Muir',
      date: '2016-12-24',
      rating: 8.9
    },
    {
      text: 'Anderson\'s films are too precious for some, but for those of us willing to\n' +
        'lose ourselves in them, they\'re a delight. "The Grand Budapest Hotel" is no different, except that he\n' +
        'has added a hint of gravitas to the mix, improving the recipe.',
      author: 'Bill Goodykoontz',
      date: '2015-11-18',
      rating: 8.0
    },
    {
      text: 'I didn\'t find it amusing, and while I can appreciate the creativity, it\'s an\n' +
        'hour and 40 minutes I wish I could take back.',
      author: 'Amanda Greever',
      date: '2015-11-18',
      rating: 8.0
    }
  ]
};
