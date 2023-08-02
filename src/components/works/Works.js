/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import "./Works.css";

// Import ../../assets/recentprojects/
import Loyal from "../../assets/projects/loyal.png";
import Autodesk from "../../assets/projects/autodesk.png";
import Smartsheet from "../../assets/projects/smartsheet.png";
import XqMsg from "../../assets/projects/xqmsg.png";
import Netbeez from "../../assets/projects/netbeez.png";
import Redwood from "../../assets/projects/redwood.png";

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: "100vw",
    marginTop: "3em",
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Loyal",
      description: `Built out a customer-facing website in the healthcare industry and produced a new customer experience.
      	Analyzed the application performance by avoiding unnecessary re-renderings and following the best practices like memorization hooks, lazy loading
      	Provided high user experience and web accessibility based on various UX principles and technologies like pixel-perfect & mobile responsibility
      	Built a dictionary of reusable, customizable components to accelerate development speed and maintainability using Storybook, MUI, React Custom Hooks
      	Developed a robust test suite surrounding the emotional heatmap application with the use of Jest and React Testing Library, achieving over 90% code coverage 
      	Worked in an agile environment and maintained effective team communication going through all phrases of SDLC
      `,
      alter: "React Portfolio",
      image: `${Loyal}`,
    },
    {
      id: 2,
      title: "Autodesk",
      description: `An advocacy project website built using
      MEAN stack with fact-checking tool to promote actions against
      fake news.`,
      alter: "VeriTru Project",
      image: `${Autodesk}`,
    },
    // {
    //   id: 3,
    //   title: "Smartsheet",
    //   description: `Logistics and Forwarding website built using
    //   ReactJS to design and develop its front-end.`,
    //   alter: "LoFo Project",
    //   image: `${Smartsheet}`,
    // },
    {
      id: 4,
      title: "XQ message Inc",
      description: `A website portfolio project for the Startup Dev Team
      built using MEVN stack to demonstrate the CRUD capabilities of the tech stack.`,
      alter: "Startup Project",
      image: `${XqMsg}`,
    },
    {
      id: 5,
      title: "Netbeez",
      description: `A website project for the La Calle Cafe business
      built using Wordpress and PHP with integrated SEO tools to help
      the business ramp up its prospects and lead generation.`,
      alter: "Startup Project",
      image: `${Netbeez}`,
    },
    {
      id: 6,
      title: "Redwood Software",
      description: `A website project for the La Calle Cafe business
      built using Wordpress and PHP with integrated SEO tools to help
      the business ramp up its prospects and lead generation.`,
      alter: "Startup Project",
      image: `${Redwood}`,
    },
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={project.id}>
            <div className="__img_wrapper">
              <img src={project.image} alt={project.alter} />
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={project.id + ". " + project.title} />
              </h3>
              <p className="description">{project.description}</p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
