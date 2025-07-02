import Common from "@/components/common";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/common")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Common />;
}
