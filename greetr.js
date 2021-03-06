;(function (windowObj, $) {
	// PRIVATE

	const supportedLanguages = ['en', 'es'];

	const greetings = {
		en: 'Hello',
		es: 'Hola'
	};

	const formalGreetings = {
		en: 'Greetings',
		es: 'Saludos'
	};

	const logMessages = {
		en: 'Logged in',
		es: 'Inicio sesion'
	};


	// PUBLIC

	// entry point (returns an object)
	const Greetr = function (firstName, lastName, language) {
		return new Greetr.init(firstName, lastName, language);
	}

	// constructor
	Greetr.init = function(firstName, lastName, language) {
		const main = this;  // points to empty obj created by 'new' keyword

		main.firstName = firstName || "",
		main.lastName = lastName || "",
		main.language = language || "en";

		main.validate();
	}


	Greetr.prototype = {
		fullName: function() {
		return this.firstName + " " + this.lastName;
		},
		validate: function() {
		if (supportedLanguages.indexOf(this.language) === -1) {
			throw "Invalid language";
		}
		},
		greeting: function() {
		return greetings[this.language] + ", " + this.firstName + "!";
		},
		formalGreeting: function() {
			console.log('fullname: ', this.fullName());
		return formalGreetings[this.language] + ", " + this.fullName() + "!";
		},
		login: function(name) {
		const greeting = greetings[this.language] + ", " + name + "!";
		return $("#greeting").html(greeting);
		},

    
		// .greet logs appropriate greeting to console
		greet: function(formal) {
		let msg;

		// if undefined or null, it will be coerced to false
		if (formal) {
			msg = this.formalGreeting();
		} else {
			msg = this.greeting();
		}

		if (console) {
			console.log(msg);
		}

		return this;  // make method chainable; 'this' refers to calling object at execution time
		},

		// to manually check something is logged
		log: function() {
			if (console) {  // IE has no console obj if its console is closed
				console.log(logMessages[this.language] + ": " + this.fullName());
			}
			return this;  // make chainable
		},

		// change language on the fly
		setLang: function(language) {
			this.language = language;

			this.validate();
			return this;  // make chainable
		},

		// gets appropriate greeting and places in HTML element
		HTMLGreeting: function(selector, formal) {
			if (!$) {
				throw 'jQuery not loaded';
			}

			if (!selector) {
				throw 'Missing jQuery selector';
			}

			if (formal) {
				msg = this.formalGreeting(firstname, lastname);
			} else {
				msg = this.greeting();
			}

			$(selector).html(msg);
			return this;
		}
	};

  // redirect prototype of objects created by init() to Greetr.prototype
  // prototype is a clean way to reference vs using Greeter.init.prototype)
  Greetr.init.prototype = Greetr.prototype;

  windowObj.Greetr = windowObj.G$ = Greetr;  // attach/expose Greetr to window object for anyones use (add G$ as alias)

})(window, jQuery);
