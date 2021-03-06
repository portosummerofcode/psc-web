import env from "config/environment";

const sponsorDoist        = `${env.assetHost}/images/sponsor-doist.svg`;
const sponsorLoM          = `${env.assetHost}/images/sponsor-lom.svg`;
const sponsorAbyssal      = `${env.assetHost}/images/sponsor-abyssal.svg`;
const sponsorBlip         = `${env.assetHost}/images/sponsor-blip.svg`;
const sponsorTMC          = `${env.assetHost}/images/sponsor-tmc.svg`;
const sponsorHostelWorld  = `${env.assetHost}/images/sponsor-hostel-world.svg`;
const sponsorJumia        = `${env.assetHost}/images/sponsor-jumia.svg`;
const sponsorByside       = `${env.assetHost}/images/sponsor-byside.svg`;
const sponsorHapibot      = `${env.assetHost}/images/sponsor-hapibot.svg`;
const sponsorCMP          = `${env.assetHost}/images/sponsor-cmp.svg`;
const sponsorAlientech    = `${env.assetHost}/images/sponsor-alientech.svg`;
const sponsorScaleUpPorto = `${env.assetHost}/images/sponsor-scale-up-porto.svg`;
const sponsorFEUP         = `${env.assetHost}/images/sponsor-feup.svg`;

export default [
  [
    // gold
    { src: sponsorDoist , url: "https://doist.com/"     , className: "doist" , description: "Doist is a remote-first company with employees from all around the world. Our mission is to help people do more and stress less.<br /><br />Our interests and hobbies are as varied as our nationalities– and creating amazing products for people like you is what brings us all together." },
    { src: sponsorLoM   , url: "https://lifeonmars.pt/" , className: "lom"   , description: "Life on Mars is an elite software consultancy based in Germany and Portugal.<br />Community support is very important to us, and we are proud to spend a significant portion of our time and revenue supporting and organizing events such as this one.<br />We also like ventures, and currently run two startups: Azelo (collectible art) and Fractal (blockchain tech)." },
  ],

  [
    // silver
    { src: sponsorAbyssal     , url: "https://abyssal.eu/home/"        , className: "abyssal"      , description: "Abyssal develops integrated Subsea Navigation Solutions for Remotely Operated Vehicles (ROVs) in the Oil & Gas, Marine Renewables and Underwater Mining industries.<br /><br />Our aim is to enable offshore and onshore O&G personnel to obtain relevant and accurate real-time information and to perform safer and more efficient ROV Operations thus decreasing the likelihood of incidents, accidents and associated costs." },
    { src: sponsorBlip        , url: "https://blip.pt/"                , className: "blip"         , description: "Blip was founded in 2009 and in 2012 became part of a Group with Headquarters in London called Betfair. In February 2016 Paddy Power and Betfair merged and created a group that is on track to become the largest in the Online Sports Betting and Gaming Industry. We are in the API Billionaire’s club alongside Twitter, Facebook, eBay and Google, more than 2.5Bn API calls being served every second of every day throughout the year. Blip is growing to become the best place to work in Porto and we are already 300 Blippers!" },
    { src: sponsorTMC         , url: "https://tmc-employeneurship.com" , className: "tmc"          , description: "WE ARE A SPECIAL BREED OF ENGINEERS<br/><br />We combine the security of a permanent contract with the excitement of entrepreneurship. We believe that this way of working puts us in the unique position to add value for ourselves, the businesses we work for, and our field.<br /><br /> AT TMC WE CALL THIS EMPLOYENEURSHIP" },
    { src: sponsorHostelWorld , url: "https://www.hostelworld.com/"    , className: "hostel-world" , description: null },
  ],

  [
    // bronze
    { src: sponsorByside  , url: "http://www.byside.com/"   , className: "byside"  , description: "BySide is a Lead Activation Company that dynamically combines information on customer behaviour and allows cross-channel marketing automation, real-time personalization, creating an integrated customer user experience and a seamless connection between offline and online." },
    { src: sponsorHapibot , url: "https://www.hapibot.com/" , className: "hapibot" , description: null },

    // copper
    { src: sponsorJumia, url: "https://group.jumia.com/", className: "jumia", description: null },
  ],

  // partners
  [
    { src: sponsorScaleUpPorto , url: "http://scaleupporto.pt/"                        , className: "scale-up"  , description: null },
    { src: sponsorFEUP         , url: "https://sigarra.up.pt/feup/pt/web_page.inicial" , className: "feup"      , description: null },
    { src: sponsorAlientech    , url: "https://www.alientech.pt/"                      , className: "alientech" , description: null },
    { src: sponsorCMP          , url: "http://www.cm-porto.pt/"                        , className: "cmp"       , description: null },
  ],
];



