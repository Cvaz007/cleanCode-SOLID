(() => {
  // function to get information about a film by Id
  function getAllMovies(movieId: string) {
    console.log({ movieId });
  }

  //function to get information about the actors in a movie - Actors or Cast // id = movieId getMovieCast
  function getAllMovieActors(id: string) {
    console.log({ id });
  }

  // function to get the actor's bio by id
  function getUser(ActorId: string) {
    console.log({ ActorId });
  }

  // Create a new movie
  function movie(
    title: string,
    description: string,
    rating: number,
    cast: string[]
  ) {
    console.log({ title, description, rating, cast });
  }

  // Create a new actor
  function createActorIfActorNotExists(
    fullName: string,
    birthdate: Date
  ): boolean {
    // asynchronous task to verify name
    // ..
    // ..
    if (fullName === "fernando") return false;

    console.log("Create an actor");
    return true;
  }

  //Continue
  const getPayAmount = ({
    isDead = false,
    isSeparated = true,
    isRetired = false,
  }) => {
    let result;
    if (isDead) {
      result = 1500;
    } else {
      if (isSeparated) {
        result = 2500;
      } else {
        if (isRetired) {
          result = 3000;
        } else {
          result = 4000;
        }
      }
    }

    return result;
  };
})();
