import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import  '../../styles/about.css'


function AboutUs() {
  return (
    <>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous"/>
      <div className="encloser1">
      <Navbar/>
      <div className="encloser2"> <div className="heading"> About The Astronomy Club...</div></div>
       
      </div>
      <div className="vision">
      
      <div className="card" style={{
        border:"none",
        borderRadius:"0px"
      }}>
  <h5 className="card-header" id="header1">Our Vision</h5>
  <div className="card-body" id="body1">
    {/* <h5 className="card-title">Special title treatment</h5> */}
    <p className="card-text" >The Astronomy Club at IIT Indore is a dynamic community passionate about exploring the cosmos. Established to nurture interest in astronomy and space science, the club offers a platform for both beginners and enthusiasts to engage with celestial phenomena. Through stargazing sessions, workshops, guest lectures, and hands-on projects, members gain practical knowledge and observational skills. The club provides access to telescopes and other astronomical equipment, allowing participants to observe constellations, planets, and deep-sky objects. Collaborations with experts and organizations enrich the learning experience, offering unique insights and research opportunities. Whether you're an aspiring astronomer or simply curious about the universe, the Astronomy Club at IIT Indore invites you to join and discover the wonders of the night sky..</p>
    
  </div>
</div>
      </div>
      <div className="messagetitle" style={
        {
          border:"none"
        }
      }>
      <div className="card" style={{
        
        borderRadius:"0px",
        
        border:"none",
        
      }}>
  <h5 className="card-header" id="header1" style={
    {
      marginTop:"10px",
      border:"none",
      
    }
  }>Message from the Club Head</h5>
  
    
  </div>
      </div>
       <div className="message">
        
        <div className="photo"><img className="image1" src="https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1716681600&semt=sph"  alt="..."/></div>
        <div className="content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum explicabo odio, sit sapiente maiores earum placeat ex tempora natus. Molestiae iusto consectetur voluptatibus ex modi facere corporis accusantium voluptas dicta, id vel suscipit hic qui omnis officia. Est nihil libero accusantium consectetur temporibus vel porro saepe neque! Optio voluptatum ut inventore vero obcaecati, dolorem laudantium atque, eveniet quidem, saepe corrupti? Consequatur fugiat pariatur totam, nesciunt in impedit odit quod cupiditate cumque hic delectus explicabo et labore! Quibusdam quod voluptate optio tenetur expedita modi, in ipsum dolor odit, et temporibus facilis maxime dolores quas deleniti dolore dolorum reiciendis accusamus, ex sapiente nisi veniam. Earum, odio modi animi molestiae, eius quo quibusdam, temporibus cupiditate facere obcaecati corrupti amet expedita numquam accusamus repellat.</div>
        
       </div>
    </>
  );
}

export default AboutUs;
