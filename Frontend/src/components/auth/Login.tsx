import React, { ReactElement } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Image from "../../assets/images/loginBackground.jpg";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Link } from "react-router-dom";

interface Props {}

const useStyles = makeStyles((theme) => ({
  backgroundContainer: {
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    minWidth: "100vh",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    opacity: "50%",
  },
  textFieldContainer: {
    padding: "10px",
  },
  textField: {
    padding: "5px",
  },
  linkContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

function Login(props: Props): ReactElement {
  const classes = useStyles();
  return (
    <div className={classes.backgroundContainer}>
      <div>
        <Paper className={classes.paper}>
          <div className={classes.textFieldContainer}>
            <div>
              <TextField
                className={classes.textField}
                id="username"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div>
              <TextField
                className={classes.textField}
                type="password" //{values.showPassword ? 'text' : 'password'}
                id="password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <VpnKeyIcon />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        //onClick={handleClickShowPassword}
                        //onMouseDown={handleMouseDownPassword}
                      >
                        {/* {values.showPassword ? <Visibility /> : <VisibilityOff />} */}
                        <Visibility />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div className={classes.linkContainer}>
              <div>
                <p>Don't have an account? </p>
              </div>
              <div>
                <Link to="/registration">Register Here!</Link>
              </div>
            </div>
          </div>
        </Paper>
      </div>
    </div>
  );
}

export default Login;
