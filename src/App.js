import React from "react"
import "./app.css"
import Sidebar from "./Components/SidebarSection/Sidebar"
import Body from "./Components/BodySection/Body"

export default function App() {
  return (
    <div className="container">
      <Sidebar/>
      <Body/>
    </div>
  )
}
