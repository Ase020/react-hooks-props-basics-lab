import Links from "./Links";

function About({ github, linkedin, bio }) {
   return (
      <div id="about">
         <h2>About Me</h2>
         {bio && <p>{bio}</p>}
         <img src={"https://i.imgur.com/mV8PQxj.gif"} alt={bio} />

         <Links github={github} linkedin={linkedin} />
      </div>
   );
}

export default About;
