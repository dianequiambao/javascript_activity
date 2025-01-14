function whosPaying(names){
    var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
    var indexOfNames = Math.floor(Math.random() * names.length);
    return names[indexOfNames] + " is going to pay lunch 🥙 ";
}

whosPaying(names);