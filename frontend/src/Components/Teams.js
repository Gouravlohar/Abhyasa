import React from "react";
import TeamCard from "./TeamCard";
import profile1 from "../Assets/profile-1.png";
import profile2 from "../Assets/profile-2.png";
import profile3 from "../Assets/profile-3.png";
import profile4 from "../Assets/profile-4.png";
import "../Styles/Teams.css";

function Teams(){
    return (
        <div className="team-section" id="teams">
          <div className="t-title-content">
            <h3 className="t-title">
              <span>Meet Our Teams</span>
            </h3>

          </div>
    
          <div className="t-cards-content">
            <TeamCard
              img={profile1}
              name="Mr.Gourav Lohar"
              title=""
              stars="4.9"
              reviews="Machine Learning"
            />
            <TeamCard
              img={profile2}
              name="Mr.Tushar Kumar"
              title=""
              stars="4.8"
              reviews="Frontend"
            />
            <TeamCard
              img={profile3}
              name="Mr.Aditya Chauhan"
              title=""
              stars="4.7"
              reviews="Frontend"
            />
            <TeamCard
              img={profile4}
              name="Mr.Rahul Kumar Rawani"
              title=""
              stars="5.0"
              reviews="Full Stack"
            />
          </div>
        </div>
      );

}

export default Teams;