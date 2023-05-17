const Navbar = ({ userEmail, userName, userImage, logout})=>{
    return(
        <div className="navbar">
              <div className="left">
                <h2>Dashboard</h2>
              </div>

              <div className="right">
                <div className="search">
                  <input type="text" placeholder='Search...' /> <i class="fas fa-search"></i>
                </div>

                <div className="notification">
                  <i class="far fa-bell"></i>
                </div>

                <div className="user" onClick={logout}>
                  <img src={userImage} alt={userName} />
                </div>
              </div>
            </div>
    )
}

export default Navbar;