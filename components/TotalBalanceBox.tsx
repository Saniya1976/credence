import React from 'react'
import { formatAmount } from '../lib/utils'
import CountUp from 'react-countup';

interface Account {
  id: string;
  name: string;
  balance: number;
}

interface TotalBalanceBoxProps {
  accounts?: Account[];
  totalBanks: number;
  totalAccountBalance: number;
}
const TotalBalanceBox = ({accounts=[],totalBanks,totalAccountBalance}:TotalBalanceBoxProps) => {
  return (
    <section className='total-balance'>
        <div className='total-balance-chart'>
            {/* doughnut chart */}
        </div>
        <div className='flex flex-col gap-6'>
            <h2 className='header-2'>
                {totalBanks} Bank Account
            </h2>
            <div className='flex flex-col gap-2'>
                <p className='total-balance-label'>
                    Total Balance
                </p>
                <p className='total-balance-amount flex-center gap-2'>
                    <CountUp end={100}/>
                    {formatAmount(totalAccountBalance)}
                </p>
            </div>
        </div>
    </section>
  )
}

export default TotalBalanceBox