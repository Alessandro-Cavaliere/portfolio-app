import { useRef } from "react";
import "./projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import zkpoex from "../../assets/projects/zkp.jpeg";
import pentest from "../../assets/projects/pentest.png";
import acmlogo from "../../assets/projects/acm.png"

/*//////////////////////////////////////////////////////////////
                         PROJECT OBJECTS
//////////////////////////////////////////////////////////////*/
const items = [
  {
    id: 1,
    title: "Zero-Knowledge of Exploit",
    img: zkpoex,
    desc: "My MSc thesis project: a Rust-based toolkit using Zero-Knowledge Proofs to prove Ethereum smart contract exploits without revealing details. Whitehat hackers submit cryptographic proofs for on-chain verification and automatic bounty payouts. It can be integrated into BugBounty platforms for seamless verification-to-payout workflows. I also wrote a scientific paper on this, peer-reviewed and accepted for the ACM SAC 2026 conference (March 23-27, 2026).",
    link: "https://github.com/ziemen4/zkpoex/",
    paper: "https://doi.org/10.1145/3748522.3779811"
  },
  {
    id: 2,
    title: "Modbus2Chain",
    img: "https://raw.githubusercontent.com/Alessandro-Cavaliere/Modbus2Chain/MC_BE_BC/app/assets/LogoProgetto.png",
    desc: "Combined project of the courses: IoT Security & Data Security, in the first year of the master's degree course in CyberSecurity. Modbus2Chain is an IoT project that uses the Modbus TCP protocol to acquire environmental data (hypothetical critical data) from sensors and send it securely to the blockchain via a TCP connection. This project was developed for both the Ethereum blockchain and HyperledgerFabric.",
    link: "https://github.com/Alessandro-Cavaliere/Modbus2ChainETH"
  },
  {
    id: 3,
    title: "bytethecookies-nfts",
    img: "https://raw.githubusercontent.com/Alessandro-Cavaliere/bytethecookies-nfts/main/assets/readmeImages/copertina.png",
    desc: "NFT collection for my CTF ByteTheCookies team. This project is an NFT project for the CTF group I am a part of. The goal is to create and (why not) trade non-fungible tokens (NFTs) within the group. Made for the meme ◕⩊◕",
    link: "https://github.com/Alessandro-Cavaliere/bytethecookies-nfts"
  },
  {
    id: 4,
    title: "FVAB_EmotionGait",
    img: "https://raw.githubusercontent.com/Alessandro-Cavaliere/FVAB_EmotionGait/main/readmePhotos/EmotionGait.png",
    desc: "Project for the exam of Fundamentals of Computer Vision and Biometrics in the first year of the master's degree in CyberSecurity. This project is an exploration of the use of Long Short-Term Memory (LSTM) networks for emotion recognition. The goal is to classify emotions based on video data, particularly focusing on poses and the way people in the videos move. The emotions we are trying to classify include happiness, sadness, anger, and neutral.",
    link: "https://github.com/Alessandro-Cavaliere/FVAB_EmotionGait"
  },
  {
    id: 5,
    title: "PT-Vulnerable-VM",
    img: pentest,
    desc: "Project for the exam of Penetration Testing & Ethical Hacking in the second year of the master's degree in CyberSecurity. The project consists of a Virtual Machine (VM), intentionally vulnerable (vulnerable by design), aimed at testing and improving users' cybersecurity skills. Given that penetration testing is a discipline requiring practical abilities, this VM offers a safe, practical platform to learn, test, and enhance cybersecurity skills while preparing users for real-world attack and defense scenarios.",
    link: "https://github.com/Alessandro-Cavaliere/PT-Vulnerable-VM"
  },
  {
    id: 6,
    title: "Decentralized Exchange - DEFI - Thesis Work",
    img: "https://repository-images.githubusercontent.com/597495554/f386a040-fe82-4a29-a5e9-b49da3c54c93",
    desc: "Decentralized Exchange (DEX) developed and structured on the Ethereum test network for the degree thesis project (Use of React for the creation of DeFi applications and interaction with smart-contracts in Solidity).",
    link: "https://github.com/Alessandro-Cavaliere/exchange-prototype-thesis-work"
  },
  {
    id: 7,
    title: "UnisaEAT",
    img: "https://raw.githubusercontent.com/UnisaEAT/UnisaEAT_ProjectFE/produzione/src/views/assets/logoUnisaEAT.png",
    desc: "The system created has the aim of simplifying and speeding up the functions of the UNISA canteen service, making them easier both for those who work there and for those who use them. Our goal was to create a system that allows for maximum automation as regards the entire management of the canteen card and meals. We want to speed up communication between the customer and ADISU staff, optimize the method of purchasing meals, facilitate the tasks of the canteen operator in the distribution of meals and facilitate the management functions of the entire service.",
    link: "https://github.com/UnisaEAT"
  }
];


/*//////////////////////////////////////////////////////////////
                         ITEM INTERFACE
//////////////////////////////////////////////////////////////*/
interface Item {
  paper?: string;
  link?: string;
  id: number;
  title: string;
  img: string;
  desc: string;
}

/**
 * Single component is used to render a single project
 * @param item - item object to render 
 * @returns JSX.Element of the Single component
 */
const Single = ({ item }: { item: Item }) => {

  /*//////////////////////////////////////////////////////////////
                         STATE DECLARATIONS
  //////////////////////////////////////////////////////////////*/
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  /*//////////////////////////////////////////////////////////////
                             RETURN
  //////////////////////////////////////////////////////////////*/
return (
    <section>
        <div className="container">
            <div className="wrapper">
                <div className="imageContainer" ref={ref}>
                    <img src={item.img} alt=""/>
                </div>
                <motion.div className="textContainer" style={{ y }}>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <div className="divButtonsProject">
                    {item.link && (
                      <button className="buttonLink" onClick={() => window.open(item.link, "_blank")}>Open Project</button>
                    )}
                    {item.title == "Zero-Knowledge of Exploit" && (
                      <>
                        <button className="buttonLink" onClick={() => window.open(item.paper, "_blank")} style={window.innerWidth > 1024 ? { marginLeft: 20 } : {}}>Paper</button>
                        <img 
                          src={acmlogo} 
                          alt="ACM SAC 2026"
                          className="acm"
                        />
                      </>
                    )}
                  </div>
                </motion.div>
            </div>
        </div>
    </section>
);
};

/**
 * Projects.tsx component -> renders the projects section of the application
 * @returns JSX.Element of the Projects component
 */
const Projects = () => {
  /*//////////////////////////////////////////////////////////////
                         STATE DECLARATIONS
  //////////////////////////////////////////////////////////////*/  
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  /*//////////////////////////////////////////////////////////////
                             RETURN
  //////////////////////////////////////////////////////////////*/
  return (
    <div className="projects" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Projects;
