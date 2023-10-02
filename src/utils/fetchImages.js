// import { createClient } from 'pexels';

export default async function fetchImages() {
  const APIkey = import.meta.env.VITE_PEXELS;
  const query = 'train';

  const imageRequest = await fetch(
    `https://api.pexels.com/v1/search?query=${query}&per_page=15&page=1`,
    {
      headers: {
        Authorization: APIkey,
      },
    },
  ).then((response) => response.json());

  const images = [...imageRequest.photos].map((image) => ({
    author: image.photographer,
    url: image.src.large,
    id: crypto.randomUUID(),
  }));

  return images;
}
