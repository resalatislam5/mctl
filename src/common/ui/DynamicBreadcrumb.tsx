import { Breadcrumb, type BreadcrumbProps } from "antd";
import { Link, useLocation } from "react-router";

const DISABLE_PATHS = [""];

const DynamicBreadcrumb = ({ ...rest }: BreadcrumbProps) => {
  const location = useLocation();

  const pathSnippets = location.pathname.split("/").filter(Boolean);

  const items = pathSnippets.map((path, index) => {
    const url = "/" + pathSnippets.slice(0, index + 1).join("/");
    const isDisabled = DISABLE_PATHS.includes(path);
    return {
      title: isDisabled ? (
        <span style={{ fontWeight: "bold", color: "#333" }}>{path}</span>
      ) : (
        <Link to={url}>{path}</Link>
      ),
    };
  });
  return (
    <Breadcrumb
      {...rest}
      items={[{ title: <Link to={"/"}>Dashboard</Link> }, ...items]}
    />
  );
};

export default DynamicBreadcrumb;
