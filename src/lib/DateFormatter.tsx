export const dateFormatter = (date: Date) => {
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "short" });
    const year = date.getFullYear();

    const getOrdinalSuffix = (n: number) => {
      if (n > 3 && n < 21) return "th";
      switch (n % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
      }
    };

    return `${day}${getOrdinalSuffix(day)} ${month} ${year}`;
  };
