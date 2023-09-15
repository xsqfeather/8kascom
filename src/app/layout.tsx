import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import { ButtonBase } from "@mui/material";
import Link from "next/link";
import DrawerToggler from "@/components/DrawerToggler";
export const runtime = "edge";

export const metadata = {
  title: "8Kas Articles",
  description: "Causal Inference, Machine Learning, and Software Engineering",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <AppBar position="fixed" sx={{ zIndex: 50 }}>
            <Toolbar sx={{ backgroundColor: "background.paper" }}>
              <DrawerToggler />
              <ButtonBase LinkComponent={Link} href="/">
                <Typography variant="h6" noWrap component="div" color="black">
                  8Kas Articles
                </Typography>
              </ButtonBase>
            </Toolbar>
          </AppBar>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              bgcolor: "background.default",
              mt: ["48px", "56px", "64px"],
              p: 3,
            }}
          >
            {children}
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
