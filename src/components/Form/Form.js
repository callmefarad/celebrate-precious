import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { FormContainer, Surname, FirstName, FormWrapper, FormWrap, SelfWish, Text1 } from './FormStyle'
import {createWish} from '../../actions/wish'
import {
  makeStyles,
  TextField,
  Button,
} from "@material-ui/core";
import Footer from "../Footer/Footer"

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
  const [inputs, setInputs] = useState({
    name: "",
    wish: "",
  });
  const [errors, setErrors] = useState({});
    
    // run validation on every reload
    useEffect( () => {
    handleValidate(inputs);
  }, [inputs]);
    
    // handle submit
    function handleSubmit(e) {
    e.preventDefault();
    if (handleValidate(inputs)) {
      // echo a message upon submit
      alert( "Successfully Sent" );
      // send the data to the database
      dispatch( createWish( inputs ) )
      navigate('/wishes')
      }
    }
      
  //   const clearInput = ()=>{
  //     setInputs( { name: "", wish: "" } );
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
              <FormWrapper>
                <form 
                style={{
                  alignSelf: 'center', 
                  // backgroundColor: "red", 
                  width: "100%", 
                  display: "flex", 
                  flexDirection: "column", 
                  alignItems: "center"
                  }} 
                  className={ classes.root } 
                  onSubmit={handleSubmit}
                  >
                    <TextField
                    style = {{width: '100%'}}
                    id="outlined-basic"
                    variant="outlined"
                    type="text"
                    size="small"
                    name="name"
                    label="Name"
                    value={inputs.name}
                    onChange={(e)=>{setInputs({...inputs, name: e.target.value})}}
                    fullWidth
                    />
                    <TextField
                    style = {{width: '100%'}}
                    id="outlined-multiline-static"
                    variant="outlined"
                    type="text"
                    multiline
                    rows={6}
                    name="wish"
                    label="Write Your Wish"
                    value={inputs.wish}
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
                    >
                    Submit
                  </Button>
                    <Link to='/career' style={{ textDecoration: 'inherit'}}>
                    <Button
                    id="myButton"
                    style = {{width: '100%'}}
                    // disabled={loading}
                    type="submit"
                    variant="contained"
                    color="secondary"
                    size="large"
                    >
                    Support my career
                  </Button>
                  </Link>
                  </form>
            </FormWrapper>
          </FormWrap>
          <Footer />
      </FormContainer>
  )
}

export default Form