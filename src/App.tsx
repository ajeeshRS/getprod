import "./App.css";

function App() {
  const subdomainData = [
    {
      name: "framesnapr",
      url: "https://framesnapr.getprod.xyz",
      logo: "https://framesnapr.getprod.xyz/favicon.ico",
      revenue: "$0",
    },
  ];
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="font-bold text-2xl bg-gradient-to-b from-white to-neutral-500 bg-clip-text text-transparent mb-8">
        Webpages under getprod.xyz
      </h1>
      <div className="flex items-center justify-center">
        {subdomainData.map(({ name, url, revenue, logo }) => (
          <div
            key={name}
            className="flex flex-col items-start px-8 py-6 bg-neutral-950 border-4 border-neutral-600 rounded-3xl shadow-lg"
          >
            <div className="flex items-center space-x-2">
              <img src={logo} alt={name} className="w-5 h-5 border rounded" />
              <h2 className="text-lg font-medium tracking-wide text-neutral-400 mb-1">
                {name}
              </h2>
            </div>
            <div className="text-start mt-2">
              <span className="block text-xs text-neutral-400 font-medium mb-1">
                Total Revenue
              </span>
              <span className="block text-2xl font-bold text-white">
                {revenue}
              </span>
            </div>
            <a href={url}>
              <button className="text-white cursor-pointer bg-gradient-to-b from-purple-400 to-purple-600 border-2 border-purple-400 text-xs rounded-xl px-3 py-2 my-5">
                Visit Website
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
