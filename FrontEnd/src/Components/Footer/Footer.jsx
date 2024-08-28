import React from "react";
import classes from "./Footer.module.css";
import Evangadifoot from "../../images/evangadi-logo-footer-f73bca57.png";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <div className={classes.mainFooter}>
      <div className={classes.footerContainer}>
        <div className={classes.mediaSection}>
          <div className={classes.footerLogo}>
            <img src={Evangadifoot} alt="" />
          </div>
          <div className={classes.socialIcons}>
            <ul>
              <li>
                <FacebookOutlinedIcon sx={{ color: "white", fontSize: 35 }} />
              </li>
              <li>
                <InstagramIcon sx={{ color: "white", fontSize: 35 }} />
              </li>
              <li>
                <YouTubeIcon sx={{ color: "white", fontSize: 35 }} />
              </li>
            </ul>
          </div>
        </div>
        <div className={classes.usefulLinks}>
          <h3>Useful Link</h3>
          <ul>
            <li>
              <Link>How it works</Link>
            </li>
            <li>
              <Link>Terms of Service</Link>
            </li>
            <li>
              <Link>Privacy policy</Link>
            </li>
          </ul>
        </div>
        <div className={classes.contactInfo}>
          <h3>Contact Info</h3>
          <p>Evangadi Networks</p>
          <p>Support@evangadi.com</p>
          <p>+1-202-386-2702</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
