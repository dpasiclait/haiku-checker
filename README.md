# HaikuChecker
Verify the syllable count of your haiku

## Description
With this web application, the headaches and troubles of writing a haiku with the correct syllable count is a thing of the past. No longer will the elusive 5-7-5 structure prevent you form passing your English Lit class. Turn in your assignment with the confidence of a 17th century Japanese poet... or the confidence of a highschooler looking for an easy A.

## Interested In the Behind the Scenes
This project is a small MEAN Stack project using:
  1. [Angular CLI](https://github.com/angular/angular-cli) version 11.2.0 for frontend development
  2. [MongoDB](https://www.mongodb.com/) for the cloud database
  3. [Nodejs](https://nodejs.org/en/) and [Express](https://expressjs.com/) for the backend development

The current logic (as of version 1.0.0) is the following:
  1. The backend api server receives incoming requests from the frontend to process the haiku. With the three lines as inputs in the request body, each verse of the poem is subsequently evaluated.
  2. One by one the lines of verse are split into an array of the words they contain. 

    ```javascript
    firstVerse  = firstVerse.toLocaleLowerCase().split(' ');
    secondVerse = secondVerse.toLocaleLowerCase().split(' ');
    thirdVerse  = thirdVerse.toLocaleLowerCase().split(' ');
    ```

  3. Given these arrays, the backend fetches from the database the syllable count for each word encountered, then creating a tiny _**wordSyllableIndex**_ as reference when tallying up the line counts.

    ```javascript
    Word.find({
      word: [...firstVerse, ...secondVerse, ...thirdVerse]
    });
    ``` 

  4. With the help of a private auxiliary function, each verse is sent along with the index to return the sum of all syllables.

    ```javascript
    countVerseSyllables(firstVerse, wordSyllableIndex);
    countVerseSyllables(secondVerse, wordSyllableIndex);
    countVerseSyllables(thirdVerse, wordSyllableIndex);
    ```

    1. The output of this function also includes any words that are not registered within the database (see Author's Note).
      
      ```javascript
      {
        syllableCount,
        unrecognizedWords
      }
      ```

  5. Once processed, the output of the evaluation is returned to the frontend client.
    
    ```javascript
    {
      payload  : {
        firstVerseCount,
        secondVerseCount,
        thirdVerseCount,
        unknownWords
      },
      timestamp: Date.now()
    }
    ```
    
  6. Finally, the frontend client displays the verses' respective syllable counts, removing any _**unknownWords**_ and informing the user of said changes.

## Author's Note
**Is the current logic efficient?** *No*

**Is the method used overly complicated?** *Absolutely*, given my propensity to overthink certain solutions the first time around.

**Then why do it that way?** First, this project was my introduction to the MEAN Stack and a great project to add to my portfolio. Second, my main objective is to improve this application overtime as I accrue new skills and learn better techniques. After a post-mortem of this project, I've concluded that regular expressions can vastly improve this application and eliminate the necessity for a database and a static and easily outdated list of words.

### Post-mortem: What I have learned from my mistakes
- KISS: Keep It Simple Silly
  - Spend more time evaluating and investigating the problem. ONE google search does not an expert make. It takes at least 3. 
  - If you suffer from chronic overthinking like me, spend some time testing your first solution on paper. Ask relevant questions like: *Can this be done any simpler?* *Does it involve too many moving parts?* *Has anyone found a formula or step by step guide to solve this problem?*
  - In summary do not go with your first option! **Brainstorm**.

- The standard rules (used by humans) to count syllables of words are fairly simple. 
  - Thus, it is likely possible to translate them to computer logic. 
  - In fact, a certain website (see Special Thanks) that I have found can tell you the syllable count of any word, real or made up, with really great accuracy. Given that made up words are not rejected and are processed by the application without fail, it signifies that they are not using a static list/database/etc. of words, but instead, they are processed in vivo like any other word. 

### Limitations of The Current Method 
1. Requires an unnecessary amount of space to have a list of "all" the words of the English dictionary.
2. Not up-to-date with current words constantly originating from modern social settings or internet lingo.
3. List of words does not include proper names, fictional words from many forms of media (think Pokémon names, names of plot devices like Horcrux, etc.)
4. Unnecessarily depends on a database when it could easily do without it.
5. Missing a spellchecker in the frontend client to avoid cases where the user accidentally misspelled a word.

### What Lies Ahead
Hopefully after deployment of the current version, I can implement the simplified method of using regular expressions to count syllables. Also, I would like to provide users the ability to post their own haiku for others to see.

## Resources
- Angular Material Design for the frontend ui
- Mongoose for database connection

## Special Thanks
1. [This generous github user](https://github.com/dwyl/english-words) and [This internet denizen](http://www.mieliestronk.com/wordlist.html) for providing the list of words.
2. [How Many Syllables](https://www.howmanysyllables.com/) for the syllable counts.
