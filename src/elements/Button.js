import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { text, _onClick, is_float, children, margin, width, padding, border_radius, height } = props;

  if (is_float) {
    return (
      <React.Fragment>
        <FloatButton onClick={_onClick}>{text ? text : children}</FloatButton>
      </React.Fragment>
    );
  }

  const styles = {
    margin,
    width,
    height,
    padding,
    border_radius,
  };

  return (
    <React.Fragment>
      <ElButton {...styles} onClick={_onClick}>
        {text ? text : children}
      </ElButton>
    </React.Fragment>
  );
};

Button.defaultProps = {
  text: false,
  children: null,
  _onClick: () => { },
  is_float: false,
  margin: false,
  width: "120px",
  height: "40px",
  padding: "12px 0px",
};

const ElButton = styled.button`
  width: ${(props) => props.width};
  height:40px;
  background-color: #212121;
  color: #fff;
  padding: 12px 0px;
  box-sizing: border-box;
  border: none;
  cursor: pointer;
  border-radius: 50px;
  padding: ${(props) => props.padding};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
`;

const FloatButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: #212121;
  color: #fff;
  box-sizing: border-box;
  border-color: black;
  font-size: 40px;
  font-weight: 800;
  position: fixed;
  margin: 0 auto;
  bottom: 50px;
  right: 16px;
  display: flex;
  vertical-align: middle;
  justify-content: center;
  text-align: center;
  border-radius: 50px;
  cursor: pointer;
`;

export default Button;
