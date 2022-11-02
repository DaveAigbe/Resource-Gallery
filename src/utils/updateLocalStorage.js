const handleLocalStorage = (
  storageKey,
  stateData,
  defaultData,
  updateState
) => {
  const storageItems = localStorage.getItem(storageKey);

  if (storageItems && stateData) {
    localStorage.setItem("categories", JSON.stringify(stateData));
  } else if (storageItems) {
    updateState(JSON.parse(storageItems));
  } else {
    updateState(defaultData);
    localStorage.setItem(storageKey, JSON.stringify(defaultData));
  }
};

export default handleLocalStorage;
