import React from "react";
import "./style.css";
import jaquar from "./assets/jaquar.jpg";
import audi from "./assets/audi.jpg";
import bmw from "./assets/BMW.jpg";
import cola from "./assets/cola.jpg";
import lambo from "./assets/lambo.jpg";
import phone from "./assets/phone.png";
import contact from "./assets/contact.png";
import mail from "./assets/mail.png";
import address from "./assets/address.png";
import facebook from "./assets/facebook.png";
import instagram from "./assets/instagram.png";
import linkedin from "./assets/linkedin.png";
import twitter from "./assets/twitter.png";

export default function () {
  return (
    <div>
      <div>
        <footer>
          <div class="footer-container">
            <div class="footer-logo">
              <div className="flex justify-center gap-4 mt-2">
                <img
                  src="https://media.istockphoto.com/id/1153172622/photo/vacation-travel-planning-concept-with-map-overhead-view-of-equipment-for-travelers-travel.jpg?s=1024x1024&w=is&k=20&c=AtKof-VaXW5xgsZjwF78jwQZ59XB5ogu5TiRKIdPqXE="
                  alt="Trip Planner"
                />
                <p>Effortless Trip Planning</p>
              </div>

              <div className="flex justify-center gap-4 mt-2">
                <img
                  src="https://media.istockphoto.com/id/535165175/photo/best-travel-offers-sign-with-a-forest-background.jpg?s=1024x1024&w=is&k=20&c=RzNbeduS1uliIiud99ViMi_jOiy0-lz-Uy1D5ZLK2ns="
                  alt="Travel Deals Finder"
                />
                <p>Find the Best Travel Deals</p>
              </div>

              <div className="flex justify-center gap-4 mt-2">
                <img
                  src="https://cdn.pixabay.com/photo/2017/01/31/19/22/business-2026646_1280.png"
                  alt="Real-Time Travel Updates"
                />
                <p>Stay Updated with Real-Time Alerts</p>
              </div>

              <div className="flex justify-center gap-4 mt-2">
                <img
                  className="rounded-md"
                  src="https://cdn.pixabay.com/photo/2024/03/08/17/13/passport-8621284_1280.png"
                  alt="Personalized Travel Dashboard"
                />
                <p>All Travel Information in One Place</p>
              </div>

              <div className="flex justify-center gap-4 mt-2">
                <img
                  src="https://cdn.pixabay.com/photo/2022/04/08/22/01/diversity-7120387_1280.png"
                  alt="Travel Community Forum"
                />
                <p>Connect with Fellow Travelers</p>
              </div>
            </div>
            <div class="footer-section ">
              <h4 className="ml-20">Help and Support</h4>
              <ul>
                <div className="flex justify-center mt-4">
                  <img className="h-12 w-10" src={contact} alt="" />
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </div>
                <div className="flex justify-center mt-4">
                  <img className="h-12 w-10" src={mail} alt="" />
                  <li>
                    <a href="#">Email</a>
                  </li>
                </div>
                <div className="flex justify-center mt-4">
                  <img className="h-12 w-10" src={phone} alt="" />
                  <li>
                    <a href="#">Phone</a>
                  </li>
                </div>
                <div className="flex justify-center mt-4">
                  <img className="h-12 w-10" src={address} alt="" />
                  <li>
                    <a href="#" className="mt-4">
                      Location
                    </a>
                  </li>
                </div>
              </ul>
            </div>
            <div class="footer-section">
              <h4 className="text-2xl text-red-400">Legal</h4>
              <ul>
                <li>
                  <a href="#">Privacy policy</a>
                </li>
                <li>
                  <a href="#">Terms and conditions</a>
                </li>
                <li>
                  <a href="#">Subscription terms</a>
                </li>
                <li>
                  <a href="#">Do Not Sell or Share My Personal Information</a>
                </li>
                <li>
                  <a href="#">Notice at collection</a>
                </li>
              </ul>
            </div>
            <div class="footer-section">
              <h4>Offices</h4>
              <p>AITR, Indore , Madhya Pradesh , [INDIA]</p>
              <p> At all time available for your service</p>
            </div>
            <div class="social-icons">
              <div className="flex justify-center mt-4">
                <img className="h-12 w-10" src={linkedin} alt="" />
                <li>
                  <a href="#">linkedIN</a>
                </li>
              </div>
              <div className="flex justify-center mt-4">
                <img className="h-12 w-10" src={facebook} alt="" />
                <li>
                  <a href="#">faceBook</a>
                </li>
              </div>
              <div className="flex justify-center mt-4">
                <img className="h-12 w-10" src={instagram} alt="" />
                <li>
                  <a href="#" className="mt-4">
                    Instagram
                  </a>
                </li>
              </div>
              <div className="flex justify-center mt-4">
                <img
                  className="h-12 w-10"
                  src="data:image/png;base64,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"
                  alt=""
                />
                <li>
                  <a href="#" className="mt-4">
                    Twitter
                  </a>
                </li>
              </div>
            </div>
          </div>
          <div class="footer-bottom flex items-center ml-96">
            <p>
              &copy; 2024 TravelAura  Inc. All Rights Reserved. Made with Love By
              StellarSync5.O
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}