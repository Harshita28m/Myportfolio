import React, { useState } from 'react';

const RadialProgressBar = ({no}) => {
  const skills = [
    { title: 'HTML', percent: '80' },
    { title: 'CSS', percent: '70' },
    { title: 'Tailwind CSS', percent: '60' },
    { title: 'JavaScript', percent: '70' },
    { title: 'React', percent: '50' },
    
  ];

  const [currentSkill, setCurrentSkill] = useState(skills[no]);

  const circumference = 2 * 22 / 7 * 75;

  return (
    
      
        <div className="flex items-center justify-center items-center h-60">
          <svg className="transform -rotate-90 w-52 h-52">
            <circle
              cx="110"
              cy="105"
              r="75"
              stroke="currentColor"
              strokeWidth="15"
              fill="transparent"
              className="text-gray-700"
            />
            <circle
              cx="110"
              cy="105"
              r="75"
              stroke="currentColor"
              strokeWidth="15"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={circumference - currentSkill.percent / 100 * circumference}
              className="bg-gradient-to-r text-indigo-500 via-purple-500 to-pink-500  "
            />
          </svg>
        <span className="absolute text-3xl font-bold mb-4">{currentSkill.percent}%</span>
       <span className="absolute text-2xl font-bold mt-48">{currentSkill.title}</span>
      
        </div>
        
     
  );
};

export default RadialProgressBar;