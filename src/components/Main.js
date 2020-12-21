import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BarChart from "./BarChart";
import { Paper, Grid, Typography, Divider } from "@material-ui/core";
import FinanceCard from "./FinanceCard";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  bar: {
    padding: theme.spacing(6),
  },
}));

export default function Main() {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper className={classes.bar}>
          <BarChart />
        </Paper>
      </Grid>
      <Grid item xs={8} sm={8}>
        <Grid container spacing={3}>
          <FinanceCard title="Asset Balance" />
          <Grid item xs={12} sm={6}>
            <Paper className={classes.bar}></Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.bar}></Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.bar}></Paper>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={4} sm={4}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <Paper className={classes.bar}></Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
