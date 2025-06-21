// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Sandhyāvandanam",
      sidebar: [
        {
          label: "Regions",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Bengal",
              autogenerate: { directory: "regions/bengal" },
            },
          ],
        },
        {
          label: "Stotras",
          autogenerate: { directory: "stotras" },
        },
      ],
    }),
  ],
});
