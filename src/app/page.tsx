import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import MediaCard from "@/components/MediaCard";
import { MoreArticles } from "@/components/MoreArticles";
import { getList } from "@/services/dataProvider";

export default async function HomePage() {
  const data = await getList(["articles", {}, { page: 1, perPage: 48 }]);
  const { list } = data;

  return (
    <Box>
      <Grid container rowSpacing={3} columnSpacing={3}>
        <MoreArticles initArticles={list} />
      </Grid>
    </Box>
  );
}
