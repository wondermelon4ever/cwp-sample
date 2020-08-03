import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import getStyle from "./StyleCreator";

const useStyles = makeStyles({
  text: {
    color: "white",
    backgroundColor: "black",
  },
})

const styles = {
  text: {
    color: "white",
    backgroundColor: "black",
  },
}

class TestApp extends React.Component<any> {
  render() {
    return(
      <Box clone p={2} mx={2} my={5}>
        <Typography style={styles.text}>Test</Typography>
      </Box>
    );
  }
}

function TEST() {
  const classes = getStyle();
  return <Typography className={classes}>Test</Typography>
}
// export default function () {
//   const classes = useStyles()
//   return <Typography className={classes.text}>Test</Typography>
// }

export default TestApp;