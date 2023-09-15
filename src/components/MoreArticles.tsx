"use client";
import { Fragment, useEffect, useRef, useState } from "react";
import MediaCard from "./MediaCard";
import Grid from "@mui/material/Unstable_Grid2";
import { CircularProgress, Stack } from "@mui/material";
import { Fab } from "@mui/material";
import NavigationIcon from "@mui/icons-material/Navigation";
import { GlobalControllers, getList } from "@/services/dataProvider";

const cacheData: any = {};

export function MoreArticles(props: { initArticles: any[] }) {
  const { initArticles } = props;
  const [page, setPage] = useState(2);
  const throttle = useRef<NodeJS.Timeout | null>(null);
  const [lists, setLists] = useState([initArticles] as any[]);
  const [loading, setLoading] = useState(false);
  const [topLoading, setTopLoading] = useState(false);

  const [showBackTop, setShowBackTop] = useState(false);

  const cachePageData = async (p: number) => {
    if (cacheData[p]) {
      setTimeout(() => {
        cacheData[p] = null;
      }, 2000);
      return cacheData[p];
    }
    const data = await getList(["articles", {}, { page: p, perPage: 48 }]);
    const { list } = data;
    cacheData[p] = list;
    return list;
  };

  const handleTopRefresh = async () => {
    setTopLoading(true);
    const list = await cachePageData(1);
    setPage(1);
    setLists([list]);
    setTopLoading(false);
  };

  const fetchMoreListItems = async (p: number) => {
    setLoading(true);
    const list = await cachePageData(p);
    setPage(p + 1);
    setLists([...lists, list]);
    setLoading(false);
  };

  const handleBackTop = async () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    await handleTopRefresh();
  };
  const handleScroll = () => {
    setLoading(false);
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    //hit the bottom
    if (scrollTop + clientHeight === scrollHeight) {
      console.log("hit the bottom");
      //back a little
      GlobalControllers[0].abort();
      setLoading(true);
      //save the flow
      if (throttle.current) {
        clearTimeout(throttle.current);
        throttle.current = null;
      }
      throttle.current = setTimeout(async () => {
        console.log("fetch more list items");
        fetchMoreListItems(page);
        throttle.current = null;
      }, 1000);
    }
    //hit the top
    if (scrollTop === 0) {
      handleTopRefresh();
    }
    //show back top button
    if (scrollTop > 100) {
      setShowBackTop(true);
    } else {
      setShowBackTop(false);
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [page]);
  return (
    <>
      {topLoading && (
        <Stack
          sx={{
            width: "100%",
            minHeight: 80,
            opacity: 0.5,
          }}
          direction={"column"}
          alignItems={"center"}
        >
          <div>正在刷新</div>
          <CircularProgress />
        </Stack>
      )}
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
      {loading && (
        <Stack
          sx={{
            width: "100%",
            minHeight: 200,
            opacity: 0.5,
          }}
          direction={"column"}
          alignItems={"center"}
        >
          <div>正在加载更多</div>
          <CircularProgress />
        </Stack>
      )}

      {
        // show back top button
        showBackTop && (
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
        )
      }
    </>
  );
}
