//  Describe_city Fucntion
function describe_city(cityName: string, country: string = 'DefaultCountry') {
    console.log(`${cityName} is in ${country}.`);
  }
  
  // Result
  describe_city('Chaman', 'Karachi');
  describe_city('Lucknow', 'India');
  describe_city('Mumbai');
