import React from "react";

// Styles
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
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
          <div className="sidenavContentHeader">
            Digital Content And Devices
          </div>
          <a href="#" onClick="openPrimeVideo()">
            <div className="sidenavRow">
              <div>Prime Video</div>
              <i
                className="fas fa-chevron-right"
                style={{ color: "#8e9090" }}
              />
            </div>
          </a>
          <a href="#" onclick="openAmazonMusic()">
            <div className="sidenavRow">
              <div>Amazon Music</div>
              <i
                className="fas fa-chevron-right"
                style={{ color: "#8e9090" }}
              />
            </div>
          </a>
          <a href="#">
            <div className="sidenavRow">
              <div>Apps for Android</div>
              <i
                className="fas fa-chevron-right"
                style={{ color: "#8e9090" }}
              />
            </div>
          </a>
          <a href="#">
            <div className="sidenavRow">
              <div>Echo, Alexa &amp; Smart Home</div>
              <i
                className="fas fa-chevron-right"
                style={{ color: "#8e9090" }}
              />
            </div>
          </a>
          <a href="#">
            <div className="sidenavRow">
              <div>Fire TV</div>
              <i
                className="fas fa-chevron-right"
                style={{ color: "#8e9090" }}
              />
            </div>
          </a>
          <a href="#">
            <div className="sidenavRow">
              <div>Fire Tablets</div>
              <i
                className="fas fa-chevron-right"
                style={{ color: "#8e9090" }}
              />
            </div>
          </a>
          <a href="#">
            <div className="sidenavRow">
              <div>Kindle E-readers &amp; Books</div>
              <i
                className="fas fa-chevron-right"
                style={{ color: "#8e9090" }}
              />
            </div>
          </a>
          <a href="#">
            <div className="sidenavRow">
              <div>Audible Audiobooks</div>
              <i
                className="fas fa-chevron-right"
                style={{ color: "#8e9090" }}
              />
            </div>
          </a>
          <hr />
          <div className="sidenavContentHeader">Shop By Department</div>
          <a href="#">
            <div className="sidenavRow">
              <div>Amazon Fresh</div>
              <i
                className="fas fa-chevron-right"
                style={{ color: "#8e9090" }}
              />
            </div>
          </a>
          <a href="#">
            <div className="sidenavRow">
              <div>Books</div>
              <i
                className="fas fa-chevron-right"
                style={{ color: "#8e9090" }}
              />
            </div>
          </a>
          <a href="#">
            <div className="sidenavRow">
              <div>Films, TV, Music &amp; Games</div>
              <i
                className="fas fa-chevron-right"
                style={{ color: "#8e9090" }}
              />
            </div>
          </a>
          <a href="#">
            <div className="sidenavRow">
              <div>Electronics &amp; Computers</div>
              <i
                className="fas fa-chevron-right"
                style={{ color: "#8e9090" }}
              />
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
              <i
                className="fas fa-chevron-right"
                style={{ color: "#8e9090" }}
              />
            </div>
          </a>
          <a href="#">
            <div className="sidenavRow">
              <div>Find a Gift</div>
              <i
                className="fas fa-chevron-right"
                style={{ color: "#8e9090" }}
              />
            </div>
          </a>
          <a href="#">
            <div className="sidenavRow">
              <div>Handmade</div>
              <i
                className="fas fa-chevron-right"
                style={{ color: "#8e9090" }}
              />
            </div>
          </a>
          <a href="#">
            <div className="sidenavRow">
              <div>Amazon Launchpad</div>
              <i
                className="fas fa-chevron-right"
                style={{ color: "#8e9090" }}
              />
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

      <div className="home__products_section">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/717OO5QwJnL._SX3000_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="1"
            title="Roku Streaming Stick 4K 2021 | Streaming Device 4K/HDR/Dolby Vision with Roku Voice Remote and TV Controls"
            price={39.35}
            rating={5}
            image="https://m.media-amazon.com/images/I/71wrIZujPIL._AC_UL320_.jpg"
          />
          <Product
            id="2"
            title={`Sceptre 24" Professional Thin 75Hz 1080p LED Monitor 2x HDMI VGA Build-in Speakers, Machine Black (E248W-19203R Series)`}
            price={103.66}
            rating={5}
            image="https://m.media-amazon.com/images/I/71rXSVqET9L._AC_UL320_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="3"
            title="
          Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PlayStation, & Xbox - 1-Year Rescue Service (STGX2000400)"
            price={11.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/81tjLksKixL._AC_SL1500_.jpg"
          />
          <Product
            id="4"
            title="
          SAMSUNG 970 EVO Plus SSD 2TB - M.2 NVMe Interface Internal Solid State Drive with V-NAND Technology (MZ-V7S2T0B/AM)"
            price={11.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/41cUfgtV+HL._AC_.jpg"
          />
          <Product
            id="5"
            title="
          Original HP 63XL Black High-yield Ink Cartridge | Works with HP DeskJet 1112, 2130, 3630 Series; HP ENVY 4510, 4520 Series; HP OfficeJet 3830, 4650, 5200..."
            price={11.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/81oGX58ptcL._AC_SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="6"
            title={`HP E34m G4 34" WQHD Curved Screen LED LCD Monitor - 21:9-34" Class - Vertical Alignment (VA) - 3440 x 1440-16.7 Million Colors - 400 Nit - 5 ms - 75...`}
            price={11.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/6143-RHE09L._AC_SL1200_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
