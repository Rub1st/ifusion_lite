import React, { useState } from 'react'
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import { FormHelperText } from '@material-ui/core';

export const useStyles =
  makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
}));

export const SelectedInput = ({classes,object,attribute,collection,label, error=false, helperText=''}) => {
    return(
        <div>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={object.value}
                  onChange={object.onChange}
                >
                  {collection.map((el) => (
                    <MenuItem value={el}>{el[`${attribute}`]}</MenuItem>
                  ))}
                </Select>
                {
                  error ? (
                    <FormHelperText style={{color: 'red'}}>{helperText}</FormHelperText>
                  ) : null
                }
              </FormControl>
        </div>
    )
}

export const useCheckBox = (initialState) => {
    const [value, setValue] = useState(initialState);
    const handleChange = (e) => {
        setValue(e.target.checked);
    }
    return ({
        value,
        onChange: handleChange
    })
}

export const useInputText = (initialState) => {
    const [value, setValue] = useState();
    const handleChange = (e) => setValue(e.target.value);
    return ({
        value,
        onChange: handleChange,
    })
}

export const useDateTime = (initialState) => {
    const [value, setValue] = useState();
    const handleChange = (e) => setValue(e.target.value);
    return ({
        value,
        onChange: handleChange
    })
}

export const useSelectBox = (initialState) => {
    const [value, setValue] = useState(initialState);
    const handleChange = (e) => setValue(e.target.value);
    return ({
        value,
        onChange: handleChange
    })
}
