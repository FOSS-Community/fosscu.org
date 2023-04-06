<h1 align="center">FOSSC Documentation 😃</h1>

<p align="center">
  <img src="https://uploads-ssl.webflow.com/602a337999a3d77b1d768af7/603f6b65c586ca3ef33c2f62_opensource-p-500.png" />
</p>


This repository contains the assets required to build the [FOSSC Website](https://fossc.netlify.app/). We're glad that you want to contribute!


# An overview of the website
[![CodeFactor](https://www.codefactor.io/repository/github/foss-community/website-fossc/badge)](https://www.codefactor.io/repository/github/foss-community/website-fossc)
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/FOSS-Community/website-fossc)

<img src="src\assets\readme img\FOSSCU.jpeg"></img>



## Prerequisites

To use this repository, you need the following installed locally:

- [Git](https://git-scm.com)



# How to make your first contribution ???

This documentation aims to simplify and guide the way beginners make their first contribution. If you are looking to make your first contribution, follow the steps below.

#### If you don't have git on your machine install it.

## Fork this repository

 Fork this repository by clicking on the fork button on the top of this page.
 This will create a copy of this repository in your account.


 <img src="src\assets\readme img\Fork.jpeg"></img>



## Clone the repository

 <img src="src\assets\readme img\clone.png"></img>

 Now clone the forked repository to your machine. Go to your GitHub account, open the forked repository, click on the code button and then click on open with Github Desktop ot you can click on  _copy to clipboard_ icon if you want to use git bash.

**Note: Further command are for Git bash users not for the Git Desktop Users**

> For Git Desktop users ---> Now just click on Open with VS code and start your contribution.

 Example:
 <img src="src\assets\readme img\Vscode img.png"></img>


## Commit Changes

 After you have updated the files,click on 'Commit to main' and then click on push origin.

 Example :
 <img src="src\assets\readme img\commit.png"></img>


 Now Come back to Github web and click on contribute to submit your changes for review.


***
## Steps for Git Bash Users 


Open a terminal and run the following git command:

```
git clone "url you just copied"
```

where "url you just copied" (without the quotation marks) is the url to this repository (your fork of this project). See the previous steps to obtain the url.

For example:


```
git clone https://github.com/this-is-you/fossc.git
```


 Here you're copying the contents of the first-contributions repository on GitHub to your computer.

## Create a branch

Change to the repository directory on your computer (if you are not already there):

```
cd desktop
```

Now create a branch using the `git checkout` command:

```
git checkout -b <your-new-branch-name>
```
For example:

```
git checkout -b add-new-file
```

(The name of the branch does not need to have the word _add_ in it, but it's a reasonable thing to include because the purpose of this branch is to add your name to a list.)

## Make necessary changes and commit those changes

Now open add or edit file in a text editor. Add code for any existing algorithm in other language or add some new algorithms. Make sure to update correspond README.md file if needed. Now, save the file.

If you go to the project directory and execute the command `git status`, you'll see there are changes.

Add those changes to the branch you just created using the `git add` command:

```
git add "name of the file you add or edit"
```

Now commit those changes using the `git commit` command:

```
git commit -m "Add message for the change"
```

## Push changes to GitHub

Push your changes using the command `git push`:

```
git push origin <add-your-branch-name>
```

replacing `<add-your-branch-name>` with the name of the branch you created earlier.

## Submit your changes for review

If you go to your repository on GitHub, you'll see a `Contribute` button. Click on that button.

<img src="src\assets\readme img\Contribute.jpeg"></img>

click on `Open pull request`.

<img src="src\assets\readme img\pull request.png"></img>

click on `Create pull request`.

<img src="src\assets\readme img\create request.png"></img>


click on `Create pull request`.

## Where to go from here?

Congrats! You just completed the standard _fork -> clone -> edit -> pull request_ workflow that you'll encounter often as a contributor!


# Running through docker

### Make sure you have docker install in your device, if not [Take reference from here](https://docs.docker.com/engine/install/)

#### Clone the [fosscu website](https://github.com/FOSS-Community/website-fossc/edit/main/README.md)
`git clone https://github.com/FOSS-Community/website-fossc`

#### Change directory to cloned fosscu-website directory
`cd website-fossc`

#### Build the docker Image
`docker build -t <image_name:version_tage> .`

#### Run the Builded Image and create container to it.
`docker run --name <container name> -d -p 8080:8080 <build_image_name:version_tag>`


## 💪 Thanks to all Contributors

Thanks a lot for spending your time helping FOSSC grow. Thanks a lot! Keep rocking 🍻

[![Contributors](https://contrib.rocks/image?repo=FOSS-Community/website-fossc)](https://github.com/FOSS-Community/website-fossc)

## 🙏 Support

This project needs a ⭐️ from you. Don't forget to leave a star ⭐️

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/makes-people-smile.svg)](https://www.linkedin.com/pulse/20-ways-make-someone-smile-ingrid-kelada/?trk=read_related_article-card_title)


# Getting Started with VITE

This project was bootstrapped with [VITE](https://vitejs.dev/).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:8080](http://localhost:8080) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\

### `yarn build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!


### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [VITE documentation](https://vitejs.dev/guide/).

To learn React, check out the [React documentation](https://reactjs.org/).
