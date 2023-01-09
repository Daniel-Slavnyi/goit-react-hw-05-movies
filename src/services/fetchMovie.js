import axios from 'axios';

export async function fetchMovieByTranding() {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=b352bff27d13f879cd11233ba2656e5c&language=en-US&page=1`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchMovieByQery(qery) {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${qery}&api_key=b352bff27d13f879cd11233ba2656e5c&language=en-US&page=1&include_adult=false`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchMovieById(id) {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=b352bff27d13f879cd11233ba2656e5c&language=en-US`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchMovieForCredits(id) {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}}/credits?api_key=b352bff27d13f879cd11233ba2656e5c&language=en-US`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchMovieForReviews(id) {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=b352bff27d13f879cd11233ba2656e5c&language=en-US&page=1`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}
