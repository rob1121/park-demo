import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "antd";
import { PlusOutlined, LeftOutlined } from "@ant-design/icons";

const LinkModal = ({
  pathname,
  title,
  type,
  icon,
  noState = false,
  ...props
}) => {
  const location = useLocation();
  const icons = {
    add: <PlusOutlined />,
    back: <LeftOutlined />,
  };
  return (
    <Link
      to={{
        pathname: pathname,
        state: noState ? {} : { background: location },
      }}
      {...props}
    >
      {type === "button" ? <Button icon={icons[icon]}>{title}</Button> : title}
    </Link>
  );
};

export default LinkModal;
