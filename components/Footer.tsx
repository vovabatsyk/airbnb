import { FC } from 'react';

interface FooterData {
  title: string;
  desc: string[];
}

const Footer = () => {
  return (
    <footer className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-sm text-gray-600'>
      {data.map((i) => (
        <div
          key={i.title}
          className='space-y-4 text-gray-800'
        >
          <h5 className='font-bold'>{i.title}</h5>
          {i.desc.map((d, index) => (
            <p
              key={index}
              className='cursor-pointer hover:opacity-80'
            >
              {d}
            </p>
          ))}
        </div>
      ))}
    </footer>
  );
};
export default Footer;

const data: FooterData[] = [
  {
    title: 'ABOUT',
    desc: [
      'Newsroom',
      'How Airbnb works',
      'Investors',
      'Airbnb Plus',
      'Airbnb Luxe',
    ],
  },
  {
    title: 'COMMUNITY',
    desc: [
      'Google',
      'Presents',
      'Zero to Full Stack Hero',
      'Students',
      'Join Now',
    ],
  },
  {
    title: 'HOST',
    desc: [
      "It's a clone",
      'Pamparam',
      'Referrals accepted',
      'This not a Rial Site',
      'Investors',
    ],
  },
  {
    title: 'SUPPORT',
    desc: [
      'Help Centre',
      'Trust & Safety',
      'Say Hi',
      'For the Win',
      'Hello World',
    ],
  },
];
