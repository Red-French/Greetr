const g = G$('John', 'Wayne');

console.log("object: ", g);
console.log("--------");

g.greet().greet(true);  // informal followed by formal greeting
console.log("--------");

g.greet().setLang('es').greet("formal");
console.log("--------");

g.setLang('en').greet().log();
console.log("--------");

g.setLang('es').greet();

$("#login").click(function login() {
  const firstname = $("#firstname").val();
  const lastname = $("#lastname").val();
  const formality = $("#formality").is(":checked");

  const loginGrtr = G$(firstname, lastname);  // create new obj
  
  $("#logindiv").hide();

  loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', formality).log();

});