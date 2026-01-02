// import Navbar from "./Nav";

// import styles from "./Info.module.css";


// export default function Info(){
//     return(
//         <main className={styles.main}>
//              {/* <Navbar/> */}
//         <img src="/icon.jpg" alt="WorldWise logo" className={styles.logo} />
//           <h1   className={styles.title}>
//              YSL BRAND
//           </h1>
//         <p  className={styles.text}>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, ea voluptatibus iste suscipit, quaerat quo nihil deserunt quam sed ad accusantium iusto aliquid 
//             labore aut fuga reprehenderit. Culpa, error in?
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis consequatur porro quis sapiente, saepe officiis voluptatum quod sed ducimus perferendis eos accusantium modi,\
//              rem quae velit excepturi, laboriosam cum sequi!
//              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis omnis reiciendis, vero impedit harum possimus aperiam, incidunt, expedita quo soluta placeat accusamus inventore sapiente?
//               Consequuntur nesciunt ducimus quos laboriosam rerum.
//              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora velit veritatis beatae reprehenderit maxime impedit sapiente labore recusandae vitae est eveniet in,
//               qui eum veniam quia hic pariatur incidunt alias.
//              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, ea voluptatibus iste suscipit, quaerat quo nihil deserunt quam sed ad accusantium iusto aliquid 
            
//         </p>
//         </main>
//     )
// }







import styles from "./info.module.css";
// import Navbar from "./Nav";

export default function Info() {
  return (
    <main className={styles.product}>
       {/* <Navbar/> */}
      <section>
        <img
          src="icon.jpg"
          alt="Mark"
        />
        <div>
          <h2> YSL BRAND</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est
            dicta illum vero culpa cum quaerat architecto sapiente eius non
            soluta, molestiae nihil laborum, placeat debitis, laboriosam at fuga
            perspiciatis?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            doloribus libero sunt expedita ratione iusto, magni, id sapiente
            sequi officiis et.
          </p>
        </div>
      </section>
    </main>
  );
}