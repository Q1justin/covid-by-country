import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const SearchBox = (props) => {
  return (
    <Autocomplete
      id="country-select-demo"
      style={{ width: 600 }}
      options={props.countries}
      value = {props.covidData}
      onChange={(events, value) => {
          props.handleSearch(value.code)

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
  )
}

export default SearchBox;
