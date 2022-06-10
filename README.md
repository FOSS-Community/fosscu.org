<p align="center">
# FOSSC Documentation
</p>

<p align="center">
  <img src="https://uploads-ssl.webflow.com/602a337999a3d77b1d768af7/603f6b65c586ca3ef33c2f62_opensource-p-500.png" />
</p>


This repository contains the assets required to build the [FOSSC Website](https://fossc.netlify.app/). We're glad that you want to contribute!


# An overview of the website

![name-of-you-image](/assets/fosscSS.PNG)



## Prerequisites

To use this repository, you need the following installed locally:

- [Git](https://git-scm.com)


# How to make your first contribution?

This documentation aims to simplify and guide the way beginners make their first contribution. If you are looking to make your first contribution, follow the steps below.

#### If you don't have git on your machine install it.

## Fork this repository

Fork this repository by clicking on the fork button on the top of this page.
This will create a copy of this repository in your account.


![name-of-you-image](/assets/fork!.png)


## Clone the repository

![name-of-you-image](/assets/code.png)

Now clone the forked repository to your machine. Go to your GitHub account, open the forked repository, click on the code button and then click the _copy to clipboard_ icon.

Open a terminal and run the following git command:

```
git clone "url you just copied"
```

where "url you just copied" (without the quotation marks) is the url to this repository (your fork of this project). See the previous steps to obtain the url.

For example:


```
git clone https://github.com/this-is-you/fossc.git
```


![name-of-you-image](/assets/link.png)


where `this-is-you` is your GitHub username. Here you're copying the contents of the first-contributions repository on GitHub to your computer.

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

![name-of-you-image](/assets/openpull.png)

click on `Open pull request`.

![name-of-you-image](/assets/createpull.png)

click on `Create pull request`.

![name-of-you-image](/assets/createRequest.png)


click on `Create pull request`.

## Where to go from here?

Congrats! You just completed the standard _fork -> clone -> edit -> pull request_ workflow that you'll encounter often as a contributor!
