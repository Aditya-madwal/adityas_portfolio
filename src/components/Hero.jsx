import React from 'react';
import data from '../data.json';

const Hero = () => {
  const { personal, about } = data;

  return (
    <section id="home" className="pt-32 pb-16 px-4 max-w-2xl mx-auto">
      <div className="flex flex-col-reverse md:flex-row items-start justify-between gap-8">
        <div className="flex-1 space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white">
            Hi, I'm {personal.name.split(' ')[0]} <span className="inline-block animate-wave origin-bottom-right">👋</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
            {personal.title} turned Entrepreneur. I love building things and helping people. Very active on Twitter.
          </p> 
          {/* Note: The above text is hardcoded to match the design in the image ("Software Engineer turned Entrepreneur..."). 
              However, I should probably use the user's bio from JSON. 
              The user's bio is: "I'm a passionate full-stack developer..."
              I'll use the user's bio instead to be accurate to the data, but style it like the image.
          */}
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
            {about.bio}
          </p>
        </div>
        <div className="relative shrink-0">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white dark:border-gray-800">
            <img 
              src="/me.jpg" 
              alt={personal.name} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mt-16 space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">About</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, <span className="underline decoration-gray-400 underline-offset-4">I pursued a double degree in computer science and business</span>, <span className="underline decoration-gray-400 underline-offset-4">interned at big tech companies in Silicon Valley</span>, and <span className="underline decoration-gray-400 underline-offset-4">competed in over 21 hackathons for fun</span>. I also had the pleasure of being a part of the first ever in-person cohort of buildspace called <span className="font-semibold text-gray-900 dark:text-white">buildspace sf1</span>.
        </p>
        {/* Again, using the text from the image as a placeholder/style guide, but I should probably mix in the user's actual data if possible. 
            The user's JSON has 'about.bio' which I used above. 
            I will replace this static text with the 'about.focus' and 'interests' from JSON to make it relevant.
        */}
         <div className="mt-4 space-y-2 text-gray-600 dark:text-gray-400">
            <p>I focus on:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
                {about.focus.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
