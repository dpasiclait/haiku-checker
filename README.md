# HaikuChecker v1.1.0
Verify the syllable count of your haiku

## Description
With this web application, the headaches and troubles of writing a haiku with the correct syllable count is a thing of the past. No longer will the elusive 5-7-5 structure prevent you form passing your English Lit class. Turn in your assignment with the confidence of a 17th century Japanese poet... or the confidence of a high school student looking for an easy A.

## Version Updates
### v1.1.0 UI Redesign
This new version has overhauled the original Angular Material template in exchange for a more customized and themed style. The whole UI has been restructured from the ground up to achieve a more distinguished design. 

The new color scheme originates from the pattern of the famous Koi fish popular in Japan as well as the source of multiple literary works of art. Colors used are as followed: 
```css
  .halloween-orange {
    background-color: #F16323; 
  }

  .anti-flash-white {
    background-color: #F2F3F4;
  }

  .ripe-mango{
    background-color: #FFD021;
  }

  .c-g-red{
    background-color: #E34427;
  }
```

As well as improving the responsive layout for most modern devices, this version includes some basic animations using the [@keyframes](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes) tool. To achieve the animation of the Koi fish, the following code was used
```css
  @keyframes rotate {
    0%   {transform: rotate(0deg);}
    50%   {transform: rotate(180deg);}
    100% {transform: rotate(360deg);}
  }

  @keyframes grow {
    0%   {
      height: 400px;
      width: 400px;
    }
    50% {
      height: 450px;
      width: 450px;
    }
    100%   {
      height: 400px;
      width: 400px;
    }
  }
```

## Bug Fixes
### v1.0.1
1. Script reference for fontawesome.js was replaced by link to incorporated stylesheet fontawesome.min.css within assets folder
2. Although no code had to change for this bug, domain name forwarding with masking was disabled to allow external links to Github and LinkedIn to redirect without frame-ancestor rejections

### v1.0.2
1. Responsive design, adapting to most modern devices. This also extends to landscape mode on mobile phones.

