import React, { useState } from "react";
import pwimg from "./Images/Generated-password.png";
import gmimg from "./Images/myGrandmasRecipeBox.png";
import wsimg from "./Images/work_day_scheduler.png";
import caimg from "./Images/AuctionSite.png";
import ProjectCard from "./ProjectCard";

const styles = {
  containerStyle: {
    maxWidth: "1000px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  mainStyle: {
    width: "100%",
  },
};

function Portfolio() {
  const [projects] = useState([
    {
      id: "1",
      title: "password generator",
      description: "",
      img: pwimg,
      deployedLink: "https://bkhandag.github.io/Random-Password-Generator/",
      githubLink: "https://github.com/bkhandag/Random-Password-Generator",
    },
    {
      id: "2",
      title: "My Grandmas Recipe Box",
      description: "",
      img: gmimg,
      deployedLink: "https://nbulger1.github.io/my-recipes/",
      githubLink: "https://github.com/nbulger1/my-recipes",
    },
    {
      id: "3",
      title: "Work Day Scheduler",
      description: "",
      img: wsimg,
      deployedLink: "https://bkhandag.github.io/work-day-scheduler/",
      githubLink: "https://github.com/bkhandag/work-day-scheduler",
    },
    {
      id: "4",
      title: "Car Auction",
      description: "",
      img: caimg,
      deployedLink: "https://exotic-car-auction-abln.herokuapp.com/",
      githubLink: "https://github.com/bkhandag/exotic-car-auctions",
    },
  ]);
  return (
    <div style={styles.mainStyle}>
      <h1>Portfolio</h1>
      <div style={styles.containerStyle}>
        {projects.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              title={project.title}
              img={project.img}
              description={project.description}
              deployed={project.deployedLink}
              github={project.githubLink}
            ></ProjectCard>
          );
        })}
      </div>
    </div>
  );
}

export default Portfolio;
