"use client";
import { Stack, ButtonBase, Typography, Divider } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchIcon from "@mui/icons-material/Search";

const DeskTopMenuItem = (props: {
  link: string;
  label: string | React.ReactNode;
}) => {
  const parentPath = usePathname();
  const isActive = parentPath === props.link;
  const { link, label } = props;
  return (
    <ButtonBase
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "baseline",
      }}
      LinkComponent={Link}
      href={link}
    >
      <Typography variant="h6" noWrap component="div" color="black">
        {label}
      </Typography>
      {isActive && (
        <Divider
          orientation="horizontal"
          flexItem
          sx={{
            borderRadius: 2,
            borderWidth: 2,
            borderColor: "primary.main",
          }}
        />
      )}
    </ButtonBase>
  );
};

export default function DeskTopMenu() {
  return (
    <Stack direction={"row"} spacing={2} justifyContent={"center"}>
      <ButtonBase
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
        LinkComponent={Link}
        href={"search"}
      ></ButtonBase>
      <DeskTopMenuItem
        link="/search"
        label={
          <SearchIcon
            sx={{
              position: "relative",
              top: "5px",
            }}
            fontSize="medium"
            color="primary"
          />
        }
      />
      <DeskTopMenuItem link="/" label="首页" />
      <DeskTopMenuItem link="/hot" label="热门" />
      <DeskTopMenuItem link="/blogs" label="博客" />
      <DeskTopMenuItem link="/tags" label="标签" />
      <DeskTopMenuItem link="/categories" label="分类" />
      <DeskTopMenuItem link="/chatting-duck" label="谈谈鸭" />
      <DeskTopMenuItem link="/adult-recommend" label="大人的站点推荐" />
    </Stack>
  );
}
