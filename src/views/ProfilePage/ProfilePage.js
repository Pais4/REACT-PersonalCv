import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import InfoIcon from '@material-ui/icons/Info';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Favorite from "@material-ui/icons/Favorite";
// core components

import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/faces/perfil.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
import SectionCarousel from "views/Components/Sections/SectionCarousel";
import CustomizedTimeline from "components/Timeline/CustomizedTimeline";
import MediaControlCard from "components/UiCard/MediaControlCard";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress";
import WorkTimeline from "components/WorkTimeline/WorkTimeline";
import SectionTabs from "views/Components/Sections/SectionTabs";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

  return (
    <div>
      <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Mateo Serna Lopera</h3>
                    <h6>Fullstack Developer</h6>
                    <Button justIcon link className={classes.margin5} href="https://www.instagram.com/_teolopera/" target="_blank">
                      <i className={"fab fa-instagram"} />
                    </Button>
                    <Button justIcon link className={classes.margin5} href="https://www.linkedin.com/in/mateo-serna-795a85199/" target="_blank">
                      <i className={"fab fa-linkedin"} />
                    </Button>
                    <Button justIcon link className={classes.margin5} href="https://github.com/pais4" target="_blank">
                    <i class="fab fa-github" />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
              Hi! I am Mateo Serna Lopera. FullStack Developer.
              Technology and development have been my passion since 
              i was a child, i'm constantly looking for grow in this 
              world of technology, improving my skills as a fullstack 
              developer and hibrid applications development.{" "}
              </p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "About me",
                      tabIcon: InfoIcon,
                      tabContent: (
                        <GridContainer justify="center">
                          <CustomizedTimeline />
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Education",
                      tabIcon: MenuBookIcon,
                      tabContent: (
                        <div>
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={6}>
                              <MediaControlCard 
                                title="Cesde" 
                                letter='C' 
                                study='Software development technician' 
                                time='2019 - 2020 - Studying last semester' 
                                />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                              <MediaControlCard 
                                title="ITM" 
                                letter='I' 
                                study='Systems Engineer' 
                                time='2020 - Currently studying' 
                                />
                            </GridItem>
                          </GridContainer>
                          <SectionTabs />
                        </div>
                      )
                    },
                    {
                      tabButton: "Skills",
                      tabIcon: Favorite,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={6}>
                          <div className={classes.title}>
                            <h4>JavaScript - Html - Css</h4>
                          </div>
                          <CustomLinearProgress
                            variant="determinate"
                            color="default"
                            value={80}
                          />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <div className={classes.title}>
                              <h4>React With Redux</h4>
                            </div>
                            <CustomLinearProgress
                              variant="determinate"
                              color="rose"
                              value={60}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                          <div className={classes.title}>
                            <h4>React Native</h4>
                          </div>
                          <CustomLinearProgress
                            variant="determinate"
                            color="info"
                            value={60}
                          />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <div className={classes.title}>
                              <h4>Node Js</h4>
                            </div>
                            <CustomLinearProgress
                              variant="determinate"
                              color="warning"
                              value={70}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                          <div className={classes.title}>
                            <h4>Python</h4>
                          </div>
                          <CustomLinearProgress
                            variant="determinate"
                            color="success"
                            value={50}
                          />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <div className={classes.title}>
                              <h4>Java</h4>
                            </div>
                            <CustomLinearProgress
                              variant="determinate"
                              color="primary"
                              value={40}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <div className={classes.title}>
                              <h4>GIT</h4>
                            </div>
                            <CustomLinearProgress
                              variant="determinate"
                              color="danger"
                              value={80}
                          />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <div className={classes.title}>
                              <h4>Angular</h4>
                            </div>
                            <CustomLinearProgress
                              variant="determinate"
                              color="default"
                              value={50}
                          />
                          </GridItem>
                          
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Work experience",
                      tabIcon: InfoIcon,
                      tabContent: (
                        <GridContainer justify="center">
                          <WorkTimeline /> 
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Portfolio",
                      tabIcon: InfoIcon,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem >
                            <SectionCarousel />
                          </GridItem>
                          {/* <GridItem xs={12} sm={12} md={4}>
                            
                          </GridItem> */}
                        </GridContainer>
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
