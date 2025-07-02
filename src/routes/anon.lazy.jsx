import { createLazyFileRoute } from "@tanstack/react-router";
import Common from "@/components/common";

export const Route = createLazyFileRoute("/anon")({
  component: Common,
});
