import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";

function Header() {
   return (
      <header className='main-header'>
         <div className='header-container'>
            <div className='logo-container'>
               <h3 className='logo'>Eshkol-demo</h3>
            </div>
            <div className='nav-btn'>
               <div className='logout'>
                  <Link to='/' className='btn-logout'>Logout</Link>
               </div>
               <div className='nav-links'>
                  <ul>
                     <li className='nav-link'>
                        <a href='/' className='none-link'>Priority</a>
                        <div className='dropdown'>
                           <ul>
                              <li className='dropdown-link'>
                                 <a href='/' className='none-link'>ניהול פרויקטים</a>
                                 <div className='dropdown second'>
                                    <ul>
                                       <li className='dropdown-link'>
                                          <Link to='/projects'>פרויקטים</Link>
                                       </li>
                                       <li className='dropdown-link'>
                                          <Link to='/hours-report'>דיווח שעות</Link>
                                       </li>
                                    </ul>
                                 </div>
                              </li>
                              <li className='dropdown-link'>
                                 <a href='/' className='none-link'>קשרי לקוחות</a>
                                 <div className='dropdown second'>
                                    <ul>
                                       <li className='dropdown-link'>
                                          <Link to='/customers'>לקוחות</Link>
                                       </li>
                                    </ul>
                                 </div>
                              </li>
                           </ul>
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </header>
   )
}

export default Header