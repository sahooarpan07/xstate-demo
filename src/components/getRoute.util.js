const getRoute = (accountType, vetName) => {
  switch (accountType) {
    case "military":
      return "/military";
    case "university":
      return "/university";
    case "vet":
      // if (vetName) {
      return "/vetIndian";

    //return "/vetquestionarrie";
    default:
      return "/vetquestionarrie";
  }
};

export { getRoute };
