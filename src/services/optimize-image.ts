import blankImage from "../assets/no-image-placeholder-6f3882e0.webp";

const getCroppedImageURL = (imageURL: string) => {
  if (imageURL == null) return blankImage;
  const target = "media/";
  const index = imageURL.indexOf(target) + target.length;
  return imageURL.slice(0, index) + "crop/600/400/" + imageURL.slice(index);
};

export default getCroppedImageURL;
