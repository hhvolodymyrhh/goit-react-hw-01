import styles from "./Transactions.module.css";
//використання className={clsx("add", "vaa")}
// import clsx from "clsx";

const TransactionHistory = ({ items }) => {

  return (
    <table className = {styles.table}>
      <thead className = {styles.thead}>
        <tr className = {styles.tr_head}>
          <th className = {styles.cell}>Type</th>
          <th className = {styles.cell}>Amount</th>
          <th className = {styles.cell}>Currency</th>
        </tr>
      </thead>
      <tbody className = {styles.tbody}>
        {items.map(({ id, type, amount, currency }) => {
          return (
              
            <tr key={id} className = {styles.tr_body}>
              <td className = {styles.cell}>{type}</td>
              <td className = {styles.cell}>{amount}</td>
              <td className = {styles.cell}>{currency}</td>
            </tr>
          );
        })
        }
      </tbody>
    </table>
  );
};
export default TransactionHistory;