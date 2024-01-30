import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import { Link } from "react-router-dom";
import { Grid } from "react-loader-spinner";
const Home = () => {
  // storing the data
  let [data, setData] = useState([]);
  // storing filter data
  let [suggest, SetSuggest] = useState([]);
  let [loader, setLoader] = useState(true);

  // Fetching data from API
  useEffect(() => {
    axios
      .get("https://reactnd-books-api.udacity.com/books", {
        headers: { Authorization: "whatever-you-want" },
      })
      .then((res) => {
        setData(res.data.books);
        SetSuggest(res.data.books);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoader(false);
      });
  }, []);

  // console.log(data)
  // function for handle changes in searchbox
  let handlechange = (e) => {
    // console.log(e.target.value)
    SetSuggest(
      data.filter((el) =>
        el.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
    // console.log(suggest[0])
  };

  return (
    <div className="container">
      <nav className="navbar">
        <ul>
          {/* logo */}
          <Link to="/" className="logo">
            <li>Kalvium Books</li>
          </Link>
          <li>
            {/* search box */}
            <input
              className="search"
              type="text"
              placeholder="Search"
              list="books"
              onChange={handlechange}
            />
          </li>
          <li>
            {/* register button */}
            <Link to="./register">
              <button className="registerbtn">Register</button>
            </Link>
          </li>
        </ul>
      </nav>
      {/* drop down menu for search box */}
      <datalist id="books">
        {suggest.map((el) => (
          <option key={el.id} value={el.title}></option>
        ))}
      </datalist>

      {/* loader */}
      {loader && (
        <div className="load">
          <Grid
            visible={true}
            height="80"
            width="80"
            color="red"
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperStyle={{}}
            wrapperClass="grid-wrapper"
          />
        </div>
      )}
      {/* book tile container */}
      <div className="books-container">
        {suggest.map((el) => (
          <div key={el.id} className="books">
            <div className="book-content">
              <img src={el.imageLinks.smallThumbnail} alt="" />
              <h3>{el.title}</h3>
              <p>
                {(el.averageRating && el.averageRating + "⭐") || 2.1 + "⭐"}
              </p>
              <p>Free</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
