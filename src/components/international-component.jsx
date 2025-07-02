import { useTheme } from "@/contexts/theme-context";

const IntlComponent = () => {
  const [theme, selectedTheme, setTheme] = useTheme();
  const intl = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <>
      <div aria-label="theme">Theme: {theme}</div>
      <div aria-label="selected theme">Selected theme: {selectedTheme}</div>

      <select value={selectedTheme} onchange={(e) => setTheme(e.target.value)}>
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="system">system</option>
      </select>
      <button onClick={() => setTheme("system")}>System Mode</button>
      <div>Price: {intl.format(199.99)}</div>
    </>
  );
};

export default IntlComponent;
