# Table of Contents
  * [Setting Up a Web Server](#web-server)
  * [Using Chrome Developer Tools](#chrome-tools)
  * [Document Object Model (DOM)](#dom)
  * [Running the List App, Plus Your Challenge](#challenge)

## Setting Up a Web Server <a id="web-server"></a>
We will be using live-server to set up a web server for local development. Download it with the following command

`npm install -g live-server`

You can then create a local web page with the following command:

`live-server list.app`

You can also specify a browser you want to use like so:

`live-server <path-to-folder> --browser='Google Chrome'`

I will be using Google Chrome for the rest of the lesson, so feel free to download it if you aren't using it.

Live-server is extremely useful, as you can make changes and have your local web page update automatically.

## Using Chrome Developer Tools <a id="chrome-tools"></a>
You can use the console in Chrome Developer Tools to inspect elements of HTML pages and look at the console that can be used to debug your JavaScript file. You can access it by clicking on the three dots in the upper right corner -> More Tools -> Developer Tools. The Elements tab shows the HTML page while the Console tab shows the output from console from the JavaScript file. 

## Document Object Model (DOM) <a id="dom"></a>
The DOM allows you to change elements in HTML in JavaScript. You use the global variable `document` in the JavaScript file to access the DOM. 

### Document Methods/Properties Review

#### querySelector
You can access an element from its tag by using the `querySelector` method. This method grabs the first element with the `<p>` tag. If you put this code in the list-app.js file, you will get `<p> Let's get started! </p>`.

```
const pElement = document.querySelector('p');
console.log(pElement);
```

You can also select an element by its id. The syntax is shown below.
```
const pElement = document.querySelector('#second');
console.log(pElement);
```

#### querySelectorAll
You can grab all elements with `<p>` tags by using the `querySelectorAll` method.

```
const pElements = document.querySelectorAll('p');
console.log(pElements);
```

#### remove
You can use the `remove` method to remove an element via the DOM. You can see how you can use integrate forEach to loop through each element in pElements. Now all elements with `<p>` will be removed from the web page.

```
const pElements = document.querySelectorAll('p');
pElements.forEach(function(pElement) {
    pElement.remove()
})
```

#### textContent
You can also access the text content of an element by using the `textContent` property. The following example adds an exclamation point to each of the `<p>` elements.

```
const pElements = document.querySelectorAll('p');
pElements.forEach(function(pElement) {
    pElement.textContent += '!';
})
```

### Adding Elements via the DOM

To create a new element at the end of body element, follow these steps.

#### Create Element and Add Content
You will first need to create a DOM element with the `createElement` method. You can specify what element tag you want. The following line will create a paragraph element. You can then add content by setting the textContent that we used previously.
```
const paragraphElement = document.createElement('p');
paragraphElement.textContent = 'I am a new paragraph!';
```
#### Appending to Body Tag
Now that the paragraph element is created, use the `appendChild` method to append the paragraph element. To append it to the end of the body tag, you first must use `querySelector` to get that element. Try the code above and below in the list-app.js to see your new paragraph element!

```
document.querySelector('body').appendChild(paragraphElement);
```

### Handle User Interaction
You probably have noticed the `Create List Item` button on the web page. As of now, the button is pretty useless, so let's change that. 

First, grab the button element by using `querySelector`.
```
const listButton = document.querySelector('button');
```

Next, use the `addEventListener` object to have something happen whenever the button is clicked. The first parameter is the type of event (in this scenario, it is `"click"`. The second argument is a callback function. Use the parameter e to get information regarding the event that occured. Use this code in this section to have the button change to `I'm different` when the button is clicked.
```
listButton.addEventListener('click', function(e) {
e.target.textContent = "I'm different"
});
```
There are many other tags available in JavaScript. The remaining tags that are used in the following list app are `form` and `input`. Try to figure out how they work in the app!

## Running the List App, Plus Your Challenge! <a id="challenge"></a>
You can run the list app by running:
```
live-server list.app
```
You will now see a simple List App web page. Mess around with it! The goal is for you to implement a clear all button, that removes all list items! Good luck!


