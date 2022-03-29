import React, {useState, useEffect} from 'react'
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { FormContainer, Surname, FirstName, FormWrapper, FormWrap, SelfWish } from './FormStyle'
import {createWish} from '../../actions/wish'
import {
  makeStyles,
  TextField,
  Button,
  CircularProgress,
} from "@material-ui/core";
import {api_url} from '../../apiConfig'

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      // width: "50ch",
      width: "100%",
    },
    buttonProgress: {
      color: "#fff",
      position: "absolute",
      top: "50%",
      left: "50%",
      marginTop: -12,
      marginLeft: -12,
    },
  },
}));


function Form () {
  const classes = useStyles();
//   const history = useHistory();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.users?.loading);
  const [inputs, setInputs] = useState({
    name: "",
    wish: "",
  });
  const [errors, setErrors] = useState({});
  const [ submitted, setSubmitted ] = useState( false );
    
    // run validation on every reload
    useEffect( () => {
    handleValidate(inputs);
  }, [inputs]);
    
    // handle submit
    function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    if (handleValidate(inputs)) {
      dispatch( createWish( inputs, navigate ) );
    }
    }
      
    const clearInput = ()=>{
      
  }
  
  // route site
  // const routeSite = () => {
  //   let path = `${ api_url }/precious/wishes`;
  //   console.log(path)
  //   navigate(path)
  // }
    
    // validate all input
    function handleValidate(values) {
    let errors = {};
    let isValid = true;
    if (!values["name"]) {
      isValid = false;
      errors["name"] = "Please enter your name";
    }
    if (!values["wish"]) {
      isValid = false;
      errors["wish"] = "Please enter your wish.";
    }
    setErrors(errors);
    return isValid;
  }

  return (
      <FormContainer>
          <FormWrap>
              <Surname>happy birthday</Surname>
              <FirstName>precious onuegbu</FirstName>
              <SelfWish>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus bibendum porta leo vitae volutpat. Curabitur eu ligula ac nulla vulputate lacinia vel vel tellus. Fusce sed velit enim.
              </SelfWish>
              
              <FormWrapper>
                <form className={ classes.root } onSubmit={handleSubmit}>
                    <TextField
                    style = {{width: '100%'}}
                    id="outlined-basic"
                    variant="outlined"
                    type="text"
                    size="large"
                    name="name"
                    label="Name"
                    value={inputs.name}
                    // onChange={handleChange}
                    onChange={(e)=>{setInputs({...inputs, name: e.target.value})}}
                    fullWidth
                    />
                    <TextField
                    style = {{width: '100%'}}
                    id="outlined-multiline-static"
                    variant="outlined"
                    type="text"
                    multiline
                    rows={10}
                    fullWidth
                    name="wish"
                    label="Write Your Wish"
                    value={inputs.wish}
                    // onChange={handleChange}
                    onChange={(e)=>{setInputs({...inputs, wish: e.target.value})}}
                    />
                    <Button
                    id="myButton"
                    style = {{width: '100%'}}
                    // disabled={loading}
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    
                    // onClick={routeSite}
                    >
                    Submit
                  </Button>
                    {loading && (
                      <CircularProgress size={24} className={classes.buttonProgress} />
                    )}
                  </form>
            </FormWrapper>
          </FormWrap>
      </FormContainer>
  )
}

export default Form