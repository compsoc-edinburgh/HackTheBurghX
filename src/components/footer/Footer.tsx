import React from 'react';
import './Footer.scss';

const Footer: React.FC = () => {

    const platinumSponsors = [
        {
            name: "Marshall Wace",
            img: "/sponsors/marshall-wace.svg",
            link: "https://www.mwam.com/"
        },
    ]

    const goldSponsors = [
        {
            name: "Optiver",
            img: "/sponsors/optiver.png",
            link: "https://optiver.com/"
        },
        
    ]

    const silverSponsors = [
        {
            name: "Addepar",
            img: "/sponsors/addepar.png",
            link: "https://addepar.com/"
        },
    ]

    const partners = [
        {
            name: "Compsoc",
            img: "/sponsors/compsoc.png",
            link: "https://comp-soc.com/"
        },
        {
            name: "MLH",
            img: "/sponsors/mlh.png",
            link: "https://mlh.io/"
        },
        {
            name: "Hackathons UK",
            img: "/sponsors/hackathonUK.png",
            link: "https://www.hackathons.org.uk/"
        }
    ]

   
    return (
       <footer>
         <div className="scrollContainer">
         <div className="icon-container platinum">
              <div className="heading">PLATINUM</div>
              {
                    platinumSponsors.map((sponsor, index) => {
                        return (
                            <a href={sponsor.link} target="_blank" key={index}>
                                <img src={sponsor.img} alt={sponsor.name} />
                            </a>
                        )
                    })
                    
              }
        </div>
        <div className="icon-container gold">
            <div className="heading">GOLD</div>
              {
                    goldSponsors.map((sponsor, index) => {
                        return (
                            <a href={sponsor.link} target="_blank" key={index}>
                                <img src={sponsor.img} alt={sponsor.name} />
                            </a>
                        )
                    })
                    
              }
        </div>
        <div className="icon-container silver">
            <div className="heading">SILVER</div>
              {
                    silverSponsors.map((sponsor, index) => {
                        return (
                            <a href={sponsor.link} target="_blank" key={index}>
                                <img src={sponsor.img} alt={sponsor.name} />
                            </a>
                        )
                    })
                    
              }
        </div>
        <div className="icon-container partners">
            <div className="heading">PARTNERS</div>
              {
                    partners.map((sponsor, index) => {
                        return (
                            <a href={sponsor.link} target="_blank" key={index}>
                                <img src={sponsor.img} alt={sponsor.name} />
                            </a>
                        )
                    })
                    
              }
        </div>
        </div>
        <div className="scrollContainer second">
         <div className="icon-container platinum">
              <div className="heading">PLATINUM</div>
              {
                    platinumSponsors.map((sponsor, index) => {
                        return (
                            <a href={sponsor.link} target="_blank" key={index}>
                                <img src={sponsor.img} alt={sponsor.name} />
                            </a>
                        )
                    })
                    
              }
        </div>
        <div className="icon-container gold">
            <div className="heading">GOLD</div>
              {
                    goldSponsors.map((sponsor, index) => {
                        return (
                            <a href={sponsor.link} target="_blank" key={index}>
                                <img src={sponsor.img} alt={sponsor.name} />
                            </a>
                        )
                    })
                    
              }
        </div>
        <div className="icon-container silver">
            <div className="heading">SILVER</div>
              {
                    silverSponsors.map((sponsor, index) => {
                        return (
                            <a href={sponsor.link} target="_blank" key={index}>
                                <img src={sponsor.img} alt={sponsor.name} />
                            </a>
                        )
                    })
                    
              }
        </div>
        <div className="icon-container partners">
            <div className="heading">PARTNERS</div>
              {
                    partners.map((sponsor, index) => {
                        return (
                            <a href={sponsor.link} target="_blank" key={index}>
                                <img src={sponsor.img} alt={sponsor.name} />
                            </a>
                        )
                    })
                    
              }
        </div>
        </div>
       </footer>
    );
};

export default Footer;
