"use client";
import { Theme, Header, HeaderName, Content, Grid, Column } from "@carbon/react";
import "../globals.css";

export default function CourseLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <body>
        <Theme theme="g10">
          <Header aria-label="Skunkworks Academy">
            <HeaderName href="/Microsoft/AZ-400" prefix="Skunkworks">AZ-400 DevOps Accelerator</HeaderName>
          </Header>
          <Content>
            <Grid fullWidth><Column lg={12} md={8} sm={4}>{children}</Column></Grid>
          </Content>
        </Theme>
      </body>
    </html>
  );
}
