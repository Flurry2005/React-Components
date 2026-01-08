import "./App.css";
import AnimatedExpandableDetail from "../Components/AnimatedExpandableDetail";

/* Add to workspace settings for intellisense on properties
"tailwindCSS.experimental.classRegex": [
    [
      "\\bts[A-Za-z0-9_]*\\s*=\\s*([\"'`][^\"'`]*[\"'`])",
      "[\"'`]([^\"'`]*)[\"'`]"
    ]
  ] 
*/

function App() {
  return (
    <>
      <div className="flex p-[10%] w-full h-full">
        <AnimatedExpandableDetail
          title="Animated Detail"
          tswidth="200px"
          tsheight="200px"
          tsbannerColor="bg-neutral-000"
          tscontentColor="bg-neutral-100"
          tstitleColor="text-black"
          tstextColor="text-black"
          tsborderColor="border-neutral-400"
          tsborder="border"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet at
          soluta nesciunt vero dolore qui tempora porro nulla maxime magnam!
        </AnimatedExpandableDetail>
      </div>
    </>
  );
}

export default App;
