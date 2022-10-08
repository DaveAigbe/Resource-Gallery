import Description from "./components/Description";
import VideosLibrary from "./components/VideosLibrary";

function App() {
  return (
    <div
      className="min-h-screen min-w-screen font-roboto p-10 bg-gradient-to-r
    from-slate-900 via-purple-900 to-slate-900 flex flex-col gap-10 items-center justify-center"
    >
      <Description />
      <VideosLibrary />
    </div>
  );
}

export default App;
