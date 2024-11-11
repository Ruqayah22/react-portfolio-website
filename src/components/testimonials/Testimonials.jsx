// import React from "react";
// import "./testimonials.css";
// import AVTR1 from "../../assets/avatar1.jpg";
// import AVTR2 from "../../assets/avatar2.jpg";
// import AVTR3 from "../../assets/avatar3.jpg";
// import AVTR4 from "../../assets/avatar4.jpg";

// console.log(AVTR1);

// const Testimonials = () => {
//   return (
//     <section id="testimonials">
//       <h5>Review from clients</h5>
//       <h2>Testimonials</h2>

//       <div className="container testimonials__container">
//         <article className="testimonial">
//           <div className="client__avatar">
//             <img src={AVTR1} alt="Avatar one" />
//           </div>
//           <h5 className="client__name">Ernest Achiever</h5>
//           <small className="client__review">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
//             quam ea eum unde voluptatum mollitia, nostrum beatae quasi tempora
//             praesentium ipsum, repellendus ipsam ut quidem eius, consequuntur
//             quo? Sapiente, reprehenderit.
//           </small>
//         </article>{" "}
//         <article className="testimonial">
//           <div className="client__avatar">
//             <img src={AVTR1} alt="Avatar one" />
//           </div>
//           <h5 className="client__name">Ernest Achiever</h5>
//           <small className="client__review">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
//             quam ea eum unde voluptatum mollitia, nostrum beatae quasi tempora
//             praesentium ipsum, repellendus ipsam ut quidem eius, consequuntur
//             quo? Sapiente, reprehenderit.
//           </small>
//         </article>{" "}
//         <article className="testimonial">
//           <div className="client__avatar">
//             <img src={AVTR1} alt="Avatar one" />
//           </div>
//           <h5 className="client__name">Ernest Achiever</h5>
//           <small className="client__review">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
//             quam ea eum unde voluptatum mollitia, nostrum beatae quasi tempora
//             praesentium ipsum, repellendus ipsam ut quidem eius, consequuntur
//             quo? Sapiente, reprehenderit.
//           </small>
//         </article>{" "}
//         <article className="testimonial">
//           <div className="client__avatar">
//             <img src={AVTR1} alt="Avatar one" />
//           </div>
//           <h5 className="client__name">Ernest Achiever</h5>
//           <small className="client__review">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
//             quam ea eum unde voluptatum mollitia, nostrum beatae quasi tempora
//             praesentium ipsum, repellendus ipsam ut quidem eius, consequuntur
//             quo? Sapiente, reprehenderit.
//           </small>
//         </article>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;

// import React from "react";
// import "./testimonials.css";
// import AVTR1 from "../../assets/avatar1.jpg";
// import AVTR2 from "../../assets/avatar2.jpg";
// import AVTR3 from "../../assets/avatar3.jpg";
// import AVTR4 from "../../assets/avatar4.jpg";

// const data = [
//   {
//     avatar: AVTR1,
//     name: "Tina Snow",
//     review:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolore aperiam id quam asperiores laudantium nesciunt ut quidem eos illo unde velit fuga error totam eveniet, dolorem, adipisci deleniti omnis?",
//   },
//   {
//     avatar: AVTR2,
//     name: "Shatta Wale",
//     review:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolore aperiam id quam asperiores laudantium nesciunt ut quidem eos illo unde velit fuga error totam eveniet, dolorem, adipisci deleniti omnis?",
//   },
//   {
//     avatar: AVTR3,
//     name: "Kwame Despite",
//     review:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolore aperiam id quam asperiores laudantium nesciunt ut quidem eos illo unde velit fuga error totam eveniet, dolorem, adipisci deleniti omnis?",
//   },
//   {
//     avatar: AVTR4,
//     name: "Nana Ama McBrown",
//     review:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolore aperiam id quam asperiores laudantium nesciunt ut quidem eos illo unde velit fuga error totam eveniet, dolorem, adipisci deleniti omnis?",
//   },
// ];

// const Testimonials = () => {
//   return (
//     <section id="testimonials">
//       <h5>Review from clients</h5>
//       <h2>Testimonials</h2>

//       <div className="container testimonials__container">
//         {
//           data.map(({avatar, name, review}, index) => {
//             return(
//               <article key={index} className="testimonial">
//           <div className="client__avatar">
//             <img src={avatar} alt="Avatar one" />
//           </div>
//           <h5 className="client__name">{name}</h5>
//           <small className="client__review">{review}</small>
//         </article>
        
//             )
//           })
//         }
//       </div>
//     </section>
//   );
// };

// export default Testimonials;

import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import {  Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolore aperiam id quam asperiores laudantium nesciunt ut quidem eos illo unde velit fuga error totam eveniet, dolorem, adipisci deleniti omnis?",
  },
  {
    avatar: AVTR2,
    name: "Shatta Wale",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolore aperiam id quam asperiores laudantium nesciunt ut quidem eos illo unde velit fuga error totam eveniet, dolorem, adipisci deleniti omnis?",
  },
  {
    avatar: AVTR3,
    name: "Kwame Despite",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolore aperiam id quam asperiores laudantium nesciunt ut quidem eos illo unde velit fuga error totam eveniet, dolorem, adipisci deleniti omnis?",
  },
  {
    avatar: AVTR4,
    name: "Nana Ama McBrown",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolore aperiam id quam asperiores laudantium nesciunt ut quidem eos illo unde velit fuga error totam eveniet, dolorem, adipisci deleniti omnis?",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container" // install Swiper modules
        modules={[ Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        
        pagination={{ clickable: true }}
        >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar one" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
