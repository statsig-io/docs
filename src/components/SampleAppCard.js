import Card from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import React from "react";

export default function SampleAppCard({title, link, image}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{color: "inherit"}}
    >
      <Card
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          boxShadow: "0 6px 16px rgba(0, 0, 0, 0.06)",
          border: "solid 1px #d8d8d8",
          borderRadius: "8px",
          padding: 0,
          overflow: "hidden",
        }}
      >
        <CardMedia
          image={image}
          title={`Screenshot for the sample app "${title}"`}
          sx={{
            height: 180,
            margin: 0,
            boxShadow: "0 1px #d8d8d8",
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        />
        <CardContent
          sx={{
            fontWeight: "bold",
            padding: "16px",
            paddingBottom: "16px !important",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          {title}
        </CardContent>
      </Card>
    </a>
  );
}
