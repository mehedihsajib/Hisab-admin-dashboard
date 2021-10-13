/* eslint-disable no-nested-ternary */
import React from 'react';
import activeUsers from '../../assets/data/activeUsers';
import transactionData from '../../assets/data/transactionData';
import ActiveUsers from './ActiveUsers';
import LatestTransaction from './LatestTransaction';

function Widget() {
    return (
        <div className="widget">
            <div className="widget__content">
                <div className="widget__active-users">
                    <h3 className="heading__tertiary">Active Users</h3>
                    <ul className="widget__active-items">
                        {activeUsers.map((user) => (
                            <ActiveUsers
                                key={user.id}
                                avatar={user.avatar}
                                name={user.name}
                                title={user.title}
                            />
                        ))}
                    </ul>
                </div>
                <div className="widget__transaction-list">
                    <h3 className="heading__tertiary">Latest Transactions</h3>

                    <table className="transaction__table">
                        <tr className="transaction__table-row">
                            <th className="transaction__table-head">Customer</th>

                            <th className="transaction__table-head">Date</th>
                            <th className="transaction__table-head">Amount</th>
                            <th className="transaction__table-head">Status</th>
                        </tr>

                        {transactionData.map((data) => (
                            <LatestTransaction
                                key={data.key}
                                avatar={data.avatar}
                                name={data.name}
                                date={data.date}
                                amount={data.amount}
                                btnText={data.status}
                            />
                        ))}
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Widget;
