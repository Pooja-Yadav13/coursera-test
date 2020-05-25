(function () {
    var Goodbye = {};
    var word = "Good Bye";
    Goodbye.speak = function speak(name) {
      console.log(word + " " + name);
    };
    window.Goodbye = Goodbye;
    })();
    