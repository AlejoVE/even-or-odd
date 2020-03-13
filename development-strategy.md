# Even of Odd: development strategy

Building this site one step at a time.

## 0. Setup

* `index.html` and folder structure with empty files.

## 1. Data & Log

* `data/strings.js` & `log.js`.

## 2. Init (not finished!)

* The code in `init.js` that renders the current list for users is complete.
  * But the `renderList` DOM Component function is not!  you will need to write this.
* `index.html` is complete, just waiting for the code behind it.

## 3. User Story: `reset` (completed for you)

* A user can reset stat & see a cleared User Interface.
* I wrote the code in `listeners/reset.js` & `handlers/reset.js`.
* The handler function resets the `strings` object to it's initial values (the values in the source code), and re-renders the same UI as `init.js`.  in `listeners/reset.js` the handler is connected to the UI with a `click` event.

## 4. User Story: save button listener and handler

> * A user can enter an input and click to save it.
> * I wrote the code in listeners/save.js & handlers/save.js.
> * The handler function edits the object with user input and evaluates whether it is an even, odd, or NaNy. The handler is connected to the UI with a `click` event in `listeners/save.js`.

## 5. User Story: render list 

> * The developer needs a function that renders user input in the UI.
> * I wrote the code in `views/render-list.js`.
> * The function creates a div element and a ul element in the dom to show the user the value stored in the properties of the object: evens, odds, nanys.

## 6. User Story: display evens

> * A user can see the saved values in the property "evens" of the object by clicking the evens button.
> * I wrote the code in `handlers/display-evens.js`.
> * The handler function display a list in the UI of the values ​​stored in the object's "evens" property with the help of `render-list.js`. The handler is connected to the UI with a `click` event in `listeners/display-evens.js`.

## 7. User Story: display odds

> * A user can see the saved values in the property "odds" of the object by clicking the odds button.
> * I wrote the code in `handlers/display-odds.js`.
> * The handler function display a list in the UI of the values ​​stored in the object's "odds" property with the help of `render-list.js`. The handler is connected to the UI with a `click` event in `listeners/display-odds.js`.

## 8. User Story: display NaNy

> * A user can see the saved values in the property "NaNy" of the object by clicking the NaNy button.
> * I wrote the code in `handlers/display-NaNy.js`.
> * The handler function display a list in the UI of the values ​​stored in the object's "NaNy" property with the help of `render-list.js`. The handler is connected to the UI with a `click` event in `listeners/display-NaNy.js`.

## 9. User Story: CSS 

> * As a developer I want to have a nice and intuitive UI.
> * I wrote the code in `style.css`.
> * I added the styles to the UI.