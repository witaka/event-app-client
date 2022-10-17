const BASE_URL = "http://localhost:4000/api";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    create(params) {
      return fetch(`${BASE_URL}/registrants`, {
        method: "POST",
        mode: 'cors',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          "firstName": params.firstName,
          "lastName": params.lastName,
          "age": params.age,
          "country": params.country,
          "phoneNumber": params.phoneNumber,
          "email": params.email
        }),
      }).then(response => response.json());
    },
    one(id) {
      return fetch(`${BASE_URL}/registrants/${id}`, {
        headers: { "Content-Type": "application/json" }
      }).then(response => response.json());
    }
  };
  