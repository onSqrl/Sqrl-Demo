# Sqrl-Demo
A simple Generative Art Project to demonstrate all of the neccesary code for a Project to work on the Sqrl platform including how to define Traits. Created with p5js.

The concept of the Project is to draw a Shape of a certain color at random points on the canvas, a random number of times.

There are 3 Traits defined for Color, Shape and Count. Color is what color the Shape will be; either Red, Green or Blue. The Shape can either be a Circle, Square or Ellipse. The Count is how many times the Shape is drawn on the canvas and can be any number between 200 and 600.

Two of the Traits are setup to be controlled by passing a parameter through the URL. These are Color and Shape and are defined by the window.$traitFields object.

The Count trait is a trait that's setup to not be controlled and is randomly chosen using the sqrlSeed parameter which is used to seed the PRNG included in the required <script> in the <head> of the index.html.

The Project is hosted here: https://sqrl-root.s3.filebase.com/sqrl-demo/index.html

The sqrlSeed parameter must always be passed into the URL for the code to work because the PRNG must be seeded with something like this:
https://sqrl-root.s3.filebase.com/sqrl-demo/index.html?sqrlSeed=0123456789ABCDEF
  
If neither of the two parameters for color or shape are passed in, the code chooses a random color and shape from the options Red, Green, Blue and Circle, Square, Ellipse respectively by using the random_choice function of the PRNG which gets seeded by the sqrlSeed parameter.
  
Notice if you pass in a different seed value, a different output is generated, like this:
https://sqrl-root.s3.filebase.com/sqrl-demo/index.html?sqrlSeed=LNaja1cn8cJSmAwgL6ZoV6cfrjP99EMxnm8mptE664DuzUisGwCtjnwbLrfB37SC 

If we pass a color value through the URL like this:
https://sqrl-root.s3.filebase.com/sqrl-demo/index.html?sqrlSeed=123456789ABCDEF&color=Green

The code always outputs a Green colored shape and the Shape and Count traits are still random.

If we pass both color and shape values through the URL like this:
https://sqrl-root.s3.filebase.com/sqrl-demo/index.html?sqrlSeed=123456789ABCDEF&color=Green&shape=Circle

The code always outputs Green colored Circles but the Count trait is still random and can be any number between 200 and 600.

This demonstrates how to define contolled Traits with the window.$traitFields object, how to use conditional logic to look for Trait parameter(s) in the URL and if not found, pick a random value for the Trait. It also demonstrates how to have a Trait that isn't controlled through a parameter and is always random respective to the sqrlSeed.

If you have questions or need help and support, please join our <a href="https://discord.gg/XZ6AqN95" target="_blank">Discord server</a> and seek guideance from the community or team.

