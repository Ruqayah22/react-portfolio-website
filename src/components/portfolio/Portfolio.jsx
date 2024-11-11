// import React from 'react'
// import './portfolio.css'
// import IMG1 from '../../assets/portfolio1.jpg'
// import IMG2 from '../../assets/portfolio2.jpg'
// import IMG3 from '../../assets/portfolio3.jpg'
// import IMG4 from '../../assets/portfolio4.jpg'
// import IMG5 from '../../assets/portfolio5.png'
// import IMG6 from "../../assets/portfolio6.jpg";

// const Portfolio = () => {
//   return (
//     <section id="portfolio">
//       <h5>My Recent Work</h5>
//       <h2>Portfolio</h2>

//       <div className="container portfolio__container">
//         <article className="portfolio__item">
//           <div className="portfolio__item-image">
//             <img src={IMG1} alt="" />
//           </div>
//           <h3>This is a portfolio item title</h3>
//           <div class="portfolio__item-cta">

//           <a
//             href="https://github.com/"
//             className="btn"
//             target="_blank"
//             rel="noreferrer"
//           >
//             Github
//           </a>
//           <a
//             href="https://dribbble.com/Alien_Pixels"
//             className="btn btn-primary"
//             target="_blank"
//             rel="noreferrer"
//           >
//             Live Demo
//           </a>
//           </div>
//         </article>
//         <article className="portfolio__item">
//           <div className="portfolio__item-image">
//             <img src={IMG1} alt="" />
//           </div>
//           <h3>This is a portfolio item title</h3>
//           <div class="portfolio__item-cta">
//             <a
//               href="https://github.com/"
//               className="btn"
//               target="_blank"
//               rel="noreferrer"
//             >
//               Github
//             </a>
//             <a
//               href="https://dribbble.com/Alien_Pixels"
//               className="btn btn-primary"
//               target="_blank"
//               rel="noreferrer"
//             >
//               Live Demo
//             </a>
//           </div>
//         </article>
//         <article className="portfolio__item">
//           <div className="portfolio__item-image">
//             <img src={IMG1} alt="" />
//           </div>
//           <h3>This is a portfolio item title</h3>
//           <div class="portfolio__item-cta">
//             <a
//               href="https://github.com/"
//               className="btn"
//               target="_blank"
//               rel="noreferrer"
//             >
//               Github
//             </a>
//             <a
//               href="https://dribbble.com/Alien_Pixels"
//               className="btn btn-primary"
//               target="_blank"
//               rel="noreferrer"
//             >
//               Live Demo
//             </a>
//           </div>
//         </article>
//         <article className="portfolio__item">
//           <div className="portfolio__item-image">
//             <img src={IMG1} alt="" />
//           </div>
//           <h3>This is a portfolio item title</h3>
//           <div class="portfolio__item-cta">
//             <a
//               href="https://github.com/"
//               className="btn"
//               target="_blank"
//               rel="noreferrer"
//             >
//               Github
//             </a>
//             <a
//               href="https://dribbble.com/Alien_Pixels"
//               className="btn btn-primary"
//               target="_blank"
//               rel="noreferrer"
//             >
//               Live Demo
//             </a>
//           </div>
//         </article>
//         <article className="portfolio__item">
//           <div className="portfolio__item-image">
//             <img src={IMG1} alt="" />
//           </div>
//           <h3>This is a portfolio item title</h3>
//           <div class="portfolio__item-cta">
//             <a
//               href="https://github.com/"
//               className="btn"
//               target="_blank"
//               rel="noreferrer"
//             >
//               Github
//             </a>
//             <a
//               href="https://dribbble.com/Alien_Pixels"
//               className="btn btn-primary"
//               target="_blank"
//               rel="noreferrer"
//             >
//               Live Demo
//             </a>
//           </div>
//         </article>
//       </div>
//     </section>
//   );
// }

// export default Portfolio

import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

// DO not use the images in production

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Crypto Currency Dashboard & financial Visualization",
    github: "https://github.com",
    demo: "https://dribbble.com/Alien_Pixels",
  },
  {
    id: 2,
    image: IMG2,
    title: "Charts templates & infographic in Figma",
    github: "https://github.com",
    demo: "https://dribbble.com/Alien_Pixels",
  },
  {
    id: 3,
    image: IMG3,
    title: "Figma dashboard UI kit for data design web apps",
    github: "https://github.com",
    demo: "https://dribbble.com/Alien_Pixels",
  },
  {
    id: 4,
    image: IMG4,
    title: "Maintaining tasks and tracking progress",
    github: "https://github.com",
    demo: "https://dribbble.com/Alien_Pixels",
  },
  {
    id: 5,
    image: IMG5,
    title: "Charts templates & infographic in Figma",
    github: "https://github.com",
    demo: "https://dribbble.com/Alien_Pixels",
  },
  {
    id: 6,
    image: IMG6,
    title: "Charts templates & infographic in Figma",
    github: "https://github.com",
    demo: "https://dribbble.com/Alien_Pixels",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div class="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
