import Carousel from 'react-multi-carousel';
import ProjectCard from './ProjectCard';
import { projects } from '../constants';
import 'react-multi-carousel/lib/styles.css';

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
            {projects.map((project)=>(
              <ProjectCard
                key={project.title}
                title={project.title}
                cover={project.cover}
                description={project.description}
                link={project.link}
                code={project.code}
              />
            ))}
        </Carousel>
     );
}
 
export default CardCarousel;