import React, { useState, useReducer, useEffect } from "react";
import Layout from "./shared/Layout";
import { Button, Container, Form, Navbar,  } from "react-bootstrap";
import AuthService from "../services/auth";
import { useParams } from "react-router-dom";
// import { useNavigate, useParams } from "react-router-dom";
//Import reducer function to be used my useReducer hook
import { reducer } from "../reducers/editProfile";


const EditProfile = () => {
  //Invoking Params and Navigate method from react-router-dom
//   let navigate = useNavigate();
  const params = useParams();


  //Initial states (useReducer hook to handle Change and show initial values)
  let initialState = {
    firstname: '',
    lastname: '',
    email: '',
    matricNumber: '',
    program: '',
    graduationYear: '',
    profilePicture: '',
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
    error: []
  }

//   let initialState2 = {
//     currentPassword: '',
//     newPassword: '',
//     confirmNewPassword: '',
//     error: []
//   }

 //State for Programs and Graduation Years API
 const [programData, setProgramData ] = useState([]);
 const [gradYearData, setGradYearData] = useState([])



let userId = params.id;
useEffect(() => {
  const { getCurrentUser } = AuthService;
  console.log(`The User Id is ${userId}`);
  const user = getCurrentUser();
  console.log("The user is: ", user)

  //Run the dispatch function which loads our details
  dispatch({type: 'loadProfileDetails', data:user})

  fetch('/api/programs').then(async (resp) => {
      const data = await resp.json();
      setProgramData(data);
  })
  fetch(`/api/graduationYears`).then(async (resp) => {
      const data = await resp.json();
      setGradYearData(data);
  })
  
}, [userId])

//Invoking the useReducer hook and extracting input elements from our state
const [state, dispatch] = useReducer(reducer, initialState);
let { firstname, lastname, email, matricNumber, program, graduationYear, currentPassword, newPassword, confirmNewPassword, } = state;

  const handleInputChange = (evt) => {
    let { name, value } = evt.target;
    console.log(`${name} : ${value}`);
    value =value.trim()

    dispatch({ type: 'field', fieldName:name, payload: value})

  }

  //Handle Update Profile function
  const handleUpdateUserProfile = (evt) => {
    evt.preventDefault();
    console.log("handle Update User profile")
    
  }
  //Handle Update Password function
  const handleUpdatePassword = (evt) => {
    evt.preventDefault();
    console.log("handle Update User password")
    
  }


//Handle Delete User
const handleShow = (evt) => {
    console.log("Delete user clicked")
}
  


  return (
    <Layout>
      <Container>

        <nav className="container" id="headerNav">
            <div>
              <h1 id="project_name">
                <span id="user_name"> {`${firstname} ${lastname}`} </span>
                  <small> {email} </small>
                </h1>
            </div>

            <Navbar collapseOnSelect expand="md" style={{backgroundColor: "lightgray"}}>
              <Container>

              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                
              <nav className="container">
                <div className="row align-items-center">
                  <div className="col-md-10">
                    <div className="row">
                    
                      <div className="col-md-4">
                        Program
                        <p> <strong>{program}</strong></p>
   
                      </div>

                      <div className="col-md-4">
                        Matriculation Number
                        <p> {matricNumber} </p>
                      </div>

                      <div className="col-md-4">
                        Graduation Year
                        <p> {graduationYear}</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-2">
                      <button className="btn btn-danger" onClick={handleShow}> Delete Account </button>
                  </div>
                </div>
              </nav>

              </Navbar.Collapse>
              </Container>
            </Navbar>
           
        </nav>

        <section className="container">
            <div className="row">
                <div className="col-md-12 update_profile" id="update_profile" style={{marginTop:'15px'}}>
                  <h4>Update Profile</h4>
                  <hr></hr>
                  
                  <div className="container">
 
                    {/* <Form action={`/editProfile/${user._id}?_method=PUT`} method="post" encType={'multipart/form-data'}> */}
                    <Form onSubmit={handleUpdateUserProfile} encType={'multipart/form-data'}>

                            <div className="row mx-5 my-3">

                                <div className="row col-md-12">

                                    <Form.Group className="col-md-6">

                                        <Form.Label> First Name </Form.Label>
                                        <Form.Control type="text" name="firstname" value={firstname} placeholder="Enter your First Name" onChange={handleInputChange} required/>
                                        
                                    </Form.Group>

                                    <Form.Group className="col-md-6">

                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="text" name="lastname" value={lastname} placeholder="Enter your Last Name" onChange={handleInputChange} required/>

                                    </Form.Group>

                                </div>

                                <div className="row col-md-12">
                                    <Form.Group controlId="Form.ControlInput2" className="col-md-6">

                                        <Form.Label>Email Address</Form.Label>
                                        <Form.Control type="email" name="email" value={email} onChange={handleInputChange} required />

                                    </Form.Group>

                                    <Form.Group controlId="Form.ControlSelect1" className="col-md-6">

                                        <Form.Label>Program</Form.Label>
                                        <Form.Control as="select" name="program" onChange={handleInputChange} >
                                        <option> {program}  </option>
                                        {programData &&
                                            programData.map((progData) => (
                                            <option key={progData}>{progData}</option>
                                        ))}
                                        </Form.Control>
                                    </Form.Group>

                                </div>

                                <div className="row col-md-12">

                                    <Form.Group controlId="Form.ControlInput1" className="col-md-6">

                                        <Form.Label>Matriculation Number</Form.Label>
                                        <Form.Control type="text" name="matricNumber" value={matricNumber} placeholder="Enter your matriculation number" onChange={handleInputChange} required/>

                                    </Form.Group>                          

                                    <Form.Group controlId="Form.ControlSelect2" className="col-md-6">

                                        <Form.Label >Graduation Year</Form.Label>

                                        <Form.Control as="select" name="graduationYear" onChange={handleInputChange}>
                                            <option>{graduationYear}</option>
                                            {gradYearData &&
                                                gradYearData.map((gradYData) => (
                                                <option key={gradYData}>{gradYData}</option>
                                                ))}
                                        </Form.Control>

                                    </Form.Group>

                                </div>

                                <div className="row col-md-12">
                                 
                                    <Form.Group controlId="formFile" className="mb-3 col-md-12">
                                        <Form.Label>Profile Picture</Form.Label>
                                        <Form.Control type="file" name="profilePicture" accept="image/png, image/jpeg, image/jpg"/>
                                       
                                    </Form.Group>
                                
                                </div>

                                <div className="row col-md-12">
                                
                                    <span className="col-md-12">
                                    <Button variant="primary" type="submit" className="">
                                        Update Profile
                                        </Button>
                                    </span>
                                    
                                </div>


                            </div>

                    </Form>

                  </div>
                </div>

              </div>

              <div className="row my-3">
                <div className="col-md-12">
                  <h4>Change Password</h4>
                  <hr></hr>                

                  <div className="container">
                      <Form onSubmit={handleUpdatePassword}>

                        <div className="row mx-5">
                            <div className="col-md-4">
                                <Form.Group>
                                    <Form.Label>Current Password</Form.Label>
                                    <Form.Control type="password" name="currentPassword" placeholder="Current Password" value={currentPassword} onChange={handleInputChange} required />
                                </Form.Group>
                            </div>
                           
                            <div className="col-md-4">
                                <Form.Group>
                                    <Form.Label>New Password</Form.Label>
                                    <Form.Control type="password" name="newPassword" placeholder="Your new Password" value={newPassword} onChange={handleInputChange} />
                                </Form.Group>
                            </div>
                          
                            <div className="col-md-4">
                                <Form.Group>
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control type="password" name="confirmNewPassword" placeholder="Confirm new Password" value={confirmNewPassword} onChange={handleInputChange} />
                                </Form.Group>
                            </div>
                        </div>
                        <div className="row mx-5 mt-2">
                        <Button variant="primary" type="submit" className="mx-3 col-md-2">
                            Change Password
                         </Button>
                        </div>
                      </Form>
                  </div>
                </div>
              </div>
  
              
        </section>

      </Container>
    </Layout>
  );
};

export default EditProfile;
