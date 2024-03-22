import { Outlet } from "react-router-dom";
import "./navbar.css"

const pages = [
  {
    id: 1,
    url: "/home",
    name: "Home",
  },
  {
    id: 2,
    url: "/about",
    name: "About",
  },
  {
    id: 3,
    url: "/counter",
    name: "Counter",
  },
];


export const Navbar = () => {
  console.log("Soy el componente Navbar y me renderizo");
  return (
    <>
      <nav>
        <h2 className="principal-title">Empresa</h2>

        <ul>

          {pages.map((page) => (
            <li key={page.id}>
              <a to={page.url}>{page.name}</a>
            </li>
          ))}

        </ul>

      </nav>

      <Outlet />

    </>
  );
};
