import "./SideBar.scss";

type SideBarProps = {
  children: JSX.Element;
};

const SideBar = ({ children }: SideBarProps) => {
  return <div className="sideBar">{children}</div>;
};

export default SideBar;
