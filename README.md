# commandLineStarWarsSearchApp
## How to Use it: 
1. Open up your favorite terminal and run ```npm install```. 
    - This command will by default look for a local package.json file to install packages from its list of **dependencies**. 
2. Make a text file called ```star_wars_characters```.
3. Execute [app.js](app.js) in its current directory like the following: 
    - ```node app.js [search-keyword | leaderboard]```
    - Examples:
        - ```node app.js yoda```
        - ```node app.js luke```
        - ```node app.js leaderboard```
            - converts all records of star_wars_characters.csv into an array of objects.  The array is then displayed as a table by the following line of code:
                ```javascript 
                console.table(leaderboard); // leaderboard could have a length of 0 if no star wars character is found with a passed in search keyword
                ```


