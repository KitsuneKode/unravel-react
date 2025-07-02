import { createLazyFileRoute, Link } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>
        This is a demo project that i did to brush up my react skills with
        differnt library such as react trpc
      </h1>
      <h2>
        A corresponding file will be added on making react from scratch and
        upderstanding its internals completely{" "}
      </h2>
      <Link to="/anon">Anon</Link>
    </div>
  );
}
