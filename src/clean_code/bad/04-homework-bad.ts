(() => {
  // Resolve without the triple conditional inside the if
  // includes? arrays?
  function isRedFruit(fruit: string): boolean {
    if (fruit === "apple" || fruit === "cherry" || fruit === "plum") {
      return true;
    } else {
      return false;
    }
  }

  // Simplify this function
  // switch? Object literal? valid the possibles colors
  function getFruitsByColor(color: string): string[] {
    if (color === "red") {
      return ["apple", "strawberry"];
    } else if (color === "yellow") {
      return ["pineapple", "banana"];
    } else if (color === "purple") {
      return ["blackberries", "grapes"];
    } else {
      throw Error("the color must be: red, yellow, purple");
    }
  }

  // Simplify this function
  let isFirstStepWorking = true;
  let isSecondStepWorking = true;
  let isThirdStepWorking = true;
  let isFourthStepWorking = true;

  function workingSteps() {
    if (isFirstStepWorking === true) {
      if (isSecondStepWorking === true) {
        if (isThirdStepWorking === true) {
          if (isFourthStepWorking === true) {
            return "Working properly!";
          } else {
            return "Fourth step broken.";
          }
        } else {
          return "Third step broken.";
        }
      } else {
        return "Second step broken.";
      }
    } else {
      return "First step broken.";
    }
  }

  // isRedFruit
  console.log({ isRedFruit: isRedFruit("cherry"), fruit: "cherry" }); // true
  console.log({ isRedFruit: isRedFruit("pineapple"), fruit: "pineapple" }); // true

  //getFruitsByColor
  console.log({ redFruits: getFruitsByColor("red") }); // ['apple', 'strawberry']
  console.log({ yellowFruits: getFruitsByColor("yellow") }); // ['pineapple', 'banana']
  console.log({ purpleFruits: getFruitsByColor("purple") }); // ['blackberries', 'grapes']
  // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

  // workingSteps
  console.log({ workingSteps: workingSteps() }); // Change values in 31 line and waite the results
})();
