# 🎇Contributing Guidelines

This documentation contains a set of guidelines to help you during the contribution process. 

I'm happy to welcome all the contributions from anyone willing to add new scripts to this repository. Thank you for helping out and remember,
**no contribution is too small.**


## 💻Before Contributing

Welcome to [FOSS-Community/website-fossc](https://github.com/FOSS-Community/website-fossc/). Before sending your pull requests, make sure that you **read the whole
guidelines**. If you have any doubt on the contributing guide, please feel free to reach out.


## 🙌Contribution

This documentation aims to simplify and guide the way beginners make their first contribution. If you are looking to make your first contribution, follow the steps below.

#### If you don't have git on your machine install it.

***

### Raise an issue

You can raise an issue to report a bug or to request a new feature. Before raising an issue, please make sure that the issue you are raising is not already present among the existing issues.

***

### Fork this repository

 Fork this repository by clicking on the fork button on the top of this page.
 This will create a copy of this repository in your account.


 <img src="src\assets\readme img\Fork.jpeg"></img>

***

### Clone the repository

 <img src="src\assets\readme img\clone.png"></img>

 Now clone the forked repository to your machine. Go to your GitHub account, open the forked repository, click on the code button and then click on open with Github Desktop ot you can click on  _copy to clipboard_ icon if you want to use git bash.

**Note: Further command are for Git bash users not for the Git Desktop Users**

> For Git Desktop users ---> Now just click on Open with VS code and start your contribution.

 Example:
 <img src="src\assets\readme img\Vscode img.png"></img>

***

### Commit Changes

 After you have updated the files,click on 'Commit to main' and then click on push origin.

 Example :
 <img src="src\assets\readme img\commit.png"></img>


 Now Come back to Github web and click on contribute to submit your changes for review.


***

### Steps for Git Bash Users 


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

***

### Create a branch

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

***

### Make necessary changes and commit those changes

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

***

### Push changes to GitHub

Push your changes using the command `git push`:

```
git push origin <add-your-branch-name>
```

replacing `<add-your-branch-name>` with the name of the branch you created earlier.

***

### Submit your changes for review

If you go to your repository on GitHub, you'll see a `Contribute` button. Click on that button.

<img src="src\assets\readme img\Contribute.jpeg"></img>

click on `Open pull request`.

<img src="src\assets\readme img\pull request.png"></img>

click on `Create pull request`.

<img src="src\assets\readme img\create request.png"></img>


***

### Where to go from here?

Congrats! You just completed the standard _fork -> clone -> edit -> pull request_ workflow that you'll encounter often as a contributor!

***

## Alternatively Using GitHub Desktop:
1. Open GitHub Desktop and log in to your GitHub account.

2. Make sure you are on the "Current Repository" view. If not, go to "File" and select "Add Local Repository" to add your repository.

3. In the "Current Repository" view, ensure you are on the branch that you want to submit a pull request for. If you're not on the correct branch, use the "Branch" menu to switch to the correct branch.

4. Once you're on the correct branch, make your changes and commit them to the branch. You can do this by clicking the "+" button in the upper-left corner of the GitHub Desktop window, making your changes, and then entering a commit message.

5. After you've made your changes and committed them, click the "Push origin" button in the top-right corner of the GitHub Desktop window. This will push your changes to the remote repository on GitHub.

6. Now, go to the GitHub website, navigate to your fork of the repository, and you should see a button to "Compare & pull request" between your fork and the original repository, click on it.

7. On the pull request page, you can review your changes and add any additional information, such as a title and a description, that you want to include with your pull request.

8. Once you're satisfied with your pull request, click the "Create pull request" button to submit it.

**Note:** In order to create a pull request, you must have a fork of the original repository in your GitHub account and you must have made the changes in that forked repository.

## That's it! You have made your contribution to the project.🙌
## Sit back patiently and relax while the project maintainers review your PR. 🚀