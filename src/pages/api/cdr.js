const axios = require('axios');

// Axios GET Default
axios
  .get("https://api.cdr.gov.au/cdr-register/v1/energy/data-holders/brands/summary")
  .then(function (response) {
    console.log(response);
  });