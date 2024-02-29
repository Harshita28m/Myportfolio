// import React, { useState } from 'react';
// import "./Radial.css" 
// const RadialProgressBar = ({no}) => {
//   const skills = [
//     { title: 'HTML', percent: '80' },
//     { title: 'CSS', percent: '70' },
//     { title: 'Tailwind CSS', percent: '60' },
//     { title: 'JavaScript', percent: '70' },
//     { title: 'React', percent: '50' },
    
//   ];

//   const [currentSkill, setCurrentSkill] = useState(skills[no]);

//   const circumference = 2 * 22 / 7 * 75;

//   return (
    
      
//     <div className="relative w-40 h-40 ">
//     <svg className="w-full h-full" viewBox="0 0 100 100">
      
//       <circle
//         className="text-gray-200 stroke-current"
//         stroke-width="10"
        
//         cx="50"
//         cy="50"
//         r="40"
//         fill="transparent"
//       ></circle>
      
//       <circle
//         className="text-indigo-500  progress-ring__circle stroke-current"
//         stroke-width="10"
//         stroke-linecap="round"
//         cx="50"
//         cy="50"
//         r="40"
//         fill="transparent"
//       //  strokeDasharray={circumference}
//         strokeDashoffset="calc(400 - (400 * currentSkill.percent) / 100)"
//       ></circle>
      
   
//       <text x="50" y="50" font-family="Verdana" font-size="12" text-anchor="middle" alignment-baseline="middle" fill="white">{currentSkill.percent}%</text>
     
//     </svg>
   
//   </div>
        
     
//   );
// };

// export default RadialProgressBar;


import React, { useState, useEffect } from 'react';


const RadialProgressbar = ({ percentage }) => {
  const [dashOffset, setDashOffset] = useState(0);
  const skills = [
        { title: 'HTML', percent: '80' },
        { title: 'CSS', percent: '70' },
        { title: 'Tailwind CSS', percent: '60' },
        { title: 'JavaScript', percent: '70' },
        { title: 'React', percent: '50' },
        
      ];

  useEffect(() => {
    const circle = document.getElementById('progress-circle');
    const circumference = 2 * Math.PI * parseFloat(circle.getAttribute('r'));
    setDashOffset(circumference - (circumference * percentage) / 100);
  }, [percentage]);

  return (
    <div className="relative w-40 h-40">
      <svg className="w-full h-full" viewBox="0 0 100 100">
      
        <circle
          className="text-gray-200 stroke-current"
          strokeWidth="10"
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
        ></circle>
        
      
        <circle
          id="progress-circle"
          className="text-indigo-500 progress-ring__circle stroke-current"
          strokeWidth="10"
          strokeLinecap="round"
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
          strokeDashoffset={dashOffset}
          strokeDasharray={2 * Math.PI * 40}  
        ></circle>
        
        
        <text x="50" y="50" fontFamily="Verdana" fontSize="12" textAnchor="middle" alignmentBaseline="middle" fill='white'>
          {percentage}%
        </text>
      </svg>
    </div>
  );
};

export default RadialProgressbar ;
      
          
