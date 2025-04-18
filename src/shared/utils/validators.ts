export const validateName = (value: string): string => {
  if (value.trim() === "") {
    return "Name can't be empty";
  }
  if (value.length < 3) {
    return "Too short";
  }
  if (value.length > 100) {
    return "Too long";
  }
  return "";
};

export const validateUrl = (value: string): string => {
  if (value.trim() === "") {
    return "URL can't be empty";
  }

  const urlRegex = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/i;

  if (!urlRegex.test(value)) {
    return "Please enter a valid URL";
  }

  return "";
};

export const validateLikes = (value: string): string => {
  const likesRegex = /^(?:[1-9]?[0-9])$/;

  if (value.trim() === "") {
    return "Likes can't be empty";
  }
  if (!likesRegex.test(value)) {
    return "Likes must be a number between 0 and 99";
  }

  return "";
};
