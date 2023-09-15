import * as React from "react";
import Image from "next/image";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ButtonBase, ButtonBaseProps, Chip } from "@mui/material";
import Link from "next/link";

const LinkButton = (props: ButtonBaseProps & { href: string }) => (
  <ButtonBase
    component={Link}
    variant="contained"
    {...props}
    href={props.href}
    sx={{
      margin: "5px",
      textDecoration: "none",
      backgroundColor: "none",
    }}
  />
);

export default function MediaCard({
  heading,
  cover,
  chips,
  href,
}: {
  heading: string;
  cover: string;
  chips: string[];
  href: string;
}) {
  return (
    <Card
      component={LinkButton}
      href={href}
      sx={{
        display: "block",
        "&:hover": {
          backgroundColor: "none",
          textDecoration: "none",
        },
      }}
    >
      <Image
        alt="Random image"
        src={cover}
        width={640}
        height={480}
        style={{
          maxWidth: "100%",
          height: "200px",
          objectFit: "cover",
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {heading}
        </Typography>
        {chips.splice(0, 3).map((chip) => (
          <Chip
            sx={{
              margin: "2px",
            }}
            label={chip}
            key={chip}
          />
        ))}
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
