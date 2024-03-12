let sum = 55;

// Assign a new value to sum, it will be whatever
// the expression to the right of the equals sign evaluates to:
  // A single equals sign is called the "assignment operator.""
sum = sum + 12;

// Shortcut for sum = sum + 12
sum += 12;

// Increment sum by 1:
  // This ONLY can be used to add 1.
    // Therefore, this is ONLY a shortcut for
    // sum += 1
sum++;


// NO 👇
  // Don't do this. This will change the value of
  // sum. And we can reason about how. But, it's
  // really darn confusing as to what the new value
  // of sum would be after this code runs:
sum += sum + 5;


// ON SYNTAX SHORTCUTS!
  // AKA: Syntactical Sugar
    //    👆 Free band name for all you nerds out there.
// When should you take a syntax shortcut?
  // Don't take the shortcut unless you:
    // 1. Are 100% comfortable with the "most manual" way.
    // 2. Understand what is being abstracted away by the shortcut.
    // 3. Find some value in using the shortcut syntax.
        // Example: A for...in loop is a shortcut for a specific
        //          thing we can do with a for loop.
        //          The value it adds to my code is readability.
