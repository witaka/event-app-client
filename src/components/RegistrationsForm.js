import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Registration from "../requests/registration";

const RegistrationsForm = (props) => {
  const [ form, setForm ] = React.useState({});
  const [ errors, setErrors ] = React.useState({});
  const [ checkbox, setCheckbox ] = React.useState(false);

  const setField = (field, value) => {
    setForm({...form,[field]: value});

    if ( !!errors[field] ) { 
      setErrors({...errors,[field]: null});
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    const newErrors = findFormErrors();
    if ( Object.keys(newErrors).length === 0 ) {
      Registration.create(form).then(({ id }) => {
        console.log("id", id)
        props.history.push(`/registrations/${id}`);
      });
    }
    setErrors(newErrors)
  }

  const findFormErrors = () => {
    const { firstName, lastName, age, email, country } = form;
    const newErrors = {};
    
    if ( !firstName || firstName === '' ) { newErrors.firstName = 'cannot be blank!'};
    if ( !lastName || lastName === '' ) { newErrors.lastName = 'cannot be blank!'};
    if ( !age || age === '' ) { newErrors.age = 'cannot be blank!'};
    if ( !country || country === '' ) { newErrors.country = 'cannot be blank!'};
    if ( !email || email === '' ) { newErrors.email = 'cannot be blank!'};
    
    return newErrors;
  }

  const handleCheckboxChange = () => setCheckbox(!checkbox);

  const submitButton = () => {
    if (checkbox) {
      return (
        <>    
          <Button variant="primary" type="submit"  onClick={handleSubmit} >
            Submit
          </Button>
        </>
      );
    }
    
    return (
      <>
        <Button variant="primary" type="submit" disabled onClick={handleSubmit} >
          Submit
        </Button>
      </>
    );
  }

  return (
    <>
      <h1>Please register for this event!</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="col-sm-5 mb-2" controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="First Name"
            onChange={ e => setField('firstName', e.target.value) }  
            isInvalid={ !!errors.firstName }  
          />
        </Form.Group>

        <Form.Group className="col-sm-5 mb-2" controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Last Name" 
            onChange={ e => setField('lastName', e.target.value) }
            isInvalid={ !!errors.lastName }  
          />
        </Form.Group>

        <Form.Group className="col-sm-5 mb-2" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Enter email" 
            onChange={ e => setField('email', e.target.value) }
            isInvalid={ !!errors.email }      
          />
        </Form.Group>

        <Form.Group className="col-sm-5 mb-2" controlId="country">
          <Form.Label>Country</Form.Label>
          <Form.Control 
            type="number selection" 
            placeholder="Country" 
            onChange={ e => setField('country', e.target.value) }
            isInvalid={ !!errors.country }    
          />
        </Form.Group>

        <Form.Group className="col-sm-5 mb-2" controlId="phoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control 
            type="number selection" 
            placeholder="Phone Number" 
            onChange={ e => setField('phoneNumber', e.target.value) }    
          />
        </Form.Group>

        <Form.Group className="col-sm-5 mb-2" controlId="age">
          <Form.Label>Age</Form.Label>
          <Form.Control 
            type="number" 
            placeholder="Age" 
            onChange={ e => setField('age', e.target.value) }    
          />
        </Form.Group>

        <Form.Group className="col-sm-5 mb-2" controlId="formBasicCheckbox">
          <Form.Check 
            type="checkbox" 
            label="I certify that I am at least 18 years or older." 
            onChange={handleCheckboxChange}
          />
        </Form.Group>
        
        {submitButton()}

      </Form>
    </>
  );
}

export default RegistrationsForm;
