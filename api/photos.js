const PHOTO_URL = "src/data/photos.json";

export const getPhotos = async () => {
  const response = await fetch(PHOTO_URL);
  const { photos } = await response.json();
  return photos;
}


