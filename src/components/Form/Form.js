import React, {useState, useEffect} from 'react'
// import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { FormContainer, Surname, FirstName, FormWrapper, FormWrap, SelfWish } from './FormStyle'
import {createWish} from '../../actions/wish'
import {
  makeStyles,
  TextField,
  Button,
} from "@material-ui/core";
// import {api_url} from '../../apiConfig'

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
      alert( "Successfully Sent" );
      dispatch( createWish( inputs) );
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
              <SelfWish>Birthdays happen once every year. Am happy to celebrate another one with my family, love ones and friends. More grace to me. 🎂🥂
              </SelfWish>
              
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
                  onSubmit={handleSubmit}>
                    <TextField
                    style = {{width: '100%'}}
                    id="outlined-basic"
                    variant="outlined"
                    type="text"
                    size="small"
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
                    rows={6}
                    // fullWidth
                    name="wish"
                    label="Write Your Wish"
                    value={inputs.wish}
                    // onChange={handleChange}
                    onChange={(e)=>{setInputs({...inputs, wish: e.target.value})}}
                    />
                    <Link to='/wishes' style={{ textDecoration: 'inherit'}}>
                    <Button
                    id="myButton"
                    style = {{width: '100%'}}
                    // disabled={loading}
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    
                    // onClick={()=>{
                    //   if ( handleValidate( inputs ) ) {
                    //     alert("Your wish was sent successfully")
                    //   }
                    // }
                    // }
                    >
                    Submit
                  </Button>
                  </Link>
                    <Link to='/' style={{ textDecoration: 'inherit'}}>
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
      </FormContainer>
  )
}

export default Form