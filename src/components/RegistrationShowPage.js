import React from "react";
import Registration from "../requests/registration";
import Badge from 'react-bootstrap/Badge';
import ReactCountryFlag from "react-country-flag";

const RegistrationShowPage = (props) => {
    const [ loading, setLoading ] = React.useState(true);
    const [ registration, setRegistration ] = React.useState({});

    React.useEffect(() => {
      const id = props.match.params.id;
      
      Registration.one(id).then(registration => {
        setRegistration(registration);
        setLoading(false);
      });
    }, []);

    if (loading) {
        return (<div>Loading ...</div>)
    }

    return (
      <div>
        <h1>Thanking user for their registration ! </h1>
        <br/>
        <h1>
          First Name <Badge bg="secondary">{registration.first_name}</Badge>
        </h1>
        <h2>
          Last Name <Badge bg="secondary">{registration.last_name}</Badge>
        </h2>
        <h3>
          Email <Badge bg="secondary">{registration.email}</Badge>
        </h3>
        <h4>
          Phone number <Badge bg="secondary">{registration.phone_number}</Badge>
        </h4>
        <h5>
          Country <Badge bg="secondary"><ReactCountryFlag countryCode={registration.country} svg /></Badge>
        </h5>
        <h6>
          Age <Badge bg="secondary">{registration.age}</Badge>
        </h6>
      </div>
    );
  }

export default RegistrationShowPage;
