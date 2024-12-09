import React from "react";
import "./style/index.scss";
import partners from "./imges/partners.svg";
import { GoLocation } from "react-icons/go";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";
import facebook from "./imges/Facebook.svg";
import instgaram from "./imges/Instagram.svg";
import twitter from "./imges/twitter.svg";
import youtube from "./imges/Youtube.svg";
import chat from "./imges/online chat.svg";
import copy from "./imges/copyright.svg";
// _______________________Accordion__________________________--
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-top-left">
              <div className="footer-links">
                <div className="link-top">
                  <h5>Company</h5>
                  <a href="">about us</a>
                  <a href="">blog</a>
                  <a href="">returns</a>
                  <a href="">order status </a>
                </div>
              </div>
              <div className="footer-links">
                <div className="link-top">
                  <h5>Info</h5>
                  <a href="">How it works?</a>
                  <a href="">our promises</a>
                  <a href="">FAQ </a>
                </div>
              </div>

              <div className="footer-links">
                <div className="link-top">
                  <h5>Contact us</h5>
                  <a href="">
                    <GoLocation /> 123 Main Street, Anytown,USA
                  </a>
                  <a href="">
                    <FaPhoneVolume /> +1 (555) 123-4567
                  </a>
                  <a href="">
                    <MdOutlineAttachEmail /> TechHeimSupport@gmail.com
                  </a>
                </div>
              </div>


            </div>
            
              {/* Footer accordion  */}
              <div className="responsive-footer">
                <Accordion sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography sx={{color:"white"}}>Company</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                  <div className="footer-links">
                <div className="link-top">
                  <a href="">about us</a>
                  <a href="">blog</a>
                  <a href="">returns</a>
                  <a href="">order status </a>
                </div>
              </div>
                  </AccordionDetails>
                </Accordion>
                <Accordion  sx={{width:'100%', backgroundColor: "transparent", boxShadow: "none"    }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography sx={{color:"white"}}>Info</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                  <div className="link-top">
                  <a href="">How it works?</a>
                  <a href="">our promises</a>
                  <a href="">FAQ </a>
                </div>
                  </AccordionDetails>
                </Accordion>
                <Accordion  sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                  >
                    <Typography sx={{color:"white"}}>Contact us</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                  <div className="link-top2">
                  <a href="">
                    <GoLocation /> 123 Main Street, Anytown,USA
                  </a>
                  <a href="">
                    <FaPhoneVolume /> +1 (555) 123-4567
                  </a>
                  <a href="">
                    <MdOutlineAttachEmail /> TechHeimSupport@gmail.com
                  </a>
                </div>
                  </AccordionDetails>
                </Accordion>
          
              </div>
            <div className="footer-top-right">
              <div className="email">
                <a href="#">Sign up for News and updates</a>
                <form action="">
                  <FaRegUser className="userIcon" />
                  <input type="text" placeholder="E-mail Address" />
                  <FaAngleRight className="rightarrow" />
                </form>
                <div className="icons-link">
                  <button>
                    <img src={facebook} alt="" />
                  </button>
                  <button>
                    <img src={instgaram} alt="" />
                  </button>
                  <button>
                    <img src={youtube} alt="" />
                  </button>
                  <button>
                    <img src={twitter} alt="" />
                  </button>
                </div>
              </div>
              <img className="chat" src={chat} alt="" />
            </div>
          </div>
          <div className="footer-center">
            <img src={partners} alt="partners" />
          </div>
          <div className="footer-bottom">
            <p>
              <img src={copy} alt="" /> 2023 Tech Heim.{" "}
            </p>
            <div className="footer-bottom-right">
              <a href="">cookie settings</a>
              <a href="">Privacy Policy</a>
              <a href="">Terms and Conditions </a>
              <a href="">Imprint </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
