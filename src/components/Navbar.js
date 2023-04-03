import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class Navbar extends Component {
  render() {
    return (
      <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/general">Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/general">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  to="/business">Business</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/health">Health</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/science">Science</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/sports">Sports</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/technology">Technology</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
      </div>
      </>
    )
  }
}

export default Navbar


// import React, { Component } from 'react'


// export class Navbar extends Component {
//   render() {
//     return (
//       <div>
//         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//   <div className="container-fluid">
//     <a className="navbar-brand" to="/">Navbar</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarNav">
//       <ul className="navbar-nav">
//       <li className="nav-item">
//           <a className="nav-NavLink" to="/">Home</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-NavLink" to="/">General</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-NavLink" aria-current="page" to="/">Business</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-NavLink" to="/">Health</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-NavLink" to="/">Science</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-NavLink" to="/">Sports</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-NavLink" to="/">Technology</a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>
//       </div>
//     )
//   }
// }

// export default Navbar
