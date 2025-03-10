import React from "react";
import { Search, Menu } from "lucide-react";
import { Home, Search as SearchIcon, Layout } from "lucide-react";

function Header(){
  return(
    <>
    {/* Header */}
    <div className="flex justify-between items-center mb-4">
    <h1 className="text-xl font-bold">BYU</h1>
    <Menu className="w-6 h-6" />
    </div>
    </>
  )
}

function Card({ title, image, children }: { title?: string; image?: string; children?: React.ReactNode }) {
  return (
    <div className="mb-4">
      {title && <h2 className="text-lg font-semibold mb-2">{title}</h2>}
      <div className="border border-gray-700 rounded-lg p-4 bg-gray-800 hover:shadow-lg transition-shadow duration-300">
        {image && <img src={image} alt="Card" className="rounded-md mb-2 w-full" />}
        <div>{children}</div>
      </div>
    </div>
  );
}






export default function App() {

  return (
    <div className="flex justify-center items-center h-screen w-full bg-gray-900 text-white">
      <div className="bg-gray-900 min-h-screen text-white p-4">
        <Header />
        <Search className="w-5 h-5 text-gray-400" />

        <div className="bg-gray-900 min-h-screen text-white p-4">
        {/* Upcoming Speeches */}
        <Card title="Announcements" image="/temple.jpg">
          <p className="text-blue-400 text-sm">Upcoming Speeches</p>
          <p className="text-blue-300 font-bold">Elder Jeffery R. Holland</p>
          <p className="text-gray-400 text-xs">March 11, 2024</p>
        </Card>

        {/* Quote of the Day */}
        <Card title="Verse of the Day">
          <p className="italic text-blue-300">“Education is the power to think clearly...”</p>
          <p className="text-gray-400 text-xs">- David O. McKay</p>
        </Card>

        {/* Browse Topics */}
        <div className="p-4">
        <Card title="Topics to Browse" />
        </div>
        </div>
      
      </div>
    </div>
  );
}