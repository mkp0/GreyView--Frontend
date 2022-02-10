import { withStyles, TextField } from "@material-ui/core";

export const TextFieldCustom = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "black",
      fontWeight: "600",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "black",
      },
    },
  },
})(TextField);
