import "./Navigations.css"

export default function Navigation() {
   return (
     <>
       <div
         data-animation="default"
         data-collapse="medium"
         data-duration={400}
         data-easing="ease"
         data-easing2="ease"
         role="banner"
         className="navbar w-nav"
       >
         <div className="container flex w-container">
           <div className="brand">
             <a href="/" className="brand-logo w-nav-brand" aria-label="home">
               <img
                 src="https://assets-global.website-files.com/6427c6c769d01c2f58037956/6432499d11af0d4fe2a122f3_axe-logo.png"
                 loading="lazy"
                 alt=""
                 className="image"
                     />
                     
             </a>
           </div>
           <nav role="navigation" className="nav-menu w-nav-menu">
             <div class="dropdown">
               {/* <button class="dropbtn">Dropdown</button> */}
               <div
                 className="nav-link w-dropdown-toggle"
                 id="w-dropdown-toggle-0"
                 aria-controls="w-dropdown-list-0"
                 aria-haspopup="menu"
                 aria-expanded="false"
                 role="button"
                 tabIndex={0}
               >
                 <div className="w-icon-dropdown-toggle" aria-hidden="true" />
                 <div>
                   <span className="opacity-60">01</span>
                   <br />
                   SERVICES
                 </div>
               </div>

               <nav
                 className="nav-dropdown w-dropdown-list dl dropdown-content"
                 id="w-dropdown-list-0"
                 aria-labelledby="w-dropdown-toggle-0"
               >
                 <a
                   href="/ai-automation-agency"
                   className="nav-dropdown-item w-dropdown-link"
                   tabIndex={0}
                 >
                   AI and Automation
                 </a>
                 <a
                   href="/rpa-consulting-services"
                   className="nav-dropdown-item w-dropdown-link"
                   tabIndex={0}
                 >
                   Robotic Process Automation
                 </a>
                 <a
                   href="/zapier-consulting"
                   className="nav-dropdown-item w-dropdown-link"
                   tabIndex={0}
                 >
                   Zapier Consulting
                 </a>
                 <a
                   href="/make-consulting"
                   aria-current="page"
                   className="nav-dropdown-item no-border w-dropdown-link w--current"
                   tabIndex={0}
                 >
                   Make.com Consulting
                 </a>
               </nav>
             </div>

             <div class="dropdown">
               {/* <button class="dropbtn">Dropdown</button> */}
               <div
                 className="nav-link w-dropdown-toggle"
                 id="w-dropdown-toggle-0"
                 aria-controls="w-dropdown-list-0"
                 aria-haspopup="menu"
                 aria-expanded="false"
                 role="button"
                 tabIndex={0}
               >
                 <div className="w-icon-dropdown-toggle" aria-hidden="true" />
                 <div>
                   <span className="opacity-60">02</span>
                   <br />
                   RESULTS
                 </div>
               </div>

               <nav
                 className="nav-dropdown w-dropdown-list dropdown-content"
                 id="w-dropdown-list-1"
                 aria-labelledby="w-dropdown-toggle-1"
               >
                 <a
                   href="#"
                   className="nav-dropdown-item w-dropdown-link"
                   tabIndex={0}
                 >
                   Testimonials
                 </a>
                 <a
                   href="/case-studies"
                   className="nav-dropdown-item w-dropdown-link"
                   tabIndex={0}
                 >
                   Case Studies
                 </a>
               </nav>
             </div>

             <a
               href="https://www.axeautomation.co/#features"
               className="nav-link w-nav-link"
               style={{ maxWidth: "90%" }}
             >
               <span className="opacity-60">03</span>
               <br />
               ABOUT US
             </a>
             <div
               data-hover="true"
               data-delay={0}
               className="w-dropdown"
               style={{ maxWidth: "90%" }}
             >
               <div
                 className="nav-link w-dropdown-toggle"
                 id="w-dropdown-toggle-2"
                 aria-controls="w-dropdown-list-2"
                 aria-haspopup="menu"
                 aria-expanded="false"
                 role="button"
                 tabIndex={0}
               >
                 <div class="dropdown">
                   {/* <button class="dropbtn">Dropdown</button> */}
                   <div
                     className="nav-link w-dropdown-toggle"
                     id="w-dropdown-toggle-0"
                     aria-controls="w-dropdown-list-0"
                     aria-haspopup="menu"
                     aria-expanded="false"
                     role="button"
                     tabIndex={0}
                   >
                     <div
                       className="w-icon-dropdown-toggle"
                       aria-hidden="true"
                     />
                     <div>
                       <span className="opacity-60">04</span>
                       <br />
                       Resources
                     </div>
                   </div>
                   <nav
                     className="nav-dropdown w-dropdown-list dropdown-content"
                     id="w-dropdown-list-1"
                     aria-labelledby="w-dropdown-toggle-1"
                   >
                     <a
                       href="/learn"
                       className="nav-dropdown-item w-dropdown-link"
                       tabIndex={0}
                     >
                       Blog
                     </a>
                     <a
                       href="/podcast"
                       className="nav-dropdown-item w-dropdown-link"
                       tabIndex={0}
                     >
                       Podcast
                     </a>
                   </nav>
                 </div>

                 
                
               </div>
             
             </div>
           </nav>
           <div
             className="menu-button w-nav-button"
             style={{ WebkitUserSelect: "text" }}
             aria-label="menu"
             role="button"
             tabIndex={0}
             aria-controls="w-nav-overlay-0"
             aria-haspopup="menu"
             aria-expanded="false"
           >
             <div className="w-icon-nav-menu" />
           </div>
           <a
             href="/free-automation-consultation"
             className="button navlink w-button"
           >
             Book A Call{" "}
           </a>
         </div>
         <div
           className="w-nav-overlay"
           data-wf-ignore=""
           id="w-nav-overlay-0"
         />
       </div>
     </>
   );
}