// import React, { useState } from "react";
// import { FaUser } from "react-icons/fa";
// import { FaMicrophone } from "react-icons/fa";
// import { IoMusicalNote } from "react-icons/io5";
// import { FaStarOfDavid } from "react-icons/fa";
// import "./artistprofile.css";
// const YourComponent = () => {
//   return (
//     <>
//       <div className="artist_top-division">
//         <div class="artist_circleprofile">
//           <img src="./profile.webp" alt="" />
//         </div>
//         <h1>Kavya</h1>
//       </div>
//       <div className="artist-ManageProfile">
//         <h1>
//           {" "}
//           <FaUser /> Basic Profile
//         </h1>
//         <div class="profile-card">
//           <div class="left-division">
//             <div class="profile_heading">First Name:</div>
//             <div class="profile_heading">Last Name:</div>
//             <div class="profile_heading">Email:</div>
//             <div class="profile_heading">Contact Number:</div>
//             <div class="profile_heading">Age:</div>
//             <div class="profile_heading">Gender:</div>
//             <div class="profile_heading">Pincode:</div>
//             <div className="profile_heading">Language:</div>
//           </div>

//           <div class="right-division">
//           <div class="profile_heading">Kavya</div>
//             <div class="profile_heading">XXXX</div>
//             <div class="profile_heading">kxxxxx@gmail.com</div>
//             <div class="profile_heading">2658923480XX</div>
//             <div class="profile_heading">29</div>
//             <div class="profile_heading">F</div>
//             <div class="profile_heading">364794</div>
//             <div className="profile_heading">Tamil</div>
//             </div>

//         </div>

//       </div>
//       <div className="artist_art-ManageProfile">
//         <h1>
//           {" "}
//           <FaMicrophone/> Art Profile
//         </h1>
//         <div class="profile-card">
//           <div class="left-division">
//             <div class="profile_heading">Category of Art:</div>
//             <div class="profile_heading">Name of Art:</div>
//           </div>

//           <div class="right-division">
//           <div class="profile_heading">Dance</div>
//             <div class="profile_heading">Kathakali</div>
//             </div>
//         </div>
//       </div>
//       <div className="artist_art-ManageProfile">
//         <h1>
//           {" "}
//           <IoMusicalNote/> Performance Profile
//         </h1>
//         <div class="profile-card">
//           <div class="left-division">
//             <div class="profile_heading">Total No of Performance:</div>
//             <div class="profile_heading">Experience:</div>
//           </div>

//           <div class="right-division">
//           <div class="profile_heading">11</div>
//             <div class="profile_heading">15</div>
//             </div>
//         </div>
//       </div>
//       <div className="artist_art-ManageProfile">
//         <h1>
//           {" "}
//           <FaStarOfDavid/> Award Profile
//         </h1>
//         <div class="profile-card">
//           <div class="left-division">
//             <div class="profile_heading">Total Number of Awards:</div>
//             <div class="profile_heading">Highest Level of Awards:</div>
//           </div>

//           <div class="right-division">
//           <div class="profile_heading">56</div>
//             <div class="profile_heading">National Award</div>
//             </div>
//         </div>
//       </div>

//       <button class="view_more">View More</button>
//     </>
//   );
// };

// export default YourComponent;

import React ,{useState}from "react";
import { FaInstagram,FaFacebook,FaYoutube,FaLinkedin,FaTwitter } from "react-icons/fa";
import "./artistprofile.css"; 
import { FaUser } from "react-icons/fa";



const YourComponent = () => {
 
  return (
    <div className="main-container">
      <div className="left-container">
      <div className="artist_top-division">
        <div class="artist_circleprofile">
          <img src="./profile.webp" alt="" />
        </div>
        <h1>Kavya</h1>
      </div>
      <div className="basic_profile">
          <h1><FaUser/>Basic Profile</h1>
          <div class="basic_profile-card">
            <div class="left-division">
            <div class="profile_heading">First Name:</div>
            <div class="profile_heading">Last Name:</div>
            <div class="profile_heading">Email:</div>
            <div class="profile_heading">Contact Number:</div>
            <div class="profile_heading">Age:</div>
            <div class="profile_heading">Gender:</div>
            <div class="profile_heading">Pincode:</div>
            <div className="profile_heading">Language:</div>
            </div>

            <div class="right-division">
            <div class="profile_heading">Kavya</div>
            <div class="profile_heading">XXXX</div>
            <div class="profile_heading">kxxxxx@gmail.com</div>
            <div class="profile_heading">2658923480XX</div>
            <div class="profile_heading">29</div>
            <div class="profile_heading">F</div>
            <div class="profile_heading">364794</div>
            <div className="profile_heading">Tamil</div>
            </div>
          </div>
        </div>
        <div className="artist_art-ManageProfile">
          <h1> Other Details</h1>
          <div class="profile-card">
            <div class="left-division">
              <div class="profile_heading">Social Category:</div>
              <div class="profile_heading">Disability:</div>
              <div class="profile_heading">Source of Income:</div>
              <div class="profile_heading">Annual Income:</div>
              <div class="profile_heading">UPI Id:</div>
            </div>

            <div class="right-division">
              <div class="profile_heading">General</div>
              <div class="profile_heading">No</div>
              <div class="profile_heading">Job-Private</div>
              <div class="profile_heading">1000000</div>
              <div class="profile_heading">12344567@paytm</div>
            </div>
          </div>
        </div>
        <div className="artist_art-ManageProfile">
          <h1> ID Proofs</h1>
          <div class="profile-card">
            <div class="left-division">
              <div class="profile_heading">Aadhar No:</div>
              <div class="profile_heading">PAN No:</div>
              <div class="profile_heading">Passport:</div>
            </div>

            <div class="right-division">
              <div class="profile_heading">1234-4567-5624</div>
              <div class="profile_heading">12345678</div>
              <div class="profile_heading">85236794101</div>
            </div>
          </div>
        </div>
        <div className="aboutartist">
          <h2>Highlights of Performance</h2>
          <p>
            Performing a classic dance with five friends at the ART COLLEGE on
            October 12, 2023, showcased our collective artistry, precision, and
            the harmonious beauty of classical dance. The synergy among us
            created a mesmerizing performance that left a lasting impression on
            the audience.
          </p>
        </div>

        <div className="artist-ManageProfile">
          <h1> Major Events</h1>
          <div class="major_events_container">
            <div class="major_events">Aadhar No:</div>
            <div class="major_events">PAN No:</div>
            <div class="major_events">Passport:</div>
          </div>
        </div>
        <div className="profile_social_icons">
          <FaInstagram/>
          <FaFacebook/>
          <FaYoutube/>
          <FaLinkedin/>
          <FaTwitter/>
        </div>
      </div>
      <div className="right-container">
        <div className="aboutartist">
          <h2>About me as Artist</h2>
          <p>
            Dedicated and passionate Hula dancer with two years of experience
            seeking opportunities to showcase expertise and commitment as a main
            dancer. Proficient in both Hula 'Auana and Hula Kahiko styles, with
            a strong foundation in traditional Hawaiian dance techniques.
          </p>
        </div>
        <div className="performance_profile">
          <h1>Performance Profiles</h1>
          <div class="profile-card">
            <div class="left-division">
              <div class="profile_heading">Aadhar No:</div>
              <div class="profile_heading">PAN No:</div>
              <div class="profile_heading">Passport:</div>
            </div>

            <div class="right-division">
              <div class="profile_heading">1234-4567-5624</div>
              <div class="profile_heading">12345678</div>
              <div class="profile_heading">85236794101</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourComponent;
