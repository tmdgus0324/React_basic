import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './chapter_03/Library';
import Clock from './chapter_04/Clock';
import CommentList from './chapter_05/CommentList';
import NotificationList from './chapter_06/NotificationList';
import Accommodate from './chapter_07/Accommodate';
import ConfirmButton from './chapter_08/ConfirmButton';
import ConfirmButton2 from './chapter_08/ConfirmButton2';
import Toolbar from './chapter_09/Toorbar';
import LandingPage from './chapter_09/LanginPage';
import AttendanceBook from './chapter_10/AttendanceBook';
import SignUp from './chapter_11/SignUp';
import TemperatureInput from './chapter_12/TemperatureInput';
import Calculator from './chapter_12/Calculator';
import ProfileCard from './chapter_13/ProfileCard';
import DarkOrLight from './chapter_14/DarkOrLight';
import Blocks from './chapter_15/Blocks';


/* chapter 3 */
/*
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Library />
  </React.StrictMode>
);
*/

/* chapter 4 */ 
/*
const root = ReactDOM.createRoot(document.getElementById('root'));

setInterval(() => {
  root.render(
    <React.StrictMode>
      <Clock />
    </React.StrictMode>
    //, document.getElementById('root')
  );
}, 1000);
*/

/* chapter 5 */ 
/*
ReactDOM.render(
  <React.StrictMode>
    <CommentList />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

/* chapter 6 -> 17버전으로 다운 */ 
/*
ReactDOM.render(
  <React.StrictMode>
    <NotificationList />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

/* chapter 7 */
/*
ReactDOM.render(
  <React.StrictMode>
    <Accommodate />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

/* chapter 8 */
/*
ReactDOM.render(
  <React.StrictMode>
    <ConfirmButton2 />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

/* chapter 9 */
/*
ReactDOM.render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

/* chapter 10 */
/*
ReactDOM.render(
  <React.StrictMode>
    <AttendanceBook />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

/* chapter 11 */
/*
ReactDOM.render(
  <React.StrictMode>
    <SignUp />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

/* chapter 12 */
/*
ReactDOM.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

/* chapter 13 */

ReactDOM.render(
  <React.StrictMode>
    <ProfileCard />
  </React.StrictMode>,
  document.getElementById('root')
);


/* chapter 14 */
/*
ReactDOM.render(
  <React.StrictMode>
    <DarkOrLight />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

/* chapter 15 */
/*
ReactDOM.render(
  <React.StrictMode>
    <Blocks />
  </React.StrictMode>,
  document.getElementById('root')
);
*/


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
