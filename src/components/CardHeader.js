import { Typography, Divider, IconButton } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  title: {
    display: "inline-block",
    fontSize: 13,
    width: "85%",
    wordBreak: "break-all",
  },
  icon: {
    display: "inline-block",
    padding: 5,
  },
  divider: {
    marginLeft: -10,
  },
}));
export default function FinanceCard({ title }) {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.title}>{title}</Typography>
      <IconButton edge="end" aria-label="more" className={classes.icon}>
        <MoreHorizIcon />
      </IconButton>
      <Divider className={classes.divider} />
    </div>
  );
}
