const g = G$('John', 'Wayne');
console.log(g);
g.greet().setLang('es').greet("formal");
g.setLang('en').greet().log();
