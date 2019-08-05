import React from "react";

export default function PagesComponent(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.duration}</td>
      <td>{props.rating}</td>
    </tr>
  );
}
