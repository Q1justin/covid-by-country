import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import classes from './SearchBox.module.css';

const SearchBox = (props) => {
  return (
    <div className = {classes.search}>
      <Autocomplete
        id="country-select-demo"
        style={{ width: 600 }}
        options={props.countries}
        onChange={(events, value) => {
          if(value !== null){
            props.handleSearch(value.code)
          }
          else{
            /*Some refresh to reset the graph*/
          }
        }}
        /*Displays how the options will be shown*/
        getOptionLabel={(option) => option.name}
        autoHighlight
        renderInput={(params) => (
          <TextField
            {...params}
            label="Choose a Country"
            variant="outlined"
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password", // disable autocomplete and autofill
            }}
          />
        )}
      />
    </div>
  )
}

export default SearchBox;
