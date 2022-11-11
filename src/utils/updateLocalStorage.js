/*
 * 1. If the local storage has items and the state has already been set, update the local storage with to match new state
 * 2. If the local storage has items, but the state is null(website visited but initial render), use local storage to update state
 * 3. If the local storage and the state are both null, (website never visited and initial render), then use default data to update
 *    state and also use default data to store in local storage
 * */

const handleLocalStorage = (
  storageKey,
  stateData,
  defaultData,
  updateState
) => {
  const storageItems = localStorage.getItem(storageKey);

  if (storageItems && stateData) {
    // 1.
    localStorage.setItem(storageKey, JSON.stringify(stateData));
  } else if (storageItems) {
    // 2.
    updateState(JSON.parse(storageItems));
  } else {
    // 3.
    updateState(defaultData);
    localStorage.setItem(storageKey, JSON.stringify(defaultData));
  }
};

export default handleLocalStorage;
