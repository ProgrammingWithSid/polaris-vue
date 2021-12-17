export const globalIdGeneratorFactory = (prefix: string, index = 1): string => {
  const queryString = `#Polaris${prefix}${index}`;
  const useUniqueIdRef = document.querySelector(queryString);
  const newIndex = index + 1;

  if (!useUniqueIdRef) return `Polaris${prefix}${index}`;

  return globalIdGeneratorFactory(prefix, newIndex);
};

export const useUniqueID = (prefix: string, overrideID: string): string => {
  if (overrideID) return overrideID;

  return globalIdGeneratorFactory(prefix);
};

export default {};
