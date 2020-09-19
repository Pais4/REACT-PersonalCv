import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";
// core components
import CustomTabs from "components/CustomTabs/CustomTabs.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";

import platzi from "assets/img/platzi.jpg";
import udemy from "assets/img/udemy.png";
import bancolombia from "assets/img/bancolombia.png";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function SectionTabs() {
  const classes = useStyles();
  return (
    
      <div className={classes.container}>
        <div id="nav-tabs">
          <h3>Certificates</h3><br/>
        
          <CustomTabs
                headerColor="primary"
                tabs={[
                  {
                    tabName: "GIT",
                    tabIcon: Face,
                    tabContent: (
                      <div>
                        <Grid container spacing={3}>
                          <Grid item xs={6}>
                            <img src={platzi} className={classes.img}/>
                          </Grid>
                          <Grid item xs={6}>
                            <p className={classes.page}>
                              Udemy
                            </p>
                          </Grid>
                        </Grid>
                      </div>
                    )
                  },
                  {
                    tabName: "Bancolombia",
                    tabIcon: Face,
                    tabContent: (
                      <div>
                        <Grid container spacing={3}>
                          <Grid item xs={6}>
                            <img src={bancolombia} className={classes.img}/>
                          </Grid>
                          <Grid item xs={6}>
                            <p className={classes.page}>
                              Udemy
                            </p>
                          </Grid>
                        </Grid>
                      </div>
                    )
                  },
                  {
                    tabName: "Node JS",
                    tabIcon: Chat,
                    tabContent: (
                      <div>
                        <Grid container spacing={3}>
                          <Grid item xs={6}>
                            <img src={udemy} className={classes.img}/>
                          </Grid>
                          <Grid item xs={6}>
                            <p className={classes.page}>
                              Udemy
                            </p>
                          </Grid>
                        </Grid>
                      </div>
                    )
                  },
                  {
                    tabName: "React With Redux",
                    tabIcon: Build,
                    tabContent: (
                      <div>
                        <Grid container spacing={3}>
                          <Grid item xs={6}>
                            <img src={udemy} className={classes.img}/>
                          </Grid>
                          <Grid item xs={6}>
                            <p className={classes.page}>
                              Udemy
                            </p>
                          </Grid>
                        </Grid>
                      </div>
                    )
                  },
                  {
                    tabName: "React Native",
                    tabIcon: Build,
                    tabContent: (
                      <div>
                        <Grid container spacing={3}>
                          <Grid item xs={6}>
                            <img src={udemy} className={classes.img}/>
                          </Grid>
                          <Grid item xs={6}>
                            <p className={classes.page}>
                              Udemy
                            </p>
                          </Grid>
                        </Grid>
                      </div>
                    )
                  }
                ]}
              />
            
        </div>
      </div>
    
  );
}
