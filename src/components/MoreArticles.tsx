"use client";
import { Fragment, useEffect, useState } from "react";
import MediaCard from "./MediaCard";
import Grid from "@mui/material/Unstable_Grid2";
import { CircularProgress, Stack } from "@mui/material";
import { Fab } from "@mui/material";
import NavigationIcon from "@mui/icons-material/Navigation";

async function getData(page: number) {
  const res = await fetch(
    `https://rest.8kas.com/api/articles?page=${page}&perPage=48`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export function MoreArticles() {
  const [page, setPage] = useState(2);
  const [lists, setLists] = useState([] as any[]);
  const [loading, setLoading] = useState(false);

  const fetchMoreListItems = async (p: number) => {
    setLoading(true);
    const data = await getData(p);
    const { list } = data;
    setLists([...lists, list]);
    setPage(page + 1);
    setLoading(false);
  };
  const handleBackTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setLists([]);
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const { scrollTop, scrollHeight, clientHeight } =
          document.documentElement;
        //hit the bottom
        if (scrollTop + clientHeight === scrollHeight) {
          console.log("fetch more list items");
          setLoading(true);
          setTimeout(() => {
            fetchMoreListItems(page);
          }, 1000);
        }
        //hit the top
        if (scrollTop === 0) {
          console.log("fetch more list items");
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [page]);
  return (
    <>
      {lists?.map((list: any, index: number) => {
        return (
          <Fragment key={index}>
            {list?.map((item: any, index: number) => (
              <Grid key={index} sm={6} xs={12} lg={3} md={4} xl={2}>
                <MediaCard
                  cover={item.cover}
                  heading={item.title}
                  chips={item.tags || []}
                />
              </Grid>
            ))}
          </Fragment>
        );
      })}
      {/* make loader center */}
      <Stack
        sx={{
          width: "100%",
          minHeight: 80,
          opacity: 0.5,
        }}
        direction={"column"}
        alignItems={"center"}
      >
        <div>正在加载更多</div>
        {loading && <CircularProgress />}
      </Stack>
      <Fab
        onClick={() => handleBackTop()}
        variant="extended"
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
        }}
      >
        <NavigationIcon sx={{ mr: 1 }} />
        Back To Top
      </Fab>
    </>
  );
}
