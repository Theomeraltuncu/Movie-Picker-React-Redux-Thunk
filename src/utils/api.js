import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTI5MjU4YTAzNTIzOTRjZmQ0YjAzZjljY2U4NjkxYyIsInN1YiI6IjY2MmE0Y2RjOGZkZGE5MDExZGRjZTJlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-j7IdmKtNEv_2L9a-lVLWaSt1JuN2P5NuzXucNGy9hM",
  },
  params: {
    language: "en-US",
  },
});

{
  /*
ÇALIŞMADI


VITE_API_KEY=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTI5MjU4YTAzNTIzOTRjZmQ0YjAzZjljY2U4NjkxYyIsInN1YiI6IjY2MmE0Y2RjOGZkZGE5MDExZGRjZTJlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-j7IdmKtNEv_2L9a-lVLWaSt1JuN2P5NuzXucNGy9hM

${import.meta.env.VITE_API_KEY}
*/
}
