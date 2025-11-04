import React from "react";
import { CreditCard, TrendingUp, DollarSign, Calendar } from "lucide-react";

interface RightSidebarProps {
  user: {
    username: string;
    email?: string;
  };
  transactions: any[];
  banks: any[];
}

const RightSideBar = ({ user = { username: "John Doe", email: "john@credence.com" }, transactions, banks }: RightSidebarProps) => {
  // Sample data for demonstration
  const cards = [
    {
      id: 1,
      name: "Premium Card",
      lastFour: "4532",
      balance: "$12,450.00",
      type: "Credit",
      color: "from-pink-300 to-pink-400"
    },
    {
      id: 2,
      name: "Savings Account",
      lastFour: "7821",
      balance: "$8,920.50",
      type: "Debit",
      color: "from-teal-300 to-emerald-400"
    }
  ];

  const recentTransactions = [
    { id: 1, name: "Netflix Subscription", amount: "-$15.99", date: "Nov 3", icon: "💳" },
    { id: 2, name: "Salary Deposit", amount: "+$3,500.00", date: "Nov 1", icon: "💰" },
    { id: 3, name: "Grocery Store", amount: "-$87.45", date: "Oct 31", icon: "🛒" },
    { id: 4, name: "Electric Bill", amount: "-$125.00", date: "Oct 30", icon: "⚡" }
  ];

  return (
    <aside className="h-full bg-blue-50 overflow-hidden flex flex-col">
      {/* Gradient Header Section */}
      <section className="relative h-44 bg-gradient-to-br from-cyan-400 via-blue-400 to-pink-500 overflow-hidden flex-shrink-0">
        {/* Additional gradient overlay for smoother transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-400/30 to-pink-400/40"></div>
        
        {/* User Profile Circle at bottom center */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-4 z-10">
          <div className="size-20 rounded-full bg-gradient-to-br from-white to-gray-50 flex items-center justify-center shadow-2xl border-4 border-white ring-4 ring-blue-100">
            <span className="text-4xl font-bold bg-gradient-to-br from-blue-500 to-blue-700 bg-clip-text text-transparent">
              {user.username[0].toUpperCase()}
            </span>
          </div>
        </div>
      </section>

      {/* User Name Section */}
      <section className="pt-4 pb-4 px-6 text-center bg-blue-50 flex-shrink-0">
        <h2 className="text-lg font-bold text-gray-800">{user.username}</h2>
        <p className="text-gray-600 text-xs">{user.email || "Premium Member"}</p>
      </section>

      {/* Cards Section */}
      <section className="px-6 mb-4 flex-shrink-0">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-base font-bold text-gray-800">My Cards</h3>
          <button className="text-blue-600 text-xs font-semibold hover:text-blue-700">
            + Add
          </button>
        </div>
        
        <div className="space-y-3">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`bg-gradient-to-br ${card.color} rounded-xl p-4 text-white shadow-lg hover:shadow-xl transition-all cursor-pointer relative overflow-hidden`}
              style={{ zIndex: cards.length - index }}
            >
              {/* Gradient mesh circles */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-20 rounded-full blur-3xl -mr-8 -mt-8"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-15 rounded-full blur-2xl -ml-8 -mb-8"></div>
              <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-white opacity-10 rounded-full blur-xl"></div>
              
              <div className="relative z-10 flex justify-between items-start mb-6">
                <div>
                  <p className="text-white text-opacity-80 text-xs mb-1">{card.type} Card</p>
                  <p className="font-semibold text-sm">{card.name}</p>
                </div>
                <CreditCard className="size-5" />
              </div>
              
              <div className="relative z-10 flex justify-between items-end">
                <div>
                  <p className="text-white text-opacity-80 text-xs mb-1">Balance</p>
                  <p className="text-xl font-bold">{card.balance}</p>
                </div>
                <div className="text-right">
                  <p className="text-white text-opacity-80 text-xs mb-1">Card Number</p>
                  <p className="font-mono text-xs">•••• {card.lastFour}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Stats */}
      <section className="px-6 mb-4 flex-shrink-0">
        <h3 className="text-base font-bold text-gray-800 mb-3">Quick Stats</h3>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-white rounded-lg p-3 shadow-sm border border-blue-100">
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1.5 bg-blue-100 rounded-lg">
                <TrendingUp className="size-3.5 text-blue-600" />
              </div>
            </div>
            <p className="text-xs text-gray-500 mb-1">Monthly Spending</p>
            <p className="text-base font-bold text-gray-800">$2,341</p>
          </div>
          
          <div className="bg-white rounded-lg p-3 shadow-sm border border-blue-100">
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1.5 bg-blue-100 rounded-lg">
                <DollarSign className="size-3.5 text-blue-600" />
              </div>
            </div>
            <p className="text-xs text-gray-500 mb-1">Total Balance</p>
            <p className="text-base font-bold text-gray-800">$21,370</p>
          </div>
        </div>
      </section>

      {/* Recent Transactions */}
      <section className="px-6 flex-1 flex flex-col min-h-0">
        <h3 className="text-base font-bold text-gray-800 mb-3 flex-shrink-0">Recent Activity</h3>
        <div className="bg-white rounded-lg p-3 shadow-sm border border-blue-100 flex-1 overflow-y-auto">
          <div className="space-y-3">
            {recentTransactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="size-8 bg-blue-50 rounded-full flex items-center justify-center text-base">
                    {transaction.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-xs text-gray-800">{transaction.name}</p>
                    <p className="text-xs text-gray-500">{transaction.date}</p>
                  </div>
                </div>
                <p className={`font-bold text-xs ${transaction.amount.startsWith('+') ? 'text-green-600' : 'text-gray-800'}`}>
                  {transaction.amount}
                </p>
              </div>
            ))}
          </div>
          
          <button className="w-full mt-3 py-2 text-blue-600 text-xs font-semibold hover:bg-blue-50 rounded-lg transition-colors">
            View All
          </button>
        </div>
      </section>
    </aside>
  );
};

export default RightSideBar;