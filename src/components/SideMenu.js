import React, { useEffect, useState } from "react";
import user from "../assets/user.jpg";
import MenuItem from "./MenuItem"

export const menuItems = [
    {
      name: "Github Page",
      exact: true,
      to: "/",
      iconClassName: "bi bi-github",
    },
    {
      name: "Content",
      exact: true,
      to: `/content`,
      iconClassName: "bi bi-speedometer2",
      subMenus: [
        { name: "Courses", to: "/content/courses" },
        { name: "Videos", to: "/content/videos" },
      ],
    },
    
  ];

const SideMenu = (props) => {
    const [inactive, setInactive] = useState(false);

    useEffect(() => {
        if (inactive) {
          removeActiveClassFromSubMenu();
        }
    
        props.onCollapse(inactive);
      }, [inactive]);
    
      //just an improvment and it is not recorded in video :(
      const removeActiveClassFromSubMenu = () => {
        document.querySelectorAll(".sub-menu").forEach((el) => {
          el.classList.remove("active");
        });
      };
    
      /*just a little improvement over click function of menuItem
        Now no need to use expand state variable in MenuItem component
      */
      useEffect(() => {
        let menuItems = document.querySelectorAll(".menu-item");
        menuItems.forEach((el) => {
          el.addEventListener("click", (e) => {
            const next = el.nextElementSibling;
            removeActiveClassFromSubMenu();
            menuItems.forEach((el) => el.classList.remove("active"));
            el.classList.toggle("active");
            console.log(next);
            if (next !== null) {
              next.classList.toggle("active");
            }
          });
        });
      }, []);

    return(
    <div className={`side-menu ${inactive ? "inactive" : ""}`}>

    <div className="side-menu-footer">
        <div className="avatar">
          <img src={user} alt="user" />
        </div>
        <div className="user-info">
          <h5>Rizwan Khan</h5>
          <p>rizwankhan@gmail.com</p>
        </div>
        <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
          {inactive ? (
            <i class="bi bi-arrow-right-square-fill"></i>
          ) : (
            <i class="bi bi-arrow-left-square-fill"></i>
          )}
        </div>
    </div>
    <div className="main-menu">
        <ul>
        {menuItems.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              exact={menuItem.exact}
              to={menuItem.to}
              subMenus={menuItem.subMenus || []}
              iconClassName={menuItem.iconClassName}
              onClick={(e) => {
                if (inactive) {
                  setInactive(false);
                }
              }}
            />
          ))}

          
        </ul>
    </div>
    </div>
    );

};



export default SideMenu
