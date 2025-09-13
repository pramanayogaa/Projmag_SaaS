import Image from "next/image"

export default function Home() {
  return (
    <>
      <section className="w-full mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-4">
          <div className="px-4 py-25">
            <h1 className="font-bold text-6xl">Manage Projects with Ease, Drive and Success.</h1>
            <p className="text-gray-500 text-xl py-6">Projmag simplifies project management, helping teams collaborate efficiently, 
              track progress, and achieve goals faster. Boost your productivity today.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-500 text-white p-4 rounded-xl cursor-pointer hover:bg-blue-700">
                Start Your Free Trial
              </button>
              <button className="p-4 cursor-pointer">
                Learn More
              </button>
            </div>
          </div>
          <div className="">
            <Image src= "/heroImg.png" alt="heroImg" width={800} height={800} priority/>
          </div>
        </div>
      </section>
    </>
  );
}
