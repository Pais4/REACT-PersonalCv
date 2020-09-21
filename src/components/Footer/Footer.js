/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { Button, List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <Button justIcon link className={classes.block} href="https://www.instagram.com/_teolopera/" target="_blank">
                <i className={"fab fa-instagram"} />
              </Button>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Button justIcon link className={classes.block} href="https://www.linkedin.com/in/mateo-serna-795a85199/" target="_blank">
                <i className={"fab fa-linkedin"} />
              </Button>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Button justIcon link className={classes.block} href="https://github.com/pais4" target="_blank">
                <i class="fab fa-github" />
              </Button>
            </ListItem>
            
          </List>
        </div>
        
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
