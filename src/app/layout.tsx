import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import DrawerToggler from "@/components/DrawerToggler";
import DeskTopMenu from "@/components/DeskTopMenu";
import RouteChangeDetector from "@/components/RouteChangeDetector";
import { Suspense } from "react";
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

              <DeskTopMenu />
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
