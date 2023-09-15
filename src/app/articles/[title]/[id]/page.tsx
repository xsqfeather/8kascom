import { getOne } from "@/services/dataProvider";
import { Container, Typography } from "@mui/material";

export default async function ArticlePageDetail({
  params,
}: {
  params: { id: string; title: string };
}) {
  const article = await getOne(["articles", params.id]);
  return (
    <Container>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
        }}
      >
        {article.title}
      </Typography>
    </Container>
  );
}
