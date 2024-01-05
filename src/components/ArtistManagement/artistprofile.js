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

import React, { useState } from "react";
import { FaMicrophone } from "react-icons/fa";
import { IoMusicalNote } from "react-icons/io5";
import { FaStarOfDavid } from "react-icons/fa";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import "./artistprofile.css";
import { FaUser } from "react-icons/fa";

const YourComponent = () => {
  return (
    <div className="main-container">
      <div className="left-container">
        <div className="artist_Basicprofile">
          <div class="artist_circleprofile">
            <img src="./profile.webp" alt="" />
          </div>
          <h1>Kavya</h1>
        </div>
        <div className="basic_profile">
          <h1>
            <FaUser />
            Basic Profile
          </h1>
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
            <div class="major_events">Art college traditional Dance Fest.</div>
            <div class="major_events">12 Oct 2023</div>
            <div class="major_events">State Level</div>
            <div class="major_events">Chennai.</div>
          </div>
        </div>
        <div className="profile_social_icons">
          <FaInstagram className="profile_Youtube" />
          <FaFacebook className="profile_facebook" />
          <FaYoutube className="profile_Youtube" />
          <FaLinkedin className="profile_LinkedIn" />
          <FaTwitter className="profile_facebook" />
        </div>
      </div>
      <div className="right-container">
        <div className="artist_profile_card">
          <div className="artist_art_profile">
            <h1> <FaMicrophone/>Art Profile</h1>
            <div class="profile-card">
              <div class="left-division">
                <div class="profile_heading">Category of Art: </div>
                <div class="profile_heading">Name of Art:</div>
              </div>
              <div class="right-division">
                <div class="profile_heading">Dance</div>
                <div class="profile_heading">Kathakali</div>
              </div>
            </div>
          </div>
          <div className="artist_art_profile_award">
            <h1> <FaStarOfDavid/>Award Profile</h1>
            <h4 style={{textAlign:"center"}}>National Award(2021)</h4>
          </div>
        </div>
        <div className="artist_profile_card">
          <div className="artist_art_profile">
            <h1> <IoMusicalNote/>Performance Profile</h1>
            <div class="profile-card">
              <div class="left-division">
                <div class="profile_heading">Performances:</div>
                <div class="profile_heading">Experience:</div>
              </div>
              <div class="right-division">
                <div class="profile_heading">28</div>
                <div class="profile_heading">11</div>
              </div>
            </div>
          </div>

          <div className="artist_art_profile_award">
            <h1> <FaStarOfDavid/>High Level Award</h1>
          <h4 style={{textAlign:"center"}}>National Award(2021)</h4>
          </div>
        </div>
        <h1>Video</h1>
        <div className="artistprofile_video"></div>{" "}
        <span style={{fontWeight:"bold"}}>Performance at Asian Traditional Dance (2022)</span>
        <div className="aboutartist">
          <h2>About me as Artist</h2>
          <p>
            Dedicated and passionate Hula dancer with two years of experience
            seeking opportunities to showcase expertise and commitment as a main
            dancer. Proficient in both Hula 'Auana and Hula Kahiko styles, with
            a strong foundation in traditional Hawaiian dance techniques.
          </p>
        </div>
        <div className="artist-ManageProfile">
          <h1>Art Education</h1>
          <div class="major_events_container">
            <div class="major_events">Dance Therapy Certification</div>
            <div class="major_events">Dance Therapy</div>
            <div class="major_events">K.M Art University</div>
            <div class="major_events">2 years Course</div>
            <div className="major_events">2020-2022</div>
          </div>
        </div>
        <div className="performance_profile">
          <h1>Performance Profiles</h1>
          <div class="profile-card">
            <div class="left-division">
              <div class="profile_heading">
                <p className="performance_heading">
                  {" "}
                  Affiliated to any Group/Organization
                </p>
                <p className="performance_para">No</p>
              </div>
              <div class="profile_heading">
                <p className="performance_heading">Type of Performance</p>
                <p className="performance_para">No</p>
              </div>
              <div class="profile_heading">
                <p className="performance_heading">
                  Highest level of Proformance
                </p>
                <p className="performance_para">No</p>
              </div>
              <div class="profile_heading">
                <p className="performance_heading">
                  Average Duration of Performance(India)
                </p>
                <p className="performance_para">No</p>
              </div>
              <div class="profile_heading">
                <p className="performance_heading">
                  Average Fee per Performance(India)
                </p>
                <p className="performance_para">No</p>
              </div>
              <div class="profile_heading">
                <p className="performance_heading">
                  {" "}
                  Average Duration of Performance(International)
                </p>
                <p className="performance_para">No</p>
              </div>
              <div class="profile_heading">
                <p className="performance_heading">
                  Average Fee per Performance(International)
                </p>
                <p className="performance_para">No</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourComponent;
