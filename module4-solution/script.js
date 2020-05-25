
(function () {
	var names = ["Saab", "Volvo", "BMW","Banana", "Orange", "Apple", "Mango","Jia","Jigar","Riya"];
	for (var i = 0; i < names.length; i++) {
	  var firstLetter = names[i].charAt(0).toLowerCase();
	  if (firstLetter === 'j') {
		Goodbye.speak(names[i]);
	  } else {
		hello.speak(names[i]);
	  }
	}

	})();