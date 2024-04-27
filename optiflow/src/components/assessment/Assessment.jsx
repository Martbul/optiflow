import { NavLink } from "react-router-dom";
import "./Assessment.css"

export default function Assessment() {
   return (
     <>
       <div className="section cta-section">
         <div className="container">
           <div
             data-w-id="5617e953-0e77-5c94-9a3f-12bdb0b2fbc9"
             style={{
               transform:
                 "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
               opacity: 1,
               transformStyle: "preserve-3d",
             }}
             className="w-layout-grid grid"
           >
             <div className="cta-32">
               <h2 className="h2-center-white smaller">
                 Ready to systematize and automate your business?
               </h2>
               <p className="paragraph _60 top white">
                 Manual processes are time-consuming and tedious. Automation
                 allows your employees to focus on more engaging tasks, which
                 increases their satisfaction.
               </p>
               <NavLink
                 to="/free-automation-consultation"
                 className="button white w-button"
               >
                 Book a Free Call →
               </NavLink>
             </div>
             <div className="cta-grey">
               <p className="paragraph _60 down-16">
                 Not sure if your business is ready to automate yet?
               </p>
               <h2 className="h2-center-white smaller black">
                 Check our Automation Business Assessment below
               </h2>
               <NavLink
                 to="https://1cc2q1rtsz0.typeform.com/to/Q0vE6XjL"
                 target="_blank"
                 className="button white down w-button"
               >
                 Take Automation Quiz →
               </NavLink>
               <div className="div-block-16">
                 <div className="div-block-17">
                   <div className="button inner">Automation Assessment</div>
                   <div className="button inner">Automation Assessment</div>
                   <div className="button inner">Automation Assessment</div>
                   <div className="button inner">Automation Assessment</div>
                 </div>
                 <div className="div-block-17 negat">
                   <div className="button inner">Automation Assessment</div>
                   <div className="button inner">Automation Assessment</div>
                   <div className="button inner">Automation Assessment</div>
                   <div className="button inner">Automation Assessment</div>
                 </div>
               </div>
             </div>
           </div>
         </div>
         <img
           src="https://assets-global.website-files.com/6427c6c769d01c2f58037956/6429745b66cfe6b77f861dbe_Line%206.svg"
           loading="lazy"
           alt=""
           className="image-3"
         />
       </div>
     </>
   );
}