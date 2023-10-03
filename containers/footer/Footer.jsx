import "./footer.css";
import { footerdoc } from "@/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-link">
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
          <li>
            <a href="#">Feedback</a>
          </li>
          <li>
            <a href="#">T&C</a>
          </li>
        </ul>
      </div>
      <div>
        <div className="follow-link">
          <span>Follow US</span>
          <div>
            <a href="#">
              <i className="fab fa-whatsapp icon"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter-square icon"></i>
            </a>
            <a href="#">
              <i className="fab fa-facebook icon"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram icon"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin icon"></i>
            </a>
          </div>
        </div>
        <div>
          <Image src={footerdoc} alt="footerdoc" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
