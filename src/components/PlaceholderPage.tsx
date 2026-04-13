import NavBar from "./NavBar";
import SideBar from "./SideBar";

type PlaceholderPageProps = {
  title: string;
  description: string;
};

function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="App h-screen w-screen flex bg-black overflow-hidden">
      <div className="side w-[20vw] h-full">
        <SideBar />
      </div>
      <div className="main w-[80vw] h-full mt-6 mr-8 flex flex-col overflow-hidden">
        <div className="w-full bg-[#242627] rounded-xl">
          <NavBar title={title} />
        </div>
        <div className="flex-1 overflow-y-auto p-8 bg-[#242627] rounded-xl mt-5 text-white flex items-center justify-center">
          <div className="max-w-xl text-center space-y-4">
            <h2 className="text-4xl font-semibold">{title}</h2>
            <p className="text-lg text-slate-300">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceholderPage;
