import './App.css'; 
import Dev from "./assets/img/Developer.svg"
import React from 'react'

export default function DetailsCard() {
  return (
    <>
      <details className="card">
    <summary>
    <h2>Muhammad Luthfi</h2>
    <h3>Summary About Me(Click Here)</h3>
    <div className="crop">
        <img
        src={Dev}
        alt=""
        className="jupiter"
        />
    </div>
    </summary>
    <p>
        Experienced UI/UX Designer Web Develover and Software Engineer with a strong background in creating intuitive and delightful user experiences. I have expertise in industry-standard design tools such as, Figma, and I am skilled in translating design concepts into interactive prototypes using tools like InVision. I have experience working with design systems like framework Fronend,Next JS, React JS, Material-UI, Bootstrap, Tailwind CSS, enabling me to efficiently build visually appealing and user-friendly interfaces. Team Leader and Administrator with a strong background in video production, copywriting, networking, video editing, videography, photography, and user experience design (UED). Skilled in administration and quality control, with proficiency in computer hardware, quality management, and MikroTik networking.
    </p>
    <p>
        In my role as a Team Leader at Youth Studio, I have successfully led a remote team for the past 4 years and 3 months. I have demonstrated expertise in all aspects of video production, from ideation to post-production editing. With strong attention to detail and a creative mindset, I have consistently delivered high-quality results and contributed to the success of various projects.
    </p>
    <p>
        Prior to that, I worked as a Quality Control Engineer at PT. Winda Computer, where I specialized in computer hardware, quality management, and quality control. Through my attention to detail and commitment to excellence, I ensured the delivery of reliable and top-notch products.
    </p>
    <p>
    To further enhance my skills and knowledge, I have pursued professional development opportunities. I have completed CS50's Introduction to Computer Science from Harvard University, where I gained proficiency in Scratch, ASCII, and the fundamentals of computer science. Additionally, I have obtained certifications including Cisco Certified Network Associate Industrial (CCNA) and MikroTik (MTCNA), solidifying my expertise in networking and MikroTik systems.
    </p>
    <p>
    Driven by a passion for continuous learning, I am currently pursuing CS50's Python and Javascript program at Harvard University to expand my programming skills and stay updated with the latest industry practices.
    </p>
    <p>
    With a strong work ethic, excellent communication skills, and the ability to adapt to diverse teams and environments, I am committed to delivering exceptional results and driving positive outcomes. I am eager to leverage my skills and experience to contribute to exciting projects and collaborate with like-minded professionals. Let's connect and explore potential opportunities!
    </p>
    </details>
    </>
  )
}