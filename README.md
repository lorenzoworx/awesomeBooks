# Awesome books: plain JavaScript with objects

## Learning objectives

- Understand different ways to create objects in JavaScript.
- Create and access properties and methods of JavaScript objects.

### Estimated time: 3h

## Description

In this project, you will build a basic website that allows users to add/remove books from a list. You will achieve that by using JavaScript objects and arrays. You will also need to dynamically modify the DOM and add basic events.

*IMPORTANT NOTE: Read **all** requirements before you start building your project.*

### General requirements

- Make sure that there are [no linter errors](https://github.com/microverseinc/linters-config).
- Make sure that you used correct [Github Flow](https://github.com/microverseinc/curriculum-transversal-skills/blob/main/git-github/articles/github_flow.md).
- Make sure that you documented your work [in a professional way](https://github.com/microverseinc/curriculum-transversal-skills/blob/main/documentation/articles/professional_repo_rules.md).

### JavaScript requirements

- Follow our list of [best practices for JavaScript](https://github.com/microverseinc/curriculum-html-css/blob/main/articles/javascript_best_practices.md).

### Project requirements

- Implement only a basic UI with plain HTML:
<p align="center">
  <img src="./images/awesome_books_basic_ui.png" alt="Basic UI"  width="300px"/>
</p>

- Create a collection that keeps a list of books (hint: you can use an array of objects for that).
- Create a function to add a new book to the collection, with title and author.
- Create a function to remove a book from the collection (hint: you can use the [array filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) method).
- Display all books saved in the collection in the top part of the page.
- Make sure that when a user clicks the "Add" button:
  - A new book is added to the collection.
  - The new book is displayed in the page.
- Make sure that when a user clicks the "Remove" button:
  - The correct book is removed from the collection.
  - The correct book dissapears from the page.
- Make sure that data is preserved in the browser's memory by using [localStorage](https://github.com/microverseinc/curriculum-html-css/blob/main/local_storage.md).
- To debug your application, you can use [console.log()](https://developer.mozilla.org/en-US/docs/Web/API/Console/log). **Remember to remove debugging code before pushing your code to the remote repository.**
- Don't use any library or framework, use only plain JavaScript.


**TIP:** If you separated the code in multiple files and you you have the following issues with the linter: complaining about having multiple classes at the same file, or an unused variables, disable the linter check for that rule in the file with a `/* eslint-disable rule-you-want-to-disable */`
.

Check the [ESLint documentation](https://eslint.org/docs/latest/user-guide/configuring/rules#disabling-rules) for more details on how.

### Need a big picture?

Remind me about the [big picture of this project.](https://github.com/microverseinc/curriculum-javascript/blob/main/books/sneak_peek_v1_1.md)

## Work and submission mode

- You should implement the above requirements only in **one repository** in your pair-programming group.
- You should ask for a review and submit this activity **on behalf of your pair-programming group.**

### Code review

Follow [these steps](https://github.com/microverseinc/curriculum-transversal-skills/blob/main/code-review/articles/how_to_ask_for_a_code_review.md) to request a code review of your project.

## Submit your project

After the final approval from a code reviewer, you need to submit your project.
[Read this FAQ for a reminder on how to submit your project.](https://microverse.zendesk.com/hc/en-us/articles/360061344234)
Now go to your Student Dashboard and submit your project.

------

_If you spot any bugs or issues in this activity, you can [open an issue with your proposed change](https://github.com/microverseinc/curriculum-transversal-skills/blob/main/git-github/articles/open_issue.md)._