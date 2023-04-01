# Chapter 1 - Static Pages in React

## About
The goal of this chapter is to a build a cool looking static page only using React. This page is going to be based off of this [Figma design file](https://www.figma.com/file/ro5Pl9p8tFdlqqUUTBY3ZM/React-Course---Project-1?node-id=0-1&t=YzGcAKlXbHWhKMnz-0).

## Deliverables
- [ ] Understand why React is so popular
- [ ] Start to learn React's proprietary JSX syntax
- [ ] Learn and use custom components
- [ ] How to apply CSS styling

## Log

### Importing React into our project
Both React and ReactDOM are available over a CDN. [Here's where](https://legacy.reactjs.org/docs/cdn-links.html) how we import React into the project using the CDN in html. After you're done setting up a boilerplate webpage with html, css and js script files, copy the CDNs from the React documentation and import them into the html.

Now, pulling in Babel to get the most out of React. After you import it, with any `<script>` tag, you can now have a tag that reads, `type="text/babel"`.

Here's what it should look like now,
```html
<html lang="en">
	<head>
		<link rel="stylesheet" href="index.css">
		
		<!-- Pulling in the React library -->
		<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
		
		<!-- Pulling in the ReactDOM library -->
		<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

		<!-- Now, pulling in Babel to get the most out of React -->
		<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>"
	</head>
	<body>
		<script src="index.js" type="text/babel"></script>
	</body>
</html>
```

### Encapsulating the application
We create an empty `<div>` in the body of the html page to encapsulate our entire project. We can think of this as a container for the entire application and it's thus given the `root` id like so,
```html
<!-- Creating a div to sort of put the entire application into a container -->
<div id="root"></div>
```

### Starting React code
Importing babel gives us access to the global variable `ReactDOM` which we can then use to render text to the page. We use the `.render()` function which takes the text and the place where we want to put the text, i.e. the id of the div using `document.getElementById("root")`. 