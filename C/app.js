import React, { useState } from "react";
import { Nav, Navbar } from "reactstrap";
import { Select, MenuItem } from "@mui/material";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import Site from "./Component/site";
import logo from './logo.svg';
import './App.css';


function App() {
  
  const [city, setCity] = useState("Delhi");
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const courses = [
    "Artificial Intelligence (AI)",
    "Cloud Computing",
    "Software Development",
    "Cybersecurity",
    "Data Analytics",
    "Generative AI (GenAI)",
    "Machine Learning",
    "UI / UX Design",
    "Project Management",
  ];

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 0) {
      const filtered = courses.filter((course) =>
        course.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = (course) => {
    setQuery(course);
    setSuggestions([]);
  };

  return (
    <div>
      <Nav>
      <Navbar
  style={{
    position: "fixed",    // use fixed to stay always on top
    top: 0,
    left: 0,
    right: 0,
    zIndex: 9999,         // ensures it is above other content
    backgroundColor: "#f8f8f8",
    padding: "10px 40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
  }}
>
          <div style={{ display: "flex", alignItems: "center", padding: "10px 20px", justifyContent: "space-between", width: "100%" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <h1 style={{ marginLeft: "-44px" }}>Vantara</h1>

              <Select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                style={{
                  padding: '9px 15px',
                  border: '1px solid #ccc',
                  borderRadius: '8px',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                  fontFamily: 'sans-serif',
                  fontSize: '16px',
                  width: '150px'
                }}
              >
                <MenuItem value="Mumbai">Mumbai</MenuItem>
                <MenuItem value="Delhi">Delhi</MenuItem>
                <MenuItem value="Bangalore">Bangalore</MenuItem>
              </Select>
            </div>

            <div
              style={{
                 position: "relative",
                display: "flex",
                alignItems: "center",
                gap: "25px"
              }}
            >
              <span style={{ fontSize: "18px", cursor: "pointer" }}>
                Focus areas
              </span>
              <span style={{ fontSize: "18px", cursor: "pointer" }}>
                How we work
              </span>
              <span style={{ fontSize: "18px", cursor: "pointer" }}>
                News and insights
              </span>
              <span style={{ fontSize: "18px", cursor: "pointer" }}>About</span>
             <div style={{ position: "relative", width: "250px" }}>
  {/* Search Input */}
  <input
    type="search"
    placeholder="Search for Opportunity"
    value={query}
    onChange={(e) => {
      setQuery(e.target.value);

      if (e.target.value.length > 0) {
        const filtered = courses.filter((course) =>
          course.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setSuggestions(filtered);
      } else {
        setSuggestions([]); // hide suggestions if input is empty
      }
    }}
    style={{
      padding: "9px 15px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      fontFamily: "sans-serif",
      fontSize: "16px",
      width: "100%",
    }}
  />

  {/* Show suggestions only if there are results */}
  {suggestions.length > 0 && (
    <ul
      style={{
        position: "absolute",
        top: "100%",
        left: 0,
        width: "100%",
        background: "white",
        border: "1px solid #ccc",
        borderRadius: "6px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        listStyle: "none",
        margin: 0,
        padding: "5px 0",
        maxHeight: "100px", // small height
        overflowY: "auto",
        zIndex: 1000,
      }}
    >
      {suggestions.map((course, index) => (
        <li
          key={index}
          onClick={() => {
            setQuery(course);
            setSuggestions([]); // hide after selecting
          }}
          style={{
            padding: "6px 12px",
            cursor: "pointer",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#f0f0f0")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "white")}
        >
          {course}
        </li>
      ))}
    </ul>
  )}
</div>

            </div>
          </div>
        </Navbar>
      </Nav>

      <div style={{ marginTop: "-12px", position: "relative", width: "100%", height: "100vh",paddingTop:"120px" }}>
        <img
          src="https://img.freepik.com/premium-photo/two-young-asian-female-students-are-enjoying-talking-while-walking-footpath-their-campus_67155-41724.jpg"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          alt="Background"
        />

        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "35%",
            transform: "translate(-50%, -50%)",
            textAlign: "left",
            width: "70%"
          }}
        >
          <h1 style={{ fontSize: "120px", fontWeight: "bold", color: "white", lineHeight: "1.1" }}>
            Floating Route<br />
            <span style={{ marginLeft: "30px" }}>Connection &</span><br />
            <span style={{ marginLeft: "120px" }}>Education</span>
          </h1>
        </div>

        <div
          style={{
            position: "absolute",
            top: "85%",
            left: "79%",
            transform: "translate(-50%, -50%)",
            textAlign: "left",
            width: "70%"
          }}
        >
          <p
            style={{
              color: "white",
              fontSize: "26px",
              lineHeight: "1.5",
              marginLeft: "-100px"
            }}
          >
            At Vantara Education Foundation, we're <br />focused on a goal: helping
            clear the path <br />between education and work, especially for <br />those with
            the most standing in their way.<br/>
            <Button color="primary" size="larg" style={{marginLeft:"180px", color: "white"}}outline >Tap Detail </Button>
          </p>
        </div>
      </div>
      <Site />
    </div>
  );
}

export default App;