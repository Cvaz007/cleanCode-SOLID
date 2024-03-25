(() => {
  function isRedFruit(fruit: string): boolean {
    const redFruits = ["apple", "cherry", "plum"];
    return redFruits.includes(fruit);
  }

  type FruitColor = "red" | "yellow" | "purple";

  function getFruitsByColor(color: FruitColor): string[] {
    const fruitsByColor = {
      red: ["apple", "strawberry"],
      yellow: ["pineapple", "banana"],
      purple: ["blackberries", "grapes"],
    };

    if (!Object.keys(fruitsByColor).includes(color)) {
      throw Error("the color must be: red, yellow, purple");
    }

    return fruitsByColor[color];
  }

  let isFirstStepWorking = true;
  let isSecondStepWorking = true;
  let isThirdStepWorking = true;
  let isFourthStepWorking = false;

  function workingSteps() {
    if (!isFirstStepWorking) return "First step broken.";

    if (!isSecondStepWorking) return "Second step broken.";

    if (!isThirdStepWorking) return "Third step broken.";

    if (!isFourthStepWorking) return "Fourth step broken.";

    return "Working properly!";
  }

  console.log({ isRedFruit: isRedFruit("cherry"), fruit: "cherry" });
  console.log({ isRedFruit: isRedFruit("pineapple"), fruit: "pineapple" });

  console.log({ redFruits: getFruitsByColor("red") });
  console.log({ yellowFruits: getFruitsByColor("yellow") });
  console.log({ purpleFruits: getFruitsByColor("purple") });

  console.log({ workingSteps: workingSteps() });
})();
