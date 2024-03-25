(() => {
  // Array of temperature celsius
  const arrayOfNums = [33.6, 12.34];

  // Direction ip of server
  const ip = "123.123.123.123";

  // List of users
  const people = [
    { id: 1, email: "fernando@google.com" },
    { id: 2, email: "juan@google.com" },
    { id: 3, email: "melissa@google.com" },
  ];

  // Lists of users emails
  const emails = people.map((u) => u.email);

  // Booleans variables of a video game
  const jump = false;
  const run = true;
  const noTieneItems = true;
  const loading = false;

  // Other examples
  // Initial time
  const start = new Date().getTime();
  //....
  // 3 doritos after
  //...
  // final time
  const end = new Date().getTime() - start;

  // Functions
  // get books
  function book() {
    throw new Error("Function not implemented.");
  }

  // get books by url
  function BooksUrl(u: string) {
    throw new Error("Function not implemented.");
  }

  // obtains the area of a square based on its sides
  function areaCuadrado(s: number) {
    throw new Error("Function not implemented.");
  }

  // prints the work
  function printJobIfJobIsActive() {
    throw new Error("Function not implemented.");
  }
})();
