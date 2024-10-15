function arrayOfCountries() {
    const countries = [["Japan", "Tokyo"], ["South Korea", "Seoul"], ["Indonesia", "Jakarta"]];
    console.log(countries);

    // Print specific element (Tokyo) using array indexing
    console.log(countries[0][1]); // Tokyo (specific element's index)

    // Print specific element (South Korea) using array indexing
    console.log(countries[1][0]); // South Korea (specific element's index)

    // Print third element (Indonesia and Jakarta) of outer array
    console.log(countries[2]); // [Indonesia, Jakarta]

    // Print length of outer array (number of countries)
    console.log(countries.length); // 3

    // Print length of inner array at index of 1 (number of elements within array ["South Korea", "Seoul"])
    console.log(countries[1].length); // 2
}

// Call the function to execute the code
arrayOfCountries();