// import Button from "../Button/Button";
// import styles from "./forms.module.css";
// import { useState } from "react";
//
// function FormInput() {
//   const [name, setName] = useState("");
//
//   const handleChange = (e) => {
//     setName(e.target.value);
//   };
//
//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };
//
//   return (
//     <section className="form-container">
//       <form className="form" onSubmit={handleSubmit}>
//         <h3 className="form__header">Enter your name</h3>
//
//         <div className="form__fields">
//           <input
//             type="text"
//             id="input-name"
//             name="input-name"
//             className="form__item form__item_name"
//             placeholder="Name"
//             required
//             value={name}
//             onChange={handleChange}
//           />
//           <input
//             type="text"
//             id="input-time"
//             name="input-time"
//             className="form__item form__item_time"
//             disabled
//             value={""}
//           />
//         </div>
//
//         <Button type="submit" className={styles.form__btnSubmit}>
//           OK
//         </Button>
//       </form>
//     </section>
//   );
// }
//
// export default FormInput;
export default {};