## Interested In the Behind the Scenes
This project is a small MEAN Stack project using:
  1. [Angular CLI](https://github.com/angular/angular-cli) version 11.2.0 for frontend development
  2. [MongoDB](https://www.mongodb.com/) for the cloud database
  3. [Nodejs](https://nodejs.org/en/) and [Express](https://expressjs.com/) for the backend development

The current logic (as of version 1.1.0) is the following:
  1. The backend api server receives incoming requests from the frontend to process the haiku. With the three lines as inputs in the request body, each verse of the poem is subsequently evaluated.

  2. One by one the lines of verse are split into an array of the words they contain. 
 ```javascript
  firstVerse  = firstVerse.toLowerCase().split(' ');
  secondVerse = secondVerse.toLowerCase().split(' ');
  thirdVerse  = thirdVerse.toLowerCase().split(' ');
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
### v1.1.0
**Was this update really necessary?** *Not 100%*, but after viewing other websites that do the same as mine (and after receiving some constructive criticism during a job interview) the UI felt a little stale and generic. This update is an attempt to standout amongst the multitude of competitors and achieve a sense of style. 

**Why not just use a better template and change the colors?** *Very true*. However, this was my opportunity to understand what goes on behind UI design, the impacts of css on style, and the general understanding of the work that goes into responsive designs. I have rarely been assign frontend UI design and css task throughout my career, and I have _**horrible**_ sense of color coordination. This was an exercise in stepping out of my comfort zone and push myself to trying task I normally would shy away from. And yes, my next objective is to study and find responsive UI templates that I'm comfortable using. 

### v1.0.0
**Is the current logic efficient?** *No*

**Is the method used overly complicated?** *Absolutely*, given my propensity to overthink certain solutions the first time around.

**Then why do it that way?** First, this project was my introduction to the MEAN Stack and a great project to add to my portfolio. Second, my main objective is to improve this application overtime as I accrue new skills and learn better techniques. After a post-mortem of this project, I've concluded that regular expressions can vastly improve this application and eliminate the necessity for a database and a static and easily outdated list of words.

### Post-mortem: What I have learned from my mistakes
#### v1.1.0
- KISS still applies when working with css
  - It is easy to over-complicate a UI design and ruin the overall layout with a few too many code.

- Responsive is hard
  - I have gained more respect for frontend UI designers working with different designs. 
  - Do it step by step and make sure any new code you add does not affect previous code.

- It pays to explore
  - Many times, I've stumbled upon cool tricks to try out and experiment to improve the UI design/. 
  - Many tools can help improve your understanding of the basics of design, like color pickers, css webkit, cool fonts, etc. All these go to improving the overall theme of the website and achieve a distinguished identity.
  - It's fun to see what others are doing and experimenting to try to improve upon what they have done. It is also a great source of inspiration.

#### v1.0.0
- KISS: Keep It Simple Silly
  - Spend more time evaluating and investigating the problem. ONE google search does not an expert make. It takes at least 3. 
  - If you suffer from chronic overthinking like me, spend some time testing your first solution on paper. Ask relevant questions like: *Can this be done any simpler?* *Does it involve too many moving parts?* *Has anyone found a formula or step by step guide to solve this problem?*
  - In summary do not go with your first option! **Brainstorm**.

- The standard rules (used by humans) to count syllables of words are fairly simple. 
  - Thus, it is likely possible to translate them to computer logic. 
  - In fact, a certain website (see Special Thanks) that I have found can tell you the syllable count of any word, real or made up, with really great accuracy. Given that made up words are not rejected and are processed by the application without fail, it signifies that they are not using a static list/database/etc. of words, but instead, they are processed in vivo like any other word. 

- Always best to include third party min.css files rather than relying on script url references in your html head. 
  - Many small things can cause the link to malfunction and unable to retrieve the necessary styles, icons, animations, etc.

- It's is not always recommended to forward your domain name with masking.
  - Many third party hosting services limit the functionalities of your web app when forwarding with masking is chosen, explained [in this forum](https://www.godaddy.com/community/Managing-Domains/Forward-w-Masking-Disables-Mobile-Website/td-p/7793) and [this article](https://support.strikingly.com/hc/en-us/articles/214364718-Fix-Problems-with-Masked-Forwarding):
    - External links to secure website will be denied due to [CSP frame-ancestors](https://content-security-policy.com/frame-ancestors/) issues;
    - Responsive designs for mobile users are "disabled";
    - Interferes with search engine optimization;
    - May also interfere with other third party resources;
    - Prevents users from bookmarking or redirecting to your website 

### Limitations of The Current Method (V1.0.0 to v1.1.0) 
1. Requires an unnecessary amount of space to have a list of "all" the words of the English dictionary.
2. Not up-to-date with current words constantly originating from modern social settings or internet lingo.
3. List of words does not include proper names, fictional words from many forms of media (think Pokémon names, names of plot devices like Horcrux, etc.)
4. Unnecessarily depends on a database when it could easily do without it.
5. Missing a spellchecker in the frontend client to avoid cases where the user accidentally misspelled a word.

### What Lies Ahead
Hopefully after deployment of the current version, I can implement the simplified method of using regular expressions to count syllables. Also, I would like to provide users the ability to post their own haiku for others to see.

## Resources
- [Angular Material Design v11.2.1](https://material.angular.io/) for the frontend ui (Deprecated)
- [Mongoose v5.11.18](https://mongoosejs.com/) for database connection
- [Fontawesome v4.7.0](https://fontawesome.com/v4.7.0/get-started/) for .min.css and icon resources

## Special Thanks
1. [This generous github user](https://github.com/dwyl/english-words) and [this internet denizen](http://www.mieliestronk.com/wordlist.html) for providing the list of words.
2. [How Many Syllables](https://www.howmanysyllables.com/) for the syllable counts.
3. [Scheme Color Tool](https://www.schemecolor.com/) for the color schemes of the koi fish.
