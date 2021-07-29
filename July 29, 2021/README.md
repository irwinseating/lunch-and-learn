# API Basics

Must have:
* [Visual Studio Code](https://code.visualstudio.com/)
* [NodeJs (for `npm`)](https://nodejs.org/en/download/)
* git(https://git-scm.com/downloads) 

I like using:
* [gitKraken](https://www.gitkraken.com/) for git branch management.



## Run the code
* If you use gitKraken, you can go to file > clone > Clone with URL and use the following url: `git@github.com:irwinseating/lunch-and-learn.git`
* I use the following base folder, but you can use anything you want: `C:\Projects\irwinseating\`.
* If you're not using gitKraken, you should be able to use `git clone git@github.com:irwinseating/lunch-and-learn.git` at the command line.
* Did you get an error about default branches? you might need: `git config --global init.defaultBranch main`
* It's recommended that you create your own branch to make changes on before committing any code. That's a whole topic on it's own, so let me know when you get to this part.


## Open Visual Studio Code
* Ctrl+` (back tick) brings up the terminal 
* `cd` to Lunch-and-learn Directory
* `cd '.\July 29, 2021\'`

## Install live-server package
`npm install`

## Start Server
`npm run live`

open web browser at `http://127.0.0.1:8080/`

Now as you make changes, your page will be updated when you save.

Next Steps: 
* Find an API you want to build
* Replace the url in the fetch function to start pulling data from the new URL. Modify templating structure to display the returned data in a cool way.
