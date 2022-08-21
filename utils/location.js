import * as KEYS from "../private/api_keys";

export function getMapPreviewURL(lat, long) {
  const imagePreviewURL = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${long}&zoom=14&size=400x200&markers=${lat},${long}&key=${KEYS.GOOGLE_API_KEY}`;
  return imagePreviewURL;
}
