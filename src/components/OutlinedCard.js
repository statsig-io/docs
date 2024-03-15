import Card from "@mui/material/CardActions";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import React from "react";

const ArrowButton = ({ link }) => (
  <IconButton
    style={{
      color: "#194b7d",
      border: "1px solid rgba(0, 0, 0, 0.12)",
      borderRadius: "16px",
      padding: "4px",
    }}
    href={link}
  >
    <Icon
      style={{
        color: "#194b7d",
      }}
    >
      arrow_forward
    </Icon>
  </IconButton>
);

export default function ({ title, description, icon, link }) {
  const arrowButton = (
    <CardActions
      style={{
        padding: 0,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
      }}
    >
      <ArrowButton link={link} />
    </CardActions>
  );

  return (
    <Card
      style={{
        minWidth: "240px",
        margin: "16px",
        flex: "0 0 28%",
        display: "flex",
        flexDirection: "column",
        padding: "16px",
        boxShadow: "0 6px 16px rgba(0, 0, 0, 0.06)",
        border: 0,
      }}
    >
      <div
        style={{
          fontWeight: "bold",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignContent: "space-between",
          alignItems: "center",
        }}
      >
        <Icon style={{ color: "#194b7d" }}>{icon}</Icon>
        <div style={{ paddingLeft: "8px" }}>{title}</div>
        {!description && (
          <div style={{ paddingLeft: "30px" }}>{arrowButton}</div>
        )}
      </div>
      {description && (
        <CardContent
          style={{
            padding: 0,
            paddingTop: "4px",
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <p>{description}</p>
          {arrowButton}
        </CardContent>
      )}
    </Card>
  );
}
