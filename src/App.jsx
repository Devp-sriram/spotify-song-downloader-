import { FaSpotify } from "react-icons/fa6";

function App() {


  return (
    <div className ='w-screen h-screen flex items-center justify-center bg-black'>
      <div className="flex flex-col justify-center items-center text-2xl gap-2 font-bold">
        <FaSpotify  color='green' size={50}/>
        <p>Spotify song downloader</p>
        <input type='url'/>
        <button type='submit' className="p-1 border-solid border-white border-2 rounded ">Download</button>
      </div>
    </div>
  )
}

export default App
