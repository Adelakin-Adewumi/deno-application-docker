import { serve } from "./deps.ts";

const PORT = 8000;

const s = serve({ port: 8000 });

const body = new TextEncoder().encode("I am glad to try this deno application. I love being a cloud engineer\n");

console.log(`Server started on port ${PORT}`);
for await (const req of s) {
  req.respond({ body });
}
