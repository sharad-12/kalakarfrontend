// import React, { useState, useEffect } from "react";
// import { BiSolidHide } from "react-icons/bi";
// import "./artistmanage.css";

// const ArtsistManagement = () => {
//   const [selectedOption, setSelectedOption] = useState('default');
//   const [data, setData] = useState([]);
//   const [currentPage, setCurrentPage] = useState(0);

//   const itemsPerPage = 10;

//   const handlePageClick = (selectedPage) => {
//     setCurrentPage(selectedPage.selected);
//   };

//   useEffect(() => {
//     const getUser = async () => {
//       try {
//         const response = await fetch(
//           "https://api.ekalakaar.com/api/v1/admin/user?role=Artist",
//           {
//             method: "GET",
//             headers: {
//               Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTQwODJjYzU1NzBkODY1NjA2NGVmNjciLCJpYXQiOjE3MDQzODE3NDMsImV4cCI6MTcwNDQ2ODE0M30.j5PpZQA-m4PC-6JYgYWVOGeVoBImNOOCR1vsrdp44Vw`, // replace with your access token
//               "Content-Type": "application/json",
//             },
//           }
//         );

//         const responseData = await response.json();
//         setData(responseData.data);
//         console.log(responseData);
//       } catch (error) {
//         console.error("Error fetching artist data:", error);
//       }
//     };

//     getUser();
//   }, []);

//   const handleSelectChange = (e) => {
//     setSelectedOption(e.target.value);
//   };

//   const getSortedProfiles = () => {
//     switch (selectedOption) {
//       case 'ascending':
//         return [...data].sort((a, b) => a.firstName.localeCompare(b.firstName));
//       case 'descending':
//         return [...data].sort((a, b) => b.firstName.localeCompare(a.firstName));
//       case 'recentlyAdded':
//         return [...data].sort((a, b) => b.createdAt - a.createdAt);
//       default:
//         return data;
//     }
//   };

//   const sortedProfiles = getSortedProfiles();

//   return (
//     <>
//       <div className="artist_management">
//         <div className="artist_management_topdivision">
//           <h1>Artist Management</h1>
//           <BiSolidHide className="hiddenicon" />
//         </div>
//       </div>
//       <div className="artist_top_buttons">
//         <button className="total_artist">Filter</button>
//         <button className="total_artist">Total Artist <br /><span style={{color:"black",fontStyle:"bold"}}> {data.length}</span></button>
//         <div className="total_artist">
//           <select
//             id="sortDropdown"
//             onChange={handleSelectChange}
//             value={selectedOption}
//           >
//             <option value="default">Sort by</option>
//             <option value="ascending">Ascending Order</option>
//             <option value="descending">Descending Order</option>
//             <option value="recentlyAdded">Recently Added</option>
//           </select>
//         </div>
//       </div>
//       <div className="artist_top-division">
//         {sortedProfiles.map((profile) => (
//           <div key={profile._id} className="artist_management_profile">
//             <img src={profile.avatar?.url} alt="" />
//             <h1>{profile.firstName}</h1>
//             <h2>{profile.role}</h2>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default ArtsistManagement;




import React, { useState, useEffect } from "react";
import { BiSolidHide } from "react-icons/bi";
import "./artistmanage.css";
import { Link } from "react-router-dom";

const ArtsistManagement = () => {
  const [selectedOption, setSelectedOption] = useState('default');
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerRow = 3; // Display 3 profiles in each row
  const itemsPerPage = 9; // Display 9 entries per page

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTQwODJjYzU1NzBkODY1NjA2NGVmNjciLCJpYXQiOjE3MDQ1Mjg0NjAsImV4cCI6MTcwNDYxNDg2MH0.fBw23o6qHS8pDLWq7TmSNVznPoMe3GsSn6OD5N8Zm9s"
  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch(
          "https://api.ekalakaar.com/api/v1/admin/user?role=Artist",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`, // replace with your access token
              "Content-Type": "application/json",
            },
          }
        );

        const responseData = await response.json();
        setData(responseData.data);
        console.log(responseData);
      } catch (error) {
        console.error("Error fetching artist data:", error);
      }
    };

    getUser();
  }, []);

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const getSortedProfiles = () => {
    switch (selectedOption) {
      case 'ascending':
        return [...data].sort((a, b) => a.firstName.localeCompare(b.firstName));
      case 'descending':
        return [...data].sort((a, b) => b.firstName.localeCompare(a.firstName));
      case 'recentlyAdded':
        return [...data].sort((a, b) => b.createdAt - a.createdAt);
      default:
        return data;
    }
  };

  const sortedProfiles = getSortedProfiles();

  // Calculate the start and end index based on the current page
  const startIndex = currentPage * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, sortedProfiles.length);

  return (
    <>
      <div className="artist_management">
        <div className="artist_management_topdivision">
          <h1>Artist Management</h1>
          <BiSolidHide className="hiddenicon" />
        </div>
      </div>
      <div className="artist_top_buttons">
        <button className="total_artist">Filter</button>
        <button className="total_artist">
          Total Artist <br /><span style={{ color: "black", fontStyle: "bold" }}> {data.length}</span>
        </button>
        <div className="total_artist">
          <select
            id="sortDropdown"
            onChange={handleSelectChange}
            value={selectedOption}
          >
            <option value="default">Sort by</option>
            <option value="ascending">Ascending Order</option>
            <option value="descending">Descending Order</option>
            <option value="recentlyAdded">Recently Added</option>
          </select>
        </div>
      </div>
      <div className="artist_top-division">
        {Array.from({ length: Math.ceil(itemsPerPage / itemsPerRow) }).map((_, rowIndex) => (
          <div key={rowIndex} className="artist_row">
            {sortedProfiles.slice(startIndex + rowIndex * itemsPerRow, Math.min(endIndex, startIndex + (rowIndex + 1) * itemsPerRow)).map((profile) => (
              <div key={profile._id} className="artist_management_profile">
                <Link to="/artistProfile">
                 <img src={profile.avatar?.url} alt="" onClick={() =>{
                  console.log(profile._id)
                   localStorage.setItem("artId", profile._id)
                   }} />
                </Link>
                <span>{profile.firstName}</span>
                <span>{profile.role}</span>
              </div>
              
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default ArtsistManagement;
