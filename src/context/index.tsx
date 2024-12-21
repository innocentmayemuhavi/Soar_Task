import { createContext, useEffect, useState } from "react";
import { User, CardType, ExpenceType, BalanceType } from "../models";
import { getUser } from "../services";

interface CoreContextType {
  loading: boolean;
  user: User | null;
  cards: CardType[];
  expences: ExpenceType[];
  balances: BalanceType[];
  notification: string;
  showSideBar: boolean;
  setUser: (user: User) => void;
  setLoading: (loading: boolean) => void;
  showNotification: (message: string) => void;
  setNotification: (message: string) => void;
  setExpences: (expences: ExpenceType[]) => void;
  setBalances: (balances: BalanceType[]) => void;
  setCards: (cards: CardType[]) => void;
  setShowSideBar: (showSideBar: boolean) => void;
}

const CoreContext = createContext({
  loading: false,
  user: null,
  cards: [],
  expences: [],
  balances: [],
  notification: "",
  showSideBar: false,
  setUser: () => {},
  setLoading: () => {},
  showNotification: () => {},
  setNotification: () => {},
  setExpences: () => {},
  setBalances: () => {},
  setCards: () => {},
  setShowSideBar: () => {},
} as CoreContextType);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [notification, setNotification] = useState<string>("");
  const [expences, setExpences] = useState<ExpenceType[]>([]);
  const [balances, setBalances] = useState<BalanceType[]>([]);
  const [cards, setCards] = useState<CardType[]>([]);
  const [showSideBar, setShowSideBar] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await getUser();
        if (res) {
          setUser(res);
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
    })();

    return () => {};
  }, []);

  return (
    <CoreContext.Provider
      value={{
        loading,
        user,
        cards,
        expences,
        balances,
        notification,
        showSideBar,
        setUser,
        setLoading,
        showNotification: setNotification,
        setNotification,
        setExpences,
        setBalances,
        setCards,
        setShowSideBar,
      }}
    >
      {children}
    </CoreContext.Provider>
  );
};

export { CoreContext, AuthProvider };
