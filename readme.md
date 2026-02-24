What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll? ans: getElementById() document.getElementById("id"); -->only chooses by ID -->returns 1 element, if not found anything returns null
getElementsByClassName() document.getElementsByClassName("class"); -->selects by class name -->returns HTML collection --> uses loop

querySelector() document.querySelector("selector"); -->accepts CSS selector -->returns first matching element -->if nothing found, returns null

querySelectorAll() document.querySelectorAll("selector") -->returns nodeList

How do you create and insert a new element into the DOM? ans: To create an Element we use document.createElement(). To insert a new element we use appendChild()

What is Event Bubbling? And how does it work? ans: when we click a child element, the event triggers on its parent, grandparent and so on.

What is Event Delegation in JavaScript? Why is it useful? ans: when we attach a single event listener to a parent element instead of multiple child elements. it is useful because of its better performance. it uses fewer event listners and workd automatically for elements added later.

What is the difference between preventDefault() and stopPropagation() methods? ans: preventDefault() stops the browser’s default behavior for an element. stopPropagation() stops the event from bubbling up.
