import useWindowSize from "@/hooks/use-window-size";

const WindowSizeComponent = () => {
  const { height, width } = useWindowSize();
  return (
    <div>
      height: {height} px
      <br />
      width: {width} px
      <br />
    </div>
  );
};

export default WindowSizeComponent;
