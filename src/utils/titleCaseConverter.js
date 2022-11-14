export const titleCaseConverter = (text) => {
  const textArr = text.split(" ");

  return textArr
    .map((text) => {
      const titleCaseWord = text.toLowerCase();
      return titleCaseWord[0].toUpperCase() + titleCaseWord.slice(1);
    })
    .join(" ");
};
