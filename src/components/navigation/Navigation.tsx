import '../../App.css'

interface MenuProps {
  item: string;
  link: string;
}

const menuItem: MenuProps[] = [
  { item: "Home", link: "home" },
  { item: "About", link: "about" },
  { item: "Skills", link: "skills" },
  { item: "Projects", link: "projects" },
  { item: "Contact", link: "contact" },
];

const Navigation = () => {
  return (
    <header className="header" id="home">
      <h1 className="site-title">Md Mahmud Hasan Akhonda</h1>
      <nav className="navbar">
        <ul>
          {menuItem.map((menu, index) => (
            <li key={index}>
              <a href={`#${menu.link}`}>{menu.item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
export default Navigation;
