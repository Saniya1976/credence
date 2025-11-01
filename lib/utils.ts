/* eslint-disable no-prototype-builtins */
import { type ClassValue, clsx } from "clsx";
import qs from "query-string";
import { twMerge } from "tailwind-merge";

// ✅ Merge Tailwind classes safely
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ✅ Proper typing for input: can take string or Date
export const formatDateTime = (dateInput: string | Date) => {
  const date = new Date(dateInput);

  const dateTimeOptions: Intl.DateTimeFormatOptions = {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  const dateDayOptions: Intl.DateTimeFormatOptions = {
    weekday: "short",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };

  const dateOptions: Intl.DateTimeFormatOptions = {
    month: "short",
    year: "numeric",
    day: "numeric",
  };

  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  return {
    dateTime: date.toLocaleString("en-US", dateTimeOptions),
    dateDay: date.toLocaleString("en-US", dateDayOptions),
    dateOnly: date.toLocaleString("en-US", dateOptions),
    timeOnly: date.toLocaleString("en-US", timeOptions),
  };
};

// ✅ Currency formatter
export function formatAmount(amount: number): string {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
  return formatter.format(amount);
}

// ✅ Safe deep clone
export const parseStringify = <T>(value: T): T =>
  JSON.parse(JSON.stringify(value));

// ✅ Remove special characters
export const removeSpecialCharacters = (value: string) => {
  return value.replace(/[^\w\s]/gi, "");
};

// ✅ URL query builder
interface UrlQueryParams {
  params: string;
  key: string;
  value: string;
}

export function formUrlQuery({ params, key, value }: UrlQueryParams) {
  const currentUrl = qs.parse(params);
  currentUrl[key] = value;

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    { skipNull: true }
  );
}

// ✅ Define missing types
type AccountTypes = "depository" | "credit" | "investment";

export function getAccountTypeColors(type: AccountTypes) {
  switch (type) {
    case "depository":
      return {
        bg: "bg-blue-25",
        lightBg: "bg-blue-100",
        title: "text-blue-900",
        subText: "text-blue-700",
      };
    case "credit":
      return {
        bg: "bg-success-25",
        lightBg: "bg-success-100",
        title: "text-success-900",
        subText: "text-success-700",
      };
    default:
      return {
        bg: "bg-green-25",
        lightBg: "bg-green-100",
        title: "text-green-900",
        subText: "text-green-700",
      };
  }
}

// ✅ Define Transaction + CategoryCount types
interface Transaction {
  id: string;
  amount: number;
  category: string;
  date: string;
}

interface CategoryCount {
  name: string;
  count: number;
  totalCount: number;
}

export function countTransactionCategories(
  transactions: Transaction[]
): CategoryCount[] {
  const categoryCounts: Record<string, number> = {};
  let totalCount = 0;

  transactions?.forEach((transaction) => {
    const category = transaction.category;
    categoryCounts[category] = (categoryCounts[category] || 0) + 1;
    totalCount++;
  });

  const aggregatedCategories: CategoryCount[] = Object.keys(categoryCounts).map(
    (category) => ({
      name: category,
      count: categoryCounts[category],
      totalCount,
    })
  );

  aggregatedCategories.sort((a, b) => b.count - a.count);

  return aggregatedCategories;
}

// ✅ Extract ID from URL
export function extractCustomerIdFromUrl(url: string) {
  const parts = url.split("/");
  return parts[parts.length - 1];
}

// ✅ Encode / Decode IDs safely
export function encryptId(id: string) {
  return btoa(id);
}

export function decryptId(id: string) {
  return atob(id);
}

// ✅ Transaction status
export const getTransactionStatus = (date: Date) => {
  const today = new Date();
  const twoDaysAgo = new Date(today);
  twoDaysAgo.setDate(today.getDate() - 2);
  return date > twoDaysAgo ? "Processing" : "Success";
};
