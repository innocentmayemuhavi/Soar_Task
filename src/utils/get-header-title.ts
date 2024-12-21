const getHeaderTitle = (pathname: string) => {
  switch (pathname) {
    case "/":
      return "Overview";
    case "/transactions":
      return "Transactions";
    case "/accounts":
      return "Accounts";
    case "/investments":
      return "Investments";
    case "/creditcards":
      return "Credit Cards";
    case "/loans":
      return "Loans";
    case "/services":
      return "Services";
    case "/settings":
      return "Settings";
    default:
      return "Overview";
  }
};

export default getHeaderTitle;
