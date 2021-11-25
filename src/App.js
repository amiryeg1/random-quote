import React from "react";
import "./App.css";
import QouteBox from "./components/qoute_box";
import { motion } from "framer-motion"
function App() {
 
  return (
    <React.Fragment>
      <motion.div
      className="title"
      animate={{opacity:[.3,1]}}
      transition={{yoyo:Infinity,duration:.8}}
      >
        <p>quote generator</p></motion.div>
    <motion.div className="App"
    initial={{y: "100vh"}}
    animate={{y: 0}}
    transition={{duration:2, stiffness:200, type: "spring"}}
    >
      
      <QouteBox />
    </motion.div>
    </React.Fragment>
  );
}

export default App;
