import "./TeamComponent.scss";
import ctfteamvideo from "../../assets/ctfteam/ctfteam.mp4";
import cookie from "../../assets/ctfteam/cookie.svg";

/**
 * TeamComponent.tsx component -> renders the TeamComponent effect on the screen
 * @param type - type of TeamComponent effect
 * @returns JSX.Element of the TeamComponent component
 */
const TeamComponent = () => {
  /*//////////////////////////////////////////////////////////////
                             RETURN
  //////////////////////////////////////////////////////////////*/
  return (
    <div className="team-container">
      <h1 className="team-h1">Meet my Team</h1>
      <p className="team-p"> <strong style={{color:"orange"}}>ByteTheCookies (BTC)</strong> is a passionate CTF team formed by students from the University of Salerno after participating in the CyberChallengeIT 2024. 
        Our mission is to push the boundaries of our skills and knowledge in the ever-evolving field of IT security. 
        We thrive on solving complex challenges, learning from each other, and staying ahead of the curve in cybersecurity. 
        Whether it’s cryptography, reverse engineering, web exploitation, or any other domain, we are committed to continuous growth and excellence.</p>
      
      <div className="team-gif-container">
      <img className="team-img" src={cookie} alt="ByteTheCookies logo"/>
      
      <video
        className="team-gif"
        src={ctfteamvideo}
        autoPlay
        loop
        muted
        playsInline
      />
      </div>
      <button className="team-button" onClick={() => window.open("https://bytethecookies.github.io/", "_blank")}>View ByteTheCookies Website</button>
    </div>
  );
};

export default TeamComponent;
