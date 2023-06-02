import React, { useEffect, useState } from 'react';
import './index.scss';
import Phone from "../../assets/images/phone.svg";
import Mail from "../../assets/images/mail.svg";
import LinkedIn from "../../assets/images/linkedin.svg"
import Spotify from "../../assets/images/spotify.svg"

const Home = () => {
  const shortenText = (label, len) => {
    return label.length > len ? label.substring(0, len) + "..." : label;
  }
  return (
    <div className="home-wrapper">
      {Galleries.map((gallery, index) => (
        <div className="card-wrapper" key={index}>
          <div className="card-header">
            <div className="card-upper-section">
              <span className="name">{gallery.name}</span>
              <img src={Phone} alt="phone" />
              <img src={Mail} alt="main" />
              <div className="splitter" />
              <img src={LinkedIn} alt="linkedin" />
            </div>
            <div className="card-below-section">
              <span className="title">{gallery.current_title}</span>
              <span className="location">{gallery.location}</span>
            </div>
          </div>
          <div className="card-content">
            <div className="experience-section">
              <span>Experience</span>
              <div className="experience-wrapper">
                {gallery.experience.map((exp, index, all) => (
                  <div className={`experience ${all.length-1 > index? "isNotLast" : ""}`}>
                    <img src={Spotify} alt="mail" />
                    <span>{shortenText(exp, 42)}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="experience-section education-section">
              <span>Education</span>
              <div className="experience-wrapper">
                {gallery.education.map((exp, index, all) => (
                  <div className={`experience ${all.length-1 > index? "isNotLast" : ""}`}>
                    <img src={Spotify} alt="mail" />
                    <span>{shortenText(exp, 40)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Home;

const Galleries =
  [
    {
      name: "James Hiddleston",
      first_name: "James",
      last_name: "Hiddleston",
      current_title: "Machine Learning Engineer",
      location: "San Francisco Bay Area",
      phone_number: "+18888888",
      personal_email: "hiddle@work.email",
      linkedIn: "https://linkedin/jameshiddelston",
      experience: [
        "Senior Machin Learning Engineer at Google Opera",
        "Junior Machine Learning Engineer at Spoity Junior Group",
        
      ],
      education: [
        "Stanford University, M.S., Computer Science Opera Group"
      ]
    },
    {
      name: "James Hiddleston",
      first_name: "James",
      last_name: "Hiddleston",
      current_title: "Machine Learning Engineer",
      location: "San Francisco Bay Area",
      phone_number: "+18888888",
      personal_email: "hiddle@work.email",
      linkedIn: "https://linkedin/jameshiddelston",
      experience: [
        "Senior Machin Learning Engineer at Google Opera",
        "Junior Machine Learning Engineer at Spoity Junior Group",
        
      ],
      education: [
        "Stanford University, M.S., Computer Science Opera Group"
      ]
    },
    {
      name: "James Hiddleston",
      first_name: "James",
      last_name: "Hiddleston",
      current_title: "Machine Learning Engineer",
      location: "San Francisco Bay Area",
      phone_number: "+18888888",
      personal_email: "hiddle@work.email",
      linkedIn: "https://linkedin/jameshiddelston",
      experience: [
        "Senior Machin Learning Engineer at Google Opera",
        "Junior Machine Learning Engineer at Spoity Junior Group",
        
      ],
      education: [
        "Stanford University, M.S., Computer Science Opera Group"
      ]
    },
    {
      name: "James Hiddleston",
      first_name: "James",
      last_name: "Hiddleston",
      current_title: "Machine Learning Engineer",
      location: "San Francisco Bay Area",
      phone_number: "+18888888",
      personal_email: "hiddle@work.email",
      linkedIn: "https://linkedin/jameshiddelston",
      experience: [
        "Senior Machin Learning Engineer at Google Opera",
        "Junior Machine Learning Engineer at Spoity Junior Group",
        
      ],
      education: [
        "Stanford University, M.S., Computer Science Opera Group"
      ]
    }
  ]