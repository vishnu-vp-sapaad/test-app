import { createContext } from "react";

export const dataContext = createContext<{
  id: number;
  setId: React.Dispatch<React.SetStateAction<number>>;
  data: any[];
  setData: React.Dispatch<React.SetStateAction<never[]>>;
} | null>(null);
