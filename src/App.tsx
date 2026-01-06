import "./App.css";
import AnimatedExpandableDetail from "../Components/AnimatedExpandableDetail";

function App() {
  return (
    <>
      <div className="flex p-[10%] w-full h-full">
        <AnimatedExpandableDetail
          title="Animated Detail"
          width="200px"
          height="200px"
          bannerColor="bg-neutral-600"
          contentColor="bg-neutral-200"
          textColor="text-black"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet at
          soluta nesciunt vero dolore qui tempora porro nulla maxime magnam!
        </AnimatedExpandableDetail>
      </div>
    </>
  );
}

export default App;
