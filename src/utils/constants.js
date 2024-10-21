export const api_options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YmQzMzAxZWY2ZDQyYWExYWE1OTdjYzFhMjBkNDI3OCIsIm5iZiI6MTcyOTA2Nzc5Ny42NjE3NzUsInN1YiI6IjY3MGY3M2UyMDFjODVjNGZkODFhNDc0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vB0X75jV8BaCkIxvjDiaYlrSYtFvFjlL3znlAC4kAOk'
  }
};
export const randomTrailer = Math.floor(Math.random() * 20);

//   fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));