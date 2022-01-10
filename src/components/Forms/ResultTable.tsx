// import React, { useState, useEffect } from "react";
// import Button from "../Button/Button";
// import styles from "./forms.module.css";
// import cn from "classnames";
//
// function ResultsItem() {
//   return (
//     <li className={styles.form__listItem}>
//       <input
//         type="text"
//         id="input-name"
//         name="input-name"
//         className={cn(styles.form__item, styles.form__item_name)}
//         disabled
//         value={""}
//       />
//       <input
//         type="text"
//         id="input-time"
//         name="input-time"
//         className={cn(styles.form__item, styles.form__item_time)}
//         disabled
//         value={ ""}
//       />
//     </li>
//   );
// }
//
// function FormResults(props) {
//   const [resultsTable, setResultsTable] = useState([]);
//
//   useEffect(() => {
//     if (localStorage.getItem(LOCAL_STORAGE_KEY)) {
//       const results = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
//       setResultsTable(results);
//     }
//   }, []);
//
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     props.onSubmitResults();
//   };
//
//   const getResults = (array) => {
//     if (array.length > 0) {
//       array.sort((a, b) => a.time - b.time);
//       return (
//         <ul className={styles.form__list}>
//           {array.map((item, index) => (
//             <ResultsItem key={index} name={item.name} time={item.time} />
//           ))}
//         </ul>
//       );
//     } else {
//       return <p className="form__empty">No results yet</p>;
//     }
//   };
//
//   return (
//     <section className={styles.formContainer}>
//       <form className="form" onSubmit={handleSubmit}>
//         <h3 className={styles.form__header}>Results</h3>
//         {getResults(resultsTable)}
//         <Button type="submit" className={styles.form__btnSubmit}>
//           OK
//         </Button>
//       </form>
//     </section>
//   );
// }
//
// export default FormResults;
export default {};
