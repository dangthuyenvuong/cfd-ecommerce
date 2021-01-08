import { Slider, makeStyles } from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles({
  root: {
    color: "#6a983c",
  },
});
const FilterPrice = () => {
  const classes = useStyles();
  const [value, setValue]= useState([20, 37]);
  const handleChange = (event: any, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  return (
    <>
      <Slider
        className={classes.root}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
      />
      <div className="price">
        <div className="price--input">
          <h3>Min</h3>
          <input type="text" name="price-min" id="min" />
        </div>
        <div className="line"></div>
        <div className="price--input">
          <h3>Max</h3>
          <input type="text" name="price-max" id="max" />
        </div>
      </div>
      <div className="button-form">
        <div className="btn btn-buy">
          <span>Apply</span>
        </div>
        <div className="btn btn--more">
          <span>Reset</span>
        </div>
      </div>
    </>
  );
};

export default FilterPrice;
