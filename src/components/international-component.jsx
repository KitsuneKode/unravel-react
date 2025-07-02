import { useTheme } from "@/contexts/theme-context";

const IntlComponent = () => {
  const [theme, selectedTheme, setTheme] = useTheme();
  const intl = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <>
      <div>Current Theme: {theme}</div>
      <div>Selcted Theme: {selectedTheme}</div>
      <select value={selectedTheme} onChange={(e) => setTheme(e.target.value)}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="system">System</option>
      </select>
      <button onClick={() => setTheme("system")}>System Mode</button>
      <div>Price: {intl.format(199.99)}</div>
    </>
  );
};

export default IntlComponent;
