import "./NavbarItems.css"

const NavbarItems = ()=>{
    const NavItems = ["Home", "Shop", "About", "Contact"]
    return(
            <ul className="d-flex justify-content-between mx-5">
                {NavItems.map((item)=>(
                    <li key={item} className="nav-item px-5">
                    <a href="index.html">{item}</a></li>
                ))}
            </ul>

    )
}

export default NavbarItems