import { createLazyFileRoute } from "@tanstack/react-router";
import { useFormStatus } from "react-dom";
export const Route = createLazyFileRoute("/easy-form")({
  component: RouteComponent,
});

function RouteComponent() {
  const onSubmit = (formData) => {
    const name = formData.get("name");
    const email = formData.get("email");
    console.log("Form submitted with data:", { name, email });
  };
  return (
    <div>
      forms will be here
      <form action={onSubmit}>
        <Demo type="text" name="name" placeholder="Enter your name" />
        <input type="email" name="email" placeholder="Enter your email" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

const Demo = (props) => {
  const { pending } = useFormStatus();

  return (
    <div>
      <input
        disabled={pending}
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
      />
    </div>
  );
};
