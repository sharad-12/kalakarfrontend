import React, { useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { MdOutlineLocationOn, MdOutlineMailOutline } from "react-icons/md";
import "./profile.css";
import axios from "axios";
const OpportunityProfile= () => {

  const [oppData, setOppData] = useState({});
  const [loading, setLoading] = useState(false);

  const id  = localStorage.getItem("oppid");
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTQwODJjYzU1NzBkODY1NjA2NGVmNjciLCJpYXQiOjE3MDQ0NjAyNTQsImV4cCI6MTcwNDU0NjY1NH0.3bC-O4JIaVqgKmsQzpZadK0I5qBpSFSlW1vmNxb5wnM"
  const getopp = async() =>{

    try {

      setLoading(true);
      const response = await axios.get(`http://localhost:4000/api/v1/admin/opps/${id}`, 
      {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        
      });
      console.log(response.data.data);
      setOppData(response.data.data);
      setLoading(false);
    } catch (error) {
       console.log(error);
      setLoading(false);
    }
  }
  useEffect(()=>{
    getopp();
  }, [])

  const formattedDate = oppData.performanceDate ? new Date(oppData.performanceDate).toLocaleString() : '';

  if(loading){
    return <div>
      Loading.......
    </div>
  }
  
  return (
    <div className="opportunity-profile">
      <div className="top-division">
        <h1>
          { oppData.artName }
        </h1>
        <h2>
          {oppData.artType}
        </h2>
      </div>
      <div className="profile-middle">
        <div className="icon-text">
          <div className="icons">
          <FiPhone className="profileicons" />
          </div>
          <p>
            {oppData.contactPersonNumber}
          </p>
        </div>
        <div className="icon-text">
        <div className="icons">
          <MdOutlineLocationOn className="profileicons" />
          </div>
          <p>
            {oppData.location}
          </p>
        </div>
        <div className="icon-text">
        <div className="icons">
          <MdOutlineMailOutline className="profileicons" />
          </div>
          <p>
            {oppData.contactEmail}
          </p>
        </div>
      </div>
      <div class="profile-card">
        <div class="left-division">
          <div class="section-heading">PURPOSE OF PERFORMANCE</div>
          <div class="paragraph-text">
            {oppData.purpose}
          </div>
          <div class="section-heading">Languages</div>
         
         
          <ul class="list-items">
            <li class="list-item">
              {oppData.languages}
            </li>
          </ul>
          <div class="paragraph-text"></div>
          <div class="section-heading">Venue of Performance</div>
          <div class="paragraph-text">
            {oppData.venue}
          </div>
          <div class="section-heading">Budget</div>
          <div class="paragraph-text">
            {oppData.budget}
          </div>
          <div class="section-heading">Date of Performance</div>
          <div class="paragraph-text">
            {formattedDate}
          </div>
          <div class="section-heading">Duration of performance</div>
          <div class="paragraph-text">
           {oppData.performanceDuration}
          </div>
          <div class="section-heading">Live / Recorded/ Part Live</div>
          <div class="paragraph-text">
            {oppData.mediaType}
          </div>
          <div class="section-heading">Curated Performance</div>
        </div>

        <div class="right-division">
          <div class="section-heading">Description of the Performance</div>
          <div class="paragraph-text">
            {oppData.description}
          </div>

          <div class="section-heading">Category of Art</div>
          <div class="paragraph-text">
            {oppData.artCategory}
          </div>
          <div class="section-heading">No. of Required Artists</div>
          <div class="paragraph-text">
            {oppData.requiredArtists}
          </div>
          <div class="section-heading">Size of Audience</div>
          <div class="paragraph-text">
            {oppData.audienceSize}
          </div>
          <div class="section-heading">Name of Contact Person</div>
          <div class="paragraph-text">
            {oppData.contactPersonName}
          </div>
          <div class="section-heading">Theme of Performance</div>
          <div class="paragraph-text">
            {oppData.theme}
          </div>
          <div class="section-heading">Any Other Requirements</div>
          <div class="paragraph-text">
            {oppData.otherRequirements}
          </div>
          <div class="section-heading">City & Country</div>
          <div class="paragraph-text">cochin, Kerala & India</div>
        </div>
      </div>
      <div className="profile-footer">
        <div className="socialicon">
          <FaInstagram></FaInstagram>
          <h3> Instagram ID</h3>
        </div>
        <div className="socialicon">
          <FaFacebook></FaFacebook>
          <h3>Facebook ID</h3>
        </div>
      </div>
    </div>
  );
};

export default OpportunityProfile
