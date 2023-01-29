import drawers from "./images/drawers.jpg";
import avatar from "./images/avatar-michelle.jpg";
import facebookIcon from "./images/icon-facebook.svg";
import twitterIcon from "./images/icon-twitter.svg";
import pinterestIcon from "./images/icon-pinterest.svg";
import shareIcon from "./images/icon-share.svg";
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(false);
  
  return (
    <main className="font-Manrope w-full min-h-screen bg-sky-100 grid place-content-center">
      <section className="w-80 sm:w-full md:w-11/12 max-w-4xl sm:flex bg-white rounded-xl sm:shadow-xl">
        <div className="sm:w-2/5">
          <img className="h-full rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none" src={drawers} alt="drawers" />
        </div>
        <div className="sm:w-3/5 p-8 grid gap-6">
          <h1 className="text-base sm:text-2xl font-bold text-gray-700">
            Shift the overall look and feel by adding these wonderful 
            touches to furniture in your home
          </h1>
          <p className="text-gray-500">
            Ever been in a room and felt like something was missing? Perhaps 
            it felt slightly bare and uninviting. I’ve got some simple tips 
            to help you make any room feel complete.
          </p>
          <div className="flex gap-6 relative">
            <div className="w-10">
              <img className="rounded-full" src={avatar} alt="avatar" />
            </div>
            <div className="mr-auto">
              <p className="text-xs sm:text-base font-bold text-gray-700">Michelle Appleton</p>
              <time className="text-sm font-medium text-gray-500">28 Jun 2020</time>
            </div>
            <div className="z-10">
              <button onBlur={() => setToggle(false)} onClick={() => setToggle(!toggle)} className="p-4 rounded-full bg-sky-100 focus:bg-gray-300 cursor-pointer hover:shadow-lg">
                <img src={shareIcon} alt="share-icon" />
              </button>
            </div>
              <div className={`${toggle ? '': 'hidden'} rounded-b-xl overflow-hidden sm:overflow-visible absolute bg-gray-700 -left-8 -right-8 -bottom-8 top-0 sm:w-64 sm:-top-20 sm:left-64 sm:right-0 sm:bottom-80`}>
                <div className="bg-gray-700 shadow-lg flex gap-6 sm:gap-0 items-center sm:justify-around py-4 pl-4 sm:pl-0 h-full sm:h-auto sm:rounded-xl">
                  <span className="uppercase tracking-widest text-gray-500">Share</span>
                  <div><img className="cursor-pointer hover:scale-110" src={facebookIcon} alt="facebook" /></div>
                  <div><img className="cursor-pointer hover:scale-110" src={twitterIcon} alt="twitter" /></div>
                  <div><img className="cursor-pointer hover:scale-110" src={pinterestIcon} alt="pinterest" /></div>
                </div>
              </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
