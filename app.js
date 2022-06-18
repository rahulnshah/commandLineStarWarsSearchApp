//modules I used:
const fs = require("fs");
const request = require("request");

if(process.argv.length >= 3 )
{
  if(process.argv[2] !== "leaderboard")
  {
      const searchKeyWord = process.argv[2];
      request(`https://swapi.dev/api/people/?search=${searchKeyWord}`, function(error, response, body) {
        if (!error && response.statusCode == 200) {
          let json = JSON.parse(body);
          if(json.count > 0)
          {
            let allResults = json.results;
            for(let result of allResults)
            {
              fs.readFile("star_wars_characters.txt", "utf8", (err, data) => {
                if (err) {
                  console.error(err);
                  return;
                }
                if(data.indexOf(result.name) < 0)
                {
                  // add it to the unique list of names 
                  let uniqueStr = result.name + "\n";
                  //save to a text file called star_wars_character_names.txt

                  /*
                  when appendFile is not nested into readFile method, the unique string is empty after looping through a 
                  list of returned names from the GET req. made to search endpoint of the SWAPI. 
                  */
                  fs.appendFile("star_wars_characters.txt", uniqueStr, "utf-8", function(err){
                    if (err) {
                      console.log(err);
                      return; 
                    }
                    // also attach the searchkeyword to the result if not already there 
                    console.log("Data is appended to file successfully.");
                  });
                }
              });
            }
          }
          else
          {
            console.log(`0 results found for search keyword: ${searchKeyWord}`);
          }
        }
      });
  }
  else
  {
    console.log("Leaderboard:\n");
  }
}
else
{
  console.log("Must provide either a search keyword or the \"leaderboard\" flag");
}

