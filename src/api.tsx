const API_KEY = `72caad34e2c43d870d78d98ae9a0980b`;
export async function getMoviesFromAPI() {
  return await (
    await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    )
  ).json();
}
