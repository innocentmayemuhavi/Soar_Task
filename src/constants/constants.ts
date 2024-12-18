import { QuickTransferType, TabsType } from "../models";
import livia from "../assets/icons/livia.svg";
import randy from "../assets/icons/randy.svg";
import workman from "../assets/icons/workman.svg";
const tabs: TabsType[] = [
  {
    id: 1,
    name: "Edit Profile",
    icon: "edit",
    isDisabled: false,
  },
  {
    id: 2,
    name: "Preferences",
    icon: "preferences",
    isDisabled: true,
  },
  {
    id: 3,
    name: "Security",
    icon: "security",
    isDisabled: true,
  },
];

const quickTransfer: QuickTransferType[] = [
  {
    name: "Livia Bator",
    image: livia,
    role: "CEO",
  },
  {
    name: "Randy Press",
    image: randy,
    role: "Director",
  },
  {
    name: "Workman",
    image: workman,
    role: "Designer",
  },
];

const weeklyActivity = [
  { deposit: 650, withdraw: 300 },
  { deposit: 500, withdraw: 325 },
  { deposit: 380, withdraw: 440 },
  { deposit: 681, withdraw: 435 },
  { deposit: 356, withdraw: 720 },
  { deposit: 455, withdraw: 815 },
  { deposit: 740, withdraw: 510 },
];
const weeklyActivityData = {
  labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
  datasets: [
    {
      label: "Deposits",
      data: weeklyActivity.map((activity) => activity.deposit),
      backgroundColor: "#396AFF",
      borderColor: "#396AFF",
      borderWidth: 1,
      borderRadius: 30,
    },
    {
      label: "Withdrawals",
      data: weeklyActivity.map((activity) => activity.withdraw),
      backgroundColor: "#232323",
      borderColor: "#232323",
      borderWidth: 1,
      borderRadius: 30,
    },
  ],
};
const pieData = {
  labels: ["Bill Expense", "Others", "Investment", "Entertainment"],
  datasets: [
    {
      label: "Expenses",
      data: [15, 35, 20, 30],
      backgroundColor: ["#FC7900", "#232323", "#396AFF", "#343C6A"],
      borderColor: ["#FC7900", "#232323", "#396AFF", "#343C6A"],
      borderWidth: 1,
      hoverOffset: 50,
    },
  ],
};
const lineChartData = {
  labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
  datasets: [
    {
      label: "Balance History",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: true,
      backgroundColor: "rgba(24, 20, 243, 0.2)",
      borderColor: "#1814F3",
      tension: 0.3,
    },
  ],
};
export { tabs, quickTransfer, weeklyActivityData, pieData, lineChartData };
