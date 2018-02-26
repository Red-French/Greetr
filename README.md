# greetr.js
greetr.js is a very simple JavaScript library that supplies user greetings.

## library use
This library mimics jQuery structure by generating an object referenced by G$

G$() returns an object ('new' keyword not required):

    G$(firstname, lastname, language);

example usage:

    const g = G$(firstname, lastname, language);

**Chainable methods:**

  * greet()
  * log()
  * setLang()
