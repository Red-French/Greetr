# greetr.js
greetr.js is a very simple JavaScript library that supplies user greetings.

* When given a first name, last name, and language (optional), a formal or casual greeting is generated
* Provide a jQuery object and Greetr fills the element with the greeting

## library use
This library mimics jQuery structure by generating an object referenced by G$

  * **G$()** - returns an object ('new' keyword not required) containing chainable methods
  * **HTMLGreeting()** - places formal or casual greeting in HTML element

**Two Main Methods:**

    G$(firstname, lastname, language);

    HTMLGreeting(jQuery_selector, boolean)
    
## example usage:
Example 1

    G$('Joe', 'Schmo', 'en');
    HTMLGreeting('#greeting');
    
    <div id="greeting">Hello, Joe!</div>

Example 2

    G$('Joe', 'Schmo', 'en');
    HTMLGreeting('#greeting', true);
    
    <div id="greeting">Greetings, Joe Schmo!</div>

Example 2

    $("#login").click(function login() {
        const firstname = $("#firstname").val();
        const lastname = $("#lastname").val();
        const formality = $("#formality").is(":checked");

        const loginGrtr = G$(firstname, lastname);  // create new obj

        loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', formality).log();
    });

## All Methods (chainable) & Parameters

**G$(firstname, lastname, language)**
  * firstname
  * lastname
  * language (optional; defaults to 'en')
    * 'en' = English
    * 'es' = Spanish

**HTMLGreeting(selector, boolean)**
  * jQuery selector
  * boolean (optional; defaults to false)
    * true = formal greeting
    * false = casual greeting

**setLang(language)**
  * optional way to set language

**greet()**
  * prints greeting to console w/ all chainable methods available

**log()**
  * prints log to console
