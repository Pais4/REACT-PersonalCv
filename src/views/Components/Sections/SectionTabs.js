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
                            <img src={platzi} className={classes.img} alt="Platzi"/>
                          </Grid>
                          <Grid item xs={6}>
                            <h4 className={classes.page}>
                              Curso profesional de Git y Github
                            </h4>
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
                            <img src={bancolombia} className={classes.img} alt="Bancolombia"/>
                          </Grid>
                          <Grid item xs={6}>
                            <h4 className={classes.page}>
                              Pasantía Grupo Bancolombia
                            </h4>
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
                            <img src={udemy} className={classes.img} alt="Udemy"/>
                          </Grid>
                          <Grid item xs={6}>
                            <h4 className={classes.page}>
                              Node: De cero a experto
                            </h4>
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
                            <img src={udemy} className={classes.img} alt="Udemy"/>
                          </Grid>
                          <Grid item xs={6}>
                            <h4 className={classes.page}>
                              React de cero a experto (Hooks y MERN)
                            </h4>
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
                            <img src={udemy} className={classes.img} alt="Udemy"/>
                          </Grid>
                          <Grid item xs={6}>
                            <h4 className={classes.page}>
                              Creando un TripAdvisor de Restaurantes
                            </h4>
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
