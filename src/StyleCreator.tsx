import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  text: {
    color: "white",
    backgroundColor: "black",
  },
})

export default function getStyle() {
  return useStyles().text;
}