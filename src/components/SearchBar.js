import React, { useState, useEffect } from "react";
import axios from "axios";
/* import debounce from "lodash.debounce"; */
import "../App.css";
import { FaSearch } from "react-icons/fa";
import { SearchResults } from "./SearchResults";

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [dogData, setDogData] = useState([]);
  // const [results, setResults] = useState([]);
  // const [breedData, setBreedData] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_KEY = process.env.REACT_APP_API_KEY;
  const API_URL = process.env.REACT_APP_API_URL;

  const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };



  const search = (searchTerm) => {
    axios
      .get(API_URL, {
        headers: {
          "x-api-key": API_KEY,
        },
        params: {
          q: searchTerm,
        },
      })
      .then((response) => {
        console.log(response.data); //gives all the available breed
        setDogData(response.data)
      })

      //}
      .catch((err) => {
        console.log(err);
      });

  }

  const debouncedSearch = debounce(search, 3000);
  //=========================================================================== 
  // if (searchTerm.trim() === "") {
  //   setDogData([]);
  //   return;
  // }
  // setLoading(true);
  /* function debouncedSearch(f, ms) {
    let timeout;
    return function () {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        f();
      }, ms);
    }
  }
 */






  //================== Below is without debounce ============================
  // const handleSearch = async () => {
  //   try {
  //     const response = await axios.get(API_URL, {
  //       headers: {
  //         'x-api-key': API_KEY,
  //       },
  //       params: {
  //         q: searchTerm
  //       }
  //     });
  //     if (response.status === 200) {
  //       const breedData = response.data[0]
  //       //the above only returns 1 piece of data
  //       console.log(response.data);
  //       //the console above returns all pieces of data
  //       setResults(response.data);
  //       //set the data to our search results above

  //       console.log(breedData);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  const handleInputChange = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    debouncedSearch(newSearchTerm);
  };

  return (
    <div>
      <div className="input-wrapper">
        <FaSearch id="search-icon" />
        <input
          type="text"
          placeholder="Enter a breed name"
          onChange={handleInputChange}
          // onChange={debouncedOnChange}
          value={searchTerm}
        />
        {/* <button onClick={handleSearch}>Search</button> */}
      </div>
      {loading && <p className="loading-msg">Loading...</p>}
      <div>
        <SearchResults childProp={dogData} />
      </div>
    </div>
  );
};
