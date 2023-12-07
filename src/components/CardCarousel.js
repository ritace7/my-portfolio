import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import ProjectCard from './ProjectCard';
import proj1Img from '../images/proj1.jpg';
import proj2Img from '../images/proj2.jpg';
import proj3Img from '../images/proj3.jpg';
import proj4Img from '../images/proj4.jpg';
import proj5Img from '../images/proj5.jpg';
import proj6Img from '../images/proj6.jpg';

const CardCarousel = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 800 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 800, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return ( 
        <Carousel responsive={responsive}  showDots={true} className='project-cards'>
             <ProjectCard 
                            title="Todo App"
                            cover={proj4Img}
                            description="A full stack MERN app with a unique todo list for every user.."
                            link="https://todo-list-server-wzzf.onrender.com"
                        />
                        <ProjectCard 
                            title="MCU Info Page"
                            cover={proj5Img}
                            description="An info page that displays characters based on Marvel's API.."
                            link="https://ritace7.github.io/mcu-app/"
                        />
                        <ProjectCard 
                            title="Tenzies game"
                            cover={proj6Img}
                            description="A simple app that replicates the Tenzies game.."
                            link="https://ritace7.github.io/tenzies/"
                        />
                        <ProjectCard 
                            title="React Facts Page"
                            cover={proj2Img}
                            description="A react website that toggles between light mode and dark mode..."
                            link="https://ritace7.github.io/react-facts/"
                        />
                        <ProjectCard 
                            title="Calcus the Calculator"
                            cover={proj3Img}
                            description="An animated calculator built on React Redux.."
                            link="https://ritace7.github.io/calcus/"
                        />
                        <ProjectCard 
                            title="Engineer's Portfolio"
                            cover={proj1Img}
                            description="A website I made for an engineer..."
                            link="https://ritace7.github.io/iammanish.github.io/"
                        />
        </Carousel>
     );
}
 
export default CardCarousel;