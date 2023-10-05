import { useState, useEffect } from "react";
import axios from "axios";
import debounce from "lodash.debounce";
import { SearchBar } from "./components/SearchBar";
import { SearchResults } from "./components/SearchResults";
import './App.css';
import { FaSearch } from 'react-icons/fa';

export default function App() {
  // const [searchTerm, setSearchTerm] = useState("");
  // const [results, setResults] = useState([]);
  // const [images, setImages] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [name, setName] = useState("");
  // const [height, setHeight] = useState("");
  // const [life_span, setLife_span] = useState("");

  // const [dogData, setDogData] = useState([]);
  // const [query, setQuery] = useState('');
  // const [breedData, setBreedData] = useState(null);

  // const API_KEY = 'live_eCPzUUiVYIWXDCMkeTITWpIUV2FbK1x1yUJkWRToyTzkUuSrQ1SUvroRt40a18MA';
  // const API_URL = `https://api.thedogapi.com/v1/breeds/search?limit=10&page=0`;

  // const debouncedSearch = debounce(searchDogs, 1000);

  // useEffect(() => {
  // const config = {
  //   method: "get",
  //   maxBodyLength: Infinity,
  //url: `https://api.thedogapi.com/v1/breeds?limit=10&page=0&images/search?format=json&limit=10`,

  //   url: `https://api.thedogapi.com/v1/breeds?&limit=10&page=0`,


  //   headers: {
  //     "Content-Type": "application/json",
  //     "x-api-key":
  //       "{{live_eCPzUUiVYIWXDCMkeTITWpIUV2FbK1x1yUJkWRToyTzkUuSrQ1SUvroRt40a18MA}}"
  //   }
  // };

  // const configImg = {
  //   method: "get",
  //   maxBodyLength: Infinity,
  //   url: `https://api.thedogapi.com/v1/images/search?format=json&limit=10`,


  //   headers: {
  //     "Content-Type": "application/json",
  //     "x-api-key":
  //       "{{live_eCPzUUiVYIWXDCMkeTITWpIUV2FbK1x1yUJkWRToyTzkUuSrQ1SUvroRt40a18MA}}"
  //   }
  // };




  // const getDog = async () => {
  //   try {
  //     const res = await axios(config);
  //     const resImg = await axios(configImg);

  //     console.log(res.data);
  //     setResults(res.data);
  //setResults(res.data);
  // setName(res.data.name);
  // setHeight(res.data.height);
  // setLife_span(res.data.life_span);


  // console.log(resImg.data);
  // setImages(resImg.data);


  // console.log(res.data.name);
  // setName(res.data.name);
  // console.log(res.data.height);
  // setHeight(res.data.height)
  // console.log(res.data.life_span);
  // setLife_span(res.data.life_span)
  //console.log(JSON.stringify(res.data));

  //     } catch (err) {
  //       console.log(err);
  //     }

  //   };
  //   getDog();
  // }, []);
  //console.log(results);

  //setResults(res.data);
  // setName(results.name);
  // setHeight(results.height);
  // setLife_span(results.life_span);
  // console.log(name);
  // console.log(height);
  // console.log(life_span);

  //=======================================================================
  // const handleSearch = async () => {
  //   try {
  //     const response = await axios.get(API_URL, {
  //       headers: {
  //         'x-api-key': API_KEY,
  //       },
  //       params: {
  //         q: query,
  //       },
  //     });
  //     if (response.status === 200) {
  //       const breedData = response.data[0];
  //       console.log(breedData);//gives only the first available breed
  //setBreedData(breedData)

  //       console.log(response.data); //gives all the available breed
  //       setResults(response.data);

  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // =========================================================================


  // async function searchDogs(searchTerms) {
  //   try {
  //     //const response = await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${query}`);
  //     const response = await axios.get(API_URL, {
  //       headers: {
  //         'x-api-key': API_KEY,
  //       },
  //       params: {
  //         q: searchTerms,
  //       },
  //     });

  //     console.log(response.data); //gives all the available breed
  //     setDogData(response.data);

  //     //}
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const handleSearchInputChange = (e) => {
  //   const newSearchTerm = e.target.value;
  //   setSearchTerm(newSearchTerm);
  //   debouncedSearch(newSearchTerm);
  // };


  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <br />
      {/* <input
        type="text"
        name="searchTerm"
        placeholder="Enter dog breed"
        value={searchTerm}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
      <br /> */}


      {/* {results.map((result) => {
        return (
          <div> */}
      {/* <p>
              <img src={result.url} width="400" height="400" alt="dog" />;
            </p> */}

      {/* <p>
              Breed: {result.name}
            </p>
            <p>
              {result.height.imperial} inches tall at the shoulders
            </p>
            <p>
              Lives for {result.life_span} years
            </p>
            <p>
              {result.bred_for}
            </p>
            <hr />
          </div>
        );
      })} */}
      {/* =================================================================== */}
      {/* <div className="input-wrapper">
        <FaSearch id="search-icon" />
        <input
          type="text"
          placeholder="Enter a breed name"
          onChange={handleSearchInputChange}
          //onChange={debouncedOnChange}
          value={searchTerm}
        />
      </div> */}
      {/* =================================================================== */}
      {/* <button onClick={handleSearch}>Search</button> */}

      {/* {breedData && (
        <div>
          <h2>Breed: {breedData.name}</h2>
          <p>Height: {breedData.height.imperial} tall at the shoulders</p>
          <p>Lifespan: {breedData.life_span}</p>
          <img src={breedData.image.url} width="300" height="300" alt={breedData.name} />
        </div>
      )} */}

      {/* {results.map((result) => {
        return (
          <div>
            <h2>Name: {result.name}</h2>
            <h3>Height: {result.height.imperial} inches tall at the shoulders</h3>
            <h3>Lifespan: {result.life_span}</h3>
            <img src={result.image.url} width="500" height="360" alt={result.name} />
            <hr />
          </div>
        )
      })

      } */}

      <SearchBar />

      {/* <ul className="list-style">
        {dogData.map((dog) => {
          if (!dog.image) {
            console.log(dog)
            return
          }
          return (
            <li key={dog.id}>
              <div>
                <h2>Name: {dog.name}</h2>
                <h3>Height: {dog.height.imperial} inches tall at the shoulders</h3>
                <h3>Lifespan: {dog.life_span}</h3>
                <img src={dog.image.url} width="500" height="360" />
                <hr />
              </div>
            </li>

          )
        })}
      </ul> */}



    </div>
  );
}



