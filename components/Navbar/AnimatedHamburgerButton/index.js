import React, { useState } from "react";
import { motion, MotionConfig } from "framer-motion";

function AnimatedHamburgerButton({active, setActive}) {
   
  return (

    <MotionConfig 
        transition={{
            duration:0.5,
            ease:'easeInOut'
      }}>
    
       <motion.button 
       initial={false}
    onClick={()=> setActive((pv)=> !pv)} 
    className="relative w-12  h-12  "
    animate={active ? "open": "closed"}
    >
      <motion.span
      style={{
        left: "50%",
        top: "35%",
        x: "-50%",
        y: "-50%",
      }} 
      variants={{
        open:{
            rotate:["0deg","0deg","45deg"],
            top:["35%","50%","50%"]
        },
        closed:{
            rotate:["45deg","0deg","0deg"],
            top:["50%","50%","35%"]
        }
      }}
      
      className="absolute h-[3px] w-7 bg-white" />

      <motion.span
        style={{
          left: "50%",
          top: "50%",
          x: "-50%",
          y: "-50%",
        }}
        variants={{
            open:{
                rotate:["0deg","0deg","-45deg"]
               
            },
            closed:{
                rotate:["-45deg","0deg","0deg"],
       
            }
          }}
        
        className="absolute h-[3px] w-7 bg-white"
      />

      <motion.span 
      style={{
        left: "calc(50% + 8px)",
        bottom: "35%",
        x: "-50%",
        y: "50%",
      }}
      variants={{
        open:{
            rotate:["0deg","0deg","45deg"],
            left:"50%",
            bottom:["35%","50%","50%"]
        },
        closed:{
            rotate:["45deg","0deg","0deg"],
            left: "calc(50% + 8px)",
            bottom:["50%","50%","35%"]
        }
      }}
      className="absolute h-[3px] w-3 bg-white" />
    </motion.button>
    </MotionConfig>

 
  );
}

export default AnimatedHamburgerButton;
