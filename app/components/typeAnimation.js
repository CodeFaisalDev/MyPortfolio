'use client'

import { TypeAnimation } from 'react-type-animation';

export const TypeAnimationClient = () => {
  return (
    <TypeAnimation
      sequence={[
        'Faisal',
        1000,
        // Same substring at the start will only be typed out once, initially
        'FullStack Developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Rest Api Developer',
        1000,
        'Wordpress Developer',
        1000,
        'Shpify Developer',
        1000
      ]}
      wrapper="span"
      speed={50}
      className='text-2xl sm:text-3xl lg:text-4xl font-extrabold'
      repeat={Infinity}
    />
  );
};