//modules I used:
const fs = require("fs");
const request = require("request");

//Simple Node Command Line App 
if(process.argv.length >= 3 )
{
  let allKeyWords = [];
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
    console.log("Leaderboard\n:");
  }
}
else
{
  console.log("Must provide either a search keyword or the \"leaderboard\" flag");
}

/*
  how I can do leader board:
  store the search keyowrds in an array or a collection in general
  If collection.length > 0 then save the number of results f first search as max_res and it as max_search
  loop through collection, compairng max_search with searches of other keywords in collection; be too complicated
  to ue a prioority queue but I can use a queue 
*/