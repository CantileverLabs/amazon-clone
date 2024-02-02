import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidenav" id="mySidenav">
      <div className="sidenavHeader">
        <i className="fas fa-user-circle" /> Hello, Sign In
      </div>
      {/*Below SideNavHeader*/}
      <div id="main-container">
        <div className="sidenavContentHeader">Trending</div>
        <a href="#">
          <div className="sidenavContent">Best Sellers</div>
        </a>
        <a href="#">
          <div className="sidenavContent">New Releases</div>
        </a>
        <a href="#">
          <div className="sidenavContent">Movers and Shakers</div>
        </a>
        <hr />
        <div className="sidenavContentHeader">Digital Content And Devices</div>
        <a href="#" onClick="openPrimeVideo()">
          <div className="sidenavRow">
            <div>Prime Video</div>
            <i className="fas fa-chevron-right" style={{ color: "#8e9090" }} />
          </div>
        </a>
        <a href="#" onclick="openAmazonMusic()">
          <div className="sidenavRow">
            <div>Amazon Music</div>
            <i className="fas fa-chevron-right" style={{ color: "#8e9090" }} />
          </div>
        </a>
        <a href="#">
          <div className="sidenavRow">
            <div>Apps for Android</div>
            <i className="fas fa-chevron-right" style={{ color: "#8e9090" }} />
          </div>
        </a>
        <a href="#">
          <div className="sidenavRow">
            <div>Echo, Alexa &amp; Smart Home</div>
            <i className="fas fa-chevron-right" style={{ color: "#8e9090" }} />
          </div>
        </a>
        <a href="#">
          <div className="sidenavRow">
            <div>Fire TV</div>
            <i className="fas fa-chevron-right" style={{ color: "#8e9090" }} />
          </div>
        </a>
        <a href="#">
          <div className="sidenavRow">
            <div>Fire Tablets</div>
            <i className="fas fa-chevron-right" style={{ color: "#8e9090" }} />
          </div>
        </a>
        <a href="#">
          <div className="sidenavRow">
            <div>Kindle E-readers &amp; Books</div>
            <i className="fas fa-chevron-right" style={{ color: "#8e9090" }} />
          </div>
        </a>
        <a href="#">
          <div className="sidenavRow">
            <div>Audible Audiobooks</div>
            <i className="fas fa-chevron-right" style={{ color: "#8e9090" }} />
          </div>
        </a>
        <hr />
        <div className="sidenavContentHeader">Shop By Department</div>
        <a href="#">
          <div className="sidenavRow">
            <div>Amazon Fresh</div>
            <i className="fas fa-chevron-right" style={{ color: "#8e9090" }} />
          </div>
        </a>
        <a href="#">
          <div className="sidenavRow">
            <div>Books</div>
            <i className="fas fa-chevron-right" style={{ color: "#8e9090" }} />
          </div>
        </a>
        <a href="#">
          <div className="sidenavRow">
            <div>Films, TV, Music &amp; Games</div>
            <i className="fas fa-chevron-right" style={{ color: "#8e9090" }} />
          </div>
        </a>
        <a href="#">
          <div className="sidenavRow">
            <div>Electronics &amp; Computers</div>
            <i className="fas fa-chevron-right" style={{ color: "#8e9090" }} />
          </div>
        </a>
        <div className="sidenavContainer" id="firstContainer">
          <hr />
          <a href="#">
            <div className="sidenavRow">
              <div>Home, Garden, Pets &amp; DIY</div>
              <i
                className="fas fa-chevron-right"
                style={{ color: "#8e9090" }}
              />
            </div>
          </a>
          <a href="#">
            <div className="sidenavRow">
              <div>Toys, Children &amp; Baby</div>
              <i
                className="fas fa-chevron-right"
                style={{ color: "#8e9090" }}
              />
            </div>
          </a>
          <a href="#">
            <div className="sidenavRow">
              <div>Clothes, Shoes, Jewellery &amp; Accessories</div>
              <i
                className="fas fa-chevron-right"
                style={{ color: "#8e9090" }}
              />
            </div>
          </a>
          <a href="#">
            <div className="sidenavRow">
              <div>Sports &amp; Outdoors</div>
              <i
                className="fas fa-chevron-right"
                style={{ color: "#8e9090" }}
              />
            </div>
          </a>
          <a href="#">
            <div className="sidenavRow">
              <div>Food &amp; Grocery</div>
              <i
                className="fas fa-chevron-right"
                style={{ color: "#8e9090" }}
              />
            </div>
          </a>
          <a href="#">
            <div className="sidenavRow">
              <div>Health &amp; Beauty</div>
              <i
                className="fas fa-chevron-right"
                style={{ color: "#8e9090" }}
              />
            </div>
          </a>
          <a href="#">
            <div className="sidenavRow">
              <div>Car &amp; Motorbike</div>
              <i
                className="fas fa-chevron-right"
                style={{ color: "#8e9090" }}
              />
            </div>
          </a>
          <a href="#">
            <div className="sidenavRow">
              <div>Business, Industry &amp; Science</div>
              <i
                className="fas fa-chevron-right"
                style={{ color: "#8e9090" }}
              />
            </div>
          </a>
        </div>
        <div
          className="sidenavRowDropdown"
          id="firstDropDown"
          onclick="firstDropDown()"
        >
          <div>See All</div>
          <i
            className="fas fa-chevron-down"
            style={{ color: "#8e9090", marginLeft: 10 }}
          ></i>
        </div>
        <hr />
        <div className="sidenavContentHeader">Programs &amp; Features</div>
        <a href="#">
          <div className="sidenavRow">
            <div>Gift Cards &amp; Top Up</div>
            <i className="fas fa-chevron-right" style={{ color: "#8e9090" }} />
          </div>
        </a>
        <a href="#">
          <div className="sidenavRow">
            <div>Find a Gift</div>
            <i className="fas fa-chevron-right" style={{ color: "#8e9090" }} />
          </div>
        </a>
        <a href="#">
          <div className="sidenavRow">
            <div>Handmade</div>
            <i className="fas fa-chevron-right" style={{ color: "#8e9090" }} />
          </div>
        </a>
        <a href="#">
          <div className="sidenavRow">
            <div>Amazon Launchpad</div>
            <i className="fas fa-chevron-right" style={{ color: "#8e9090" }} />
          </div>
        </a>
        {/*Beginning of second sidenavContainer*/}
        <div className="sidenavContainer" id="secondContainer">
          <hr />
          <a href="#">
            <div className="sidenavContent">Made In Italy</div>
          </a>
          <a href="#">
            <div className="sidenavRow">
              <div>Home Services</div>
              <i
                className="fas fa-chevron-right"
                style={{ color: "#8e9090" }}
              />
            </div>
          </a>
          <a href="#">
            <div className="sidenavContent">Prime Wardrobe</div>
          </a>
          <a href="#">
            <div className="sidenavRow">
              <div>Amazon Business</div>
              <i
                className="fas fa-chevron-right"
                style={{ color: "#8e9090" }}
              />
            </div>
          </a>
          <a href="#">
            <div className="sidenavContent">Amazon Second Chance</div>
          </a>
        </div>
        <div
          className="sidenavRowDropdown"
          id="secondDropDown"
          onclick="secondDropDown()"
        >
          <div>See All</div>
          <i
            className="fas fa-chevron-down"
            style={{ color: "#8e9090", marginLeft: 10 }}
          ></i>
        </div>
        <hr />
        <div className="sidenavContentHeader">Help &amp; Settings</div>
        <a href="#">
          <div className="sidenavContent">Your Account</div>
        </a>
        <a href="#">
          <div className="sidenavContent">Currency Settings</div>
        </a>
        <a href="#">
          <div className="sidenavContent">Customer Service</div>
        </a>
        <a href="#">
          <div className="sidenavContent">Sign In</div>
        </a>
        <div style={{ height: 50 }} />
      </div>
      {/*End of first container*/}
      <div id="sub-container">
        <div id="mainMenu">
          <i className="fas fa-chevron-left" style={{ color: "#8e9090" }} />{" "}
          MAIN MENU
        </div>
        <hr />
        <div id="sub-container-content">
          {/* <div class="sidenavContentHeader">Prime Video</div>
    <a href="#"><div class="sidenavContent">All Videos</div></a> */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
