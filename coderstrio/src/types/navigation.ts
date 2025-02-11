// src/types/navigation.ts
export type RootStackParamList = {
  Welcome: undefined;
  Auth: {
    mode?: 'signin' | 'signup';  // Optional parameter to switch between signin/signup
  };
};