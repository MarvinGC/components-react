import React from 'react';
import './Portfolio.css';
import { BsFillArrowRightSquareFill, BsFillArrowLeftSquareFill } from 'react-icons/bs';
import Project from './Project';
import { projects } from '../utils/constants';

const Portfolio = () => {
    const scrollRef = React.useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;
        if (direction === 'left') {
            current.scrollLeft -= 300;
        } else {
            current.scrollLeft += 300;
        }
    };
    return (
        <div id="portfolio" className="portfolio section-padding">
            <h1>Mis Proyectos</h1>
            <div className="portfolio-content section-padding">
                <div className="portfolio-section" ref={scrollRef}>
                    {
                        projects.map((project) => (
                        <Project 
                            image={project.image} 
                            description={project.description}
                            url={project.url}
                        />
                        ))
                    }   
                </div>
                <BsFillArrowLeftSquareFill className="portfolio-arrow-left" onClick={() => scroll('left')}/>
                <BsFillArrowRightSquareFill className="portfolio-arrow-right" onClick={() => scroll('right')}/>
            </div>
        </div>
    );
};

export default Portfolio;