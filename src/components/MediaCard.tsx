import * as React from "react";
import Image from "next/image";
import {
  CardContent,
  Card,
  Box,
  ButtonBase,
  ButtonBaseProps,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import moment from "moment";
import "moment/locale/zh-cn";

moment.locale("zh-cn");

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
  publishTime,
}: {
  heading: string;
  cover: string;
  chips: string[];
  href: string;
  publishTime: string;
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
        <Box>
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
        </Box>
        <Typography
          component={"div"}
          sx={{
            textAlign: "right",
          }}
        >
          {moment(publishTime).fromNow()}
        </Typography>
      </CardContent>
    </Card>
  );
}
