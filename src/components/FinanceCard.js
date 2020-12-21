import {
  Paper,
  Grid,
  Typography,
  IconButton,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CardHeader from "./CardHeader";
import EmojiTransportationRoundedIcon from "@material-ui/icons/EmojiTransportationRounded";
import { FilterNone } from "@material-ui/icons";

const useStyles = makeStyles(() => ({
  root: {
    paddingLeft: 10,
  },
  instruction: {
    fontSize: 9,
  },
  content: {
    display: "flex",
    paddingTop: 10,
    paddingBottom: 10,
  },
  contentleft: {
    width: "70%",
  },
  contentright: {},
  blue: {
    color: "blue",
  },
  textField: {
    background: "#e7e4ef",
    border: "none",
    marginTop: 10,
    marginBottom: 10,
    padding: 4,
    fontWeight: 300,
    fontSize: 20,
    width: "80%",
    borderRadius: 5,
    outline: "none",
  },
}));
export default function FinanceCard({ title, instruction }) {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6}>
      <Paper className={classes.root}>
        <CardHeader title="Asset Balance" />
        <div className={classes.content}>
          <div className={classes.contentleft}>
            <Typography className={classes.instruction}>
              Enter Amount :{" "}
            </Typography>
            <input type="text" className={classes.textField} />
            <Typography className={classes.instruction}>
              Last updated :{" "}
            </Typography>
          </div>
          <div className={classes.contentright}>
            <IconButton edge="end" aria-label="more">
              <EmojiTransportationRoundedIcon color="primary" />
            </IconButton>
          </div>
        </div>
      </Paper>
    </Grid>
  );
}
