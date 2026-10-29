import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { AppLayout } from "./App";
import { PAGE_SEO } from "./config/siteConfig";

export function renderPage(url: string) {
  const html = renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <AppLayout />
      </StaticRouter>
    </React.StrictMode>
  );

  const seo = PAGE_SEO[url] || PAGE_SEO["/"];
  return { html, seo };
}
