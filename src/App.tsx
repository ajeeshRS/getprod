import "./App.css";

function App() {
  const subdomainData = [
    {
      name: "Framesnapr",
      url: "https://framesnapr.getprod.xyz",
      logo: "https://framesnapr.getprod.xyz/favicon.ico",
      revenue: "$0",
    },
    {
      name: "Urbanpro studio",
      url: "https://urbanprostudio.getprod.xyz",
      logo: "https://urbanprostudio.getprod.xyz/favicon.ico",
      revenue: "$222",
    },
  ];
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="font-bold text-2xl bg-gradient-to-b from-white to-neutral-500 bg-clip-text text-transparent mb-8">
        Webpages under getprod.xyz
      </h1>
      <div className="flex items-center justify-center space-x-3">
        {subdomainData.map(({ name, url, logo }) => (
          <div
            key={name}
            className="flex flex-col items-start px-8 py-6 bg-neutral-950 border-4 border-neutral-600 rounded-3xl shadow-lg"
          >
            <div className="flex items-center space-x-2">
              <img src={logo} alt={name} className="w-5 h-5  rounded" />
              <h2 className="text-lg font-medium tracking-wide text-neutral-400 mb-1">
                {name}
              </h2>
            </div>
            <a href={url}>
              <button className="text-white cursor-pointer bg-gradient-to-b from-blue-400 to-blue-600 border-2 border-blue-400 text-xs rounded-xl px-3 py-2 my-5 hover:scale-95 duration-300 ease-in-out transition-all">
                Visit Website
              </button>
            </a>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center my-5">
        <p className="text-neutral-300 ">
          Maintained by{" "}
          <a
            href="https://ajeesh.vercel.app?ref=getprod.xyz"
            target="_blank"
            className="hover:underline"
          >
            me
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
