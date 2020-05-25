(function () {
    var Goodbye = {};
    var word = "Goodbye";
    Goodbye.speak = function speak(name) {
      console.log(word + " " + name);
    };
    window.Goodbye = Goodbye;
    })();
    