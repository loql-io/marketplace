import { createContext, useContext } from 'react';

const AppContext = createContext();

export function AppWrapper({ communityData, children }) {
  let sharedState = {
    communityData
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
