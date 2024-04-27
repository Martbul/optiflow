import { NavLink } from "react-router-dom";


export default function Footer() {
   return (
     <>
       <div className="section footer">
         <div className="container">
           <div className="f-footer-bottom">
             <div className="f-footer-brand">
               
               <h3 >Optiflow</h3>
             </div>
             <div className="f-footer-group">
               <div
                 id="w-node-_8b60789d-c53f-71f2-bed6-2e2e7d3a27df-7d3a27d8"
                 className="f-footer-menu"
               >
                 <NavLink
                   to="https://www.axeautomation.co/#features"
                   className="navlinks w-inline-block"
                 >
                   <div>About Us</div>
                 </NavLink>
                 <div className="f-footer-vertical-divider" />
                 <NavLink
                   to="https://www.axeautomation.co/#testimonials"
                   className="navlinks w-inline-block"
                 >
                   <div>Testimonials</div>
                 </NavLink>
                 <div className="f-footer-vertical-divider" />
                 <NavLink
                   to="/free-automation-consultation"
                   className="navlinks w-inline-block"
                 >
                   <div>Book a Call</div>
                 </NavLink>
               </div>
               <div className="f-footer-social-row-large">
                 <div className="f-footer-social-group">
                   <NavLink
                     to="https://www.youtube.com/@itsedaxe"
                     target="_blank"
                     className="f-footer-social w-inline-block"
                   >
                     <div className="f-icon-regular w-embed">
                       <svg
                         xmlns="http://www.w3.org/2000/svg"
                         width={24}
                         height={24}
                         viewBox="0 0 24 24"
                         fill="none"
                         stroke="currentColor"
                         strokeWidth={2}
                         strokeLinecap="round"
                         strokeLinejoin="round"
                         className="feather feather-youtube"
                       >
                         <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                         <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                       </svg>
                     </div>
                   </NavLink>
                   <a
                     href="https://twitter.com/itsedaxe"
                     target="_blank"
                     className="f-footer-social w-inline-block"
                   >
                     <div className="f-icon-regular w-embed">
                       <svg
                         width={24}
                         height={24}
                         viewBox="0 0 24 24"
                         fill="none"
                         xmlns="http://www.w3.org/2000/svg"
                       >
                         <path
                           d="M20.9727 6.7174C20.5083 7.33692 19.9469 7.87733 19.3102 8.31776C19.3102 8.47959 19.3102 8.64142 19.3102 8.81225C19.3153 11.7511 18.1414 14.5691 16.0517 16.6345C13.9619 18.6999 11.1311 19.8399 8.19393 19.7989C6.49587 19.8046 4.81955 19.4169 3.2963 18.6661C3.21416 18.6302 3.16119 18.549 3.1615 18.4593V18.3604C3.1615 18.2313 3.26611 18.1267 3.39515 18.1267C5.0643 18.0716 6.6739 17.4929 7.99622 16.4724C6.48541 16.4419 5.12607 15.5469 4.50048 14.1707C4.46889 14.0956 4.47872 14.0093 4.52645 13.9432C4.57417 13.8771 4.65288 13.8407 4.73413 13.8471C5.1933 13.8932 5.65706 13.8505 6.10008 13.7212C4.43227 13.375 3.17909 11.9904 2.99974 10.2957C2.99337 10.2144 3.0298 10.1357 3.09588 10.0879C3.16195 10.0402 3.24812 10.0303 3.32326 10.062C3.77082 10.2595 4.25397 10.3635 4.74312 10.3676C3.28172 9.40846 2.65049 7.58405 3.20643 5.92622C3.26382 5.76513 3.40169 5.64612 3.56938 5.61294C3.73706 5.57975 3.90984 5.63728 4.0242 5.76439C5.99627 7.86325 8.70592 9.11396 11.5818 9.25279C11.5082 8.95885 11.472 8.65676 11.474 8.35372C11.5009 6.76472 12.4841 5.34921 13.9633 4.76987C15.4424 4.19054 17.1248 4.56203 18.2229 5.71044C18.9713 5.56785 19.6949 5.31645 20.3706 4.96421C20.4201 4.93331 20.4829 4.93331 20.5324 4.96421C20.5633 5.01373 20.5633 5.07652 20.5324 5.12604C20.2051 5.87552 19.6522 6.50412 18.9508 6.92419C19.565 6.85296 20.1684 6.70807 20.7481 6.49264C20.7969 6.45942 20.861 6.45942 20.9098 6.49264C20.9507 6.51134 20.9813 6.54711 20.9934 6.59042C21.0055 6.63373 20.9979 6.68018 20.9727 6.7174Z"
                           fill="currentColor"
                         />
                       </svg>
                     </div>
                   </a>
                   <a
                     href="https://www.linkedin.com/company/axeautomation/"
                     target="_blank"
                     className="f-footer-social w-inline-block"
                   >
                     <div className="f-icon-regular w-embed">
                       <svg
                         width={24}
                         height={24}
                         viewBox="0 0 24 24"
                         fill="none"
                         xmlns="http://www.w3.org/2000/svg"
                       >
                         <path
                           fillRule="evenodd"
                           clipRule="evenodd"
                           d="M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3ZM8 18C8.27614 18 8.5 17.7761 8.5 17.5V10.5C8.5 10.2239 8.27614 10 8 10H6.5C6.22386 10 6 10.2239 6 10.5V17.5C6 17.7761 6.22386 18 6.5 18H8ZM7.25 9C6.42157 9 5.75 8.32843 5.75 7.5C5.75 6.67157 6.42157 6 7.25 6C8.07843 6 8.75 6.67157 8.75 7.5C8.75 8.32843 8.07843 9 7.25 9ZM17.5 18C17.7761 18 18 17.7761 18 17.5V12.9C18.0325 11.3108 16.8576 9.95452 15.28 9.76C14.177 9.65925 13.1083 10.1744 12.5 11.1V10.5C12.5 10.2239 12.2761 10 12 10H10.5C10.2239 10 10 10.2239 10 10.5V17.5C10 17.7761 10.2239 18 10.5 18H12C12.2761 18 12.5 17.7761 12.5 17.5V13.75C12.5 12.9216 13.1716 12.25 14 12.25C14.8284 12.25 15.5 12.9216 15.5 13.75V17.5C15.5 17.7761 15.7239 18 16 18H17.5Z"
                           fill="currentColor"
                         />
                       </svg>
                     </div>
                   </a>
                 </div>
               </div>
             </div>
           </div>
           <div className="f-footer-horizontal-divider" />
           <div className="f-footer-bottom top">
             <div className="f-footer-brand">
               <div className="copyright-text">
                 Copyright Optiflow ©2024
               </div>
             </div>
           </div>
         </div>
       </div>
     </>
   );
}