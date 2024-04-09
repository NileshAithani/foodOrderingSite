import { Link } from "react-router-dom";
import my from "../Image/Nilesh.jpeg";

const About = () => {
  return (
    <div className="container mx-auto">
      <div className="py-8">
        <h1 className="text-3xl font-bold">About Me</h1>
        <h3 className="text-xl font-semibold">My Introduction</h3>
      </div>
      <div className="flex flex-col md:flex-row items-center">
        <img src={my} alt="MyImage" className="rounded-full w-64 h-64 object-cover mx-auto md:mr-8" />
        <div className="text-lg mt-4 md:mt-0">
          <p>
            Hey there,👋 I'm Nilesh, a 24-year-old Post-undergrad who is passionate
            about Software Development, UI/UX Design, and Product Management.
            Currently, I'm pursuing my career as a Full Stack Web Developer 👨🏻‍💻
            with 1 year of professional and freelance experience. I share my
            learnings through speaking engagements and write-ups. ✍🏻
          </p>
          <a
            href="https://drive.google.com/file/d/10P8yDp7h1ieHtDkGXZzxY0X1Bea3ZOKj/view?pli=1"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;


















// import { Link } from "react-router-dom";
// import my from "../Image/Nilesh.jpeg";

// const About = () => {
//   return (
//     <div className="container mx-auto">
//       <div className="py-8">
//         <h1 className="text-3xl font-bold">About Me</h1>
//         <h3 className="text-xl font-semibold">My Introduction</h3>
//       </div>
//       <div className="flex flex-col md:flex-row items-center">
//         <img src={my} alt="MyImage" className="rounded-full w-64 h-64 object-cover mx-auto md:mr-8" />
//         <div className="text-lg mt-4 md:mt-0">
//           <p>
//             Hey there,👋 I'm Nilesh, a 24-year-old Post-undergrad who is passionate
//             about Software Development, UI/UX Design, and Product Management.
//             Currently, I'm pursuing my career as a Full Stack Web Developer 👨🏻‍💻
//             with 1 year of professional and freelance experience. I share my
//             learnings through speaking engagements and write-ups. ✍🏻
//           </p>
//           <a
//             href="https://drive.google.com/file/d/10P8yDp7h1ieHtDkGXZzxY0X1Bea3ZOKj/view?pli=1"
//             download
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-block mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
//           >
//             Resume
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

