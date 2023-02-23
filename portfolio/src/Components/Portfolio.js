import React from 'react';
import PortfolioData from './Data/Portfolio';
import PortfolioItem from './PortfolioItem';
import Title from './Title';

const Portfolio = () => {
  return (
    <div className='mt-12'>
 <div className="flex items-center justfify-center flex-col text-center">
    <Title>Portfolio</Title>
    </div>
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {PortfolioData.map(project =>(
          <PortfolioItem 
          imgUrl={project.imgUrl}
          title={project.title}
          stack={project.stack}
          link={project.link}
          key={project.id}
          />
        ))}
      </div>
    </div>
    </div>
   
  );
}

export default Portfolio;
