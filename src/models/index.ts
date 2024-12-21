interface User {
  name: string;
  user_name: string;
  email: string;
  date_of_birth: string;
  permanent_address: string;
  present_address: string;
  postal_code: number;
  country: string;
  city: string;
  password: string;
  profile_image: string;
}

interface RecentTransactionType {
  id: number;
  amount: number;
  date: string;
  description: string;
  type: string;
  image: string;
  color: string;
}

interface TransactionType {
  id: number;
  amount: number;
  date: string;
  description: string;
  type: string;
}
interface CardType {
  id: number;
  card_number: string;
  card_holder: string;
  expiration_date: string;
  cvv: number;
  balance: number;
  transactions: TransactionType[];
}

interface ExpenceType {
  id: number;
  name: string;
  amount: number;
  date: string;
}

interface BalanceType {
  id: number;
  balance: number;
  date: string;
}

interface QuickTransferType {
  name: string;
  role: string;
  image: string;
}

interface TabsType {
  id: number;
  name: string;
  icon: string;
  isDisabled: boolean;
}

interface CardType {
  id: number;
  card_number: string;
  card_holder: string;
  expiration_date: string;
  cvv: number;
  balance: number;
  type: string;
}

export type {
  User,
  RecentTransactionType,
  TransactionType,
  CardType,
  ExpenceType,
  BalanceType,
  QuickTransferType,
  TabsType,
};
