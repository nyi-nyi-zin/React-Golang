// theme.ts
import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          500: { value: "red" },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
