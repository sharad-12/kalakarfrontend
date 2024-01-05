import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "../ManageUser/User.css";
import { FaPlus } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

const UserArtist = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 10;
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch(
          "https://api.ekalakaar.com/api/v1/admin/user?role=Artist",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTQwODJjYzU1NzBkODY1NjA2NGVmNjciLCJpYXQiOjE3MDQxMDMzMDQsImV4cCI6MTcwNDE4OTcwNH0.nvG5H4Ih2ll0HE9cyiAkxiEb7ngmq4p-H_8LIeJBzKk`,
              "Content-Type": "application/json",
            },
          }
        );

        const responseData = await response.json();
        setData(responseData.data);
      } catch (error) {
        console.error("Error fetching artist data:", error);
      }
    };

    getUser();
  }, []);

  function toggleBlock(e) {
    if (e.target.textContent === "Block") {
      e.target.style.color = "#00FF38";
      e.target.textContent = "Unblock";
    } else {
      e.target.style.color = "#FF0018";
      e.target.textContent = "Block";
    }
  }

  function toggleApproved(e) {
    if (e.target.textContent === "Rejected") {
      e.target.style.color = "#00FF38";
      e.target.textContent = "Approved";
    } else {
      e.target.style.color = "#FF0018";
      e.target.textContent = "Rejected";
    }
  }

  
  function toggleverify(e){
    if(e.target.textContent==="Verify")
    {
        e.target.style.color='#00FF38';
        e.target.textContent="Verified";
    }
    else
    {
        e.target.style.color='#FC9904';
        e.target.textContent="Verify";
    }
    
}

  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="container">
      <div className="row-container">
      <div className="left-heading">
      <h2>Manage Users -<span style={{color:"#AD2F3B"}}>Art-Lovers</span></h2>
          <div className="search">
            <IoSearch className="searchicon" />
            <input type="search" placeholder="Search" />
          </div>
        </div>
        <FaPlus className="plus" />
      </div>
      <div className="filter-dropdown">
        Filter
        <select className="artistdropdown">
          <option value="0">All Artist</option>
          <option value="filter2">Patron</option>
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th>User <br /> Name</th>
            <th>Email</th>
            <th>Phone No</th>
            <th>Registered <br /> On</th>
            <th>Block/ <br /> Unblock</th>
            <th>Approve/ <br /> Reject</th>
            <th>Verify</th>
            <th></th>
            
          </tr>
        </thead>
        <tbody className="table_body">
          {currentItems.map((item, index) => (
            <tr key={index}>
              <td>{item.firstName}</td>
              <td>{item.email}</td>
              <td>{item.phoneNumber?.number}</td>
              <td>{item.createdAt}</td>
              <td className="block" onClick={(e) => { toggleBlock(e) }}>{item.blocked ? 'Unblock' : 'Block'}</td>
              <td className="approve" onClick={(e) => { toggleApproved(e) }}>{item.approved ? 'Approved':'Rejected'}</td>
              <td className="verify" onClick={(e) => { toggleverify(e) }}>{item.approved ? 'Verify':'Verified'}</td>
              <td className="viewicon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M2.76469 3.35303H2.17646C1.86445 3.35303 1.56521 3.47698 1.34458 3.69761C1.12395 3.91824 1 4.21747 1 4.52949V9.82358C1 10.1356 1.12395 10.4348 1.34458 10.6555C1.56521 10.8761 1.86445 11 2.17646 11H7.47055C7.78256 11 8.0818 10.8761 8.30243 10.6555C8.52306 10.4348 8.64701 10.1356 8.64701 9.82358V9.23534"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.05878 2.17653L9.82348 3.94122M10.6382 3.10887C10.8699 2.8772 11 2.56298 11 2.23535C11 1.90771 10.8699 1.5935 10.6382 1.36183C10.4065 1.13015 10.0923 1 9.76465 1C9.43702 1 9.1228 1.13015 8.89113 1.36183L3.94116 6.29415V8.05884H5.70586L10.6382 3.10887Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="13"
                viewBox="0 0 19 10"
                fill="none"
              >
                <path
                  d="M9.5 0C4.18985 0 0 4.99968 0 4.99968C0 4.99968 4.18985 10 9.5 10C13.5604 10 19 4.99968 19 4.99968C19 4.99968 13.5604 0 9.5 0ZM9.5 8.11459C7.63519 8.11459 6.1173 6.71722 6.1173 4.99968C6.1173 3.28213 7.63519 1.88411 9.5 1.88411C11.3648 1.88411 12.8827 3.28213 12.8827 4.99968C12.8827 6.71722 11.3648 8.11459 9.5 8.11459ZM9.5 3.18102C9.2376 3.17646 8.97685 3.22012 8.73299 3.30945C8.48912 3.39878 8.26704 3.53199 8.07972 3.70129C7.8924 3.87059 7.7436 4.07258 7.64203 4.29546C7.54045 4.51834 7.48813 4.75763 7.48813 4.99935C7.48813 5.24107 7.54045 5.48036 7.64203 5.70324C7.7436 5.92612 7.8924 6.12812 8.07972 6.29741C8.26704 6.46671 8.48912 6.59992 8.73299 6.68925C8.97685 6.77858 9.2376 6.82224 9.5 6.81768C10.0171 6.80869 10.5098 6.61316 10.8721 6.27314C11.2344 5.93311 11.4373 5.47574 11.4373 4.99935C11.4373 4.52296 11.2344 4.06559 10.8721 3.72557C10.5098 3.38554 10.0171 3.19002 9.5 3.18102Z"
                  fill="#FC9904"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 9 10"
                fill="none"
              >
                <path
                  d="M3.55263 1.625V1.75H5.44737V1.625C5.44737 1.35978 5.34756 1.10543 5.16989 0.917893C4.99222 0.730357 4.75126 0.625 4.5 0.625C4.24874 0.625 4.00778 0.730357 3.83011 0.917893C3.65244 1.10543 3.55263 1.35978 3.55263 1.625ZM2.96053 1.75V1.625C2.96053 1.19402 3.12272 0.780698 3.41143 0.475951C3.70014 0.171205 4.09171 0 4.5 0C4.90829 0 5.29986 0.171205 5.58857 0.475951C5.87728 0.780698 6.03947 1.19402 6.03947 1.625V1.75H8.70395C8.78247 1.75 8.85777 1.78292 8.91329 1.84153C8.96881 1.90013 9 1.97962 9 2.0625C9 2.14538 8.96881 2.22487 8.91329 2.28347C8.85777 2.34208 8.78247 2.375 8.70395 2.375H8.01308L7.53939 8.339C7.50341 8.7919 7.30753 9.21401 6.99059 9.52165C6.67365 9.8293 6.25878 10 5.82821 10H3.17179C2.74126 9.99996 2.32645 9.8292 2.00956 9.52157C1.69267 9.21393 1.49683 8.79186 1.46084 8.339L0.987158 2.375H0.296053C0.217535 2.375 0.142232 2.34208 0.0867118 2.28347C0.0311912 2.22487 0 2.14538 0 2.0625C0 1.97962 0.0311912 1.90013 0.0867118 1.84153C0.142232 1.78292 0.217535 1.75 0.296053 1.75H2.96053ZM2.05082 8.28675C2.07439 8.58346 2.2027 8.85999 2.41032 9.06154C2.61794 9.2631 2.88971 9.37498 3.17179 9.375H5.82821C6.11033 9.37504 6.38216 9.26319 6.58983 9.06163C6.7975 8.86006 6.92584 8.5835 6.94942 8.28675L7.41884 2.375H1.58116L2.05082 8.28675ZM3.90789 4.0625C3.90789 4.02146 3.90024 3.98083 3.88536 3.94291C3.87048 3.905 3.84867 3.87055 3.82118 3.84153C3.79369 3.81251 3.76106 3.78949 3.72514 3.77379C3.68922 3.75808 3.65072 3.75 3.61184 3.75C3.57296 3.75 3.53447 3.75808 3.49855 3.77379C3.46263 3.78949 3.42999 3.81251 3.4025 3.84153C3.37501 3.87055 3.3532 3.905 3.33833 3.94291C3.32345 3.98083 3.31579 4.02146 3.31579 4.0625V7.6875C3.31579 7.72854 3.32345 7.76917 3.33833 7.80709C3.3532 7.845 3.37501 7.87945 3.4025 7.90847C3.42999 7.93749 3.46263 7.96051 3.49855 7.97621C3.53447 7.99192 3.57296 8 3.61184 8C3.65072 8 3.68922 7.99192 3.72514 7.97621C3.76106 7.96051 3.79369 7.93749 3.82118 7.90847C3.84867 7.87945 3.87048 7.845 3.88536 7.80709C3.90024 7.76917 3.90789 7.72854 3.90789 7.6875V4.0625ZM5.38816 3.75C5.55158 3.75 5.68421 3.89 5.68421 4.0625V7.6875C5.68421 7.77038 5.65302 7.84987 5.5975 7.90847C5.54198 7.96708 5.46668 8 5.38816 8C5.30964 8 5.23434 7.96708 5.17882 7.90847C5.1233 7.84987 5.09211 7.77038 5.09211 7.6875V4.0625C5.09211 3.89 5.22474 3.75 5.38816 3.75Z"
                  fill="#FF0018"
                />
              </svg>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default UserArtist;
