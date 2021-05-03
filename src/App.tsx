import * as React from 'react';
import './App.css';
import { faCode, faTerminal } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const App: React.FC = () => {
  return (
    <div className="h-screen w-screen bg-black flex items-center justify-center">
      <div className="text-center flex flex-col gap-7">
        <div className="top gap-5 flex-col flex items-center">
          <div className="text-4xl text-white font-semibold tracking-widest text-center px-3">Michael Miaskowski</div>
          <div className="bg-blue-400 text-center px-3"><FontAwesomeIcon size="xs" icon={faCode} /> Junior Frontend Dev <strong><a href="https://stoplight.io" target="_blank" rel="noreferrer">@stoplighio</a></strong></div>
          <div className="bg-red-600 text-center px-3"><FontAwesomeIcon size="xs" icon={faTerminal} /> Member of <strong><a href="https://11sigma.com" target="_blank" rel="noreferrer">11sigma.com</a></strong></div>
        </div>
        <div className="flex border-gray-200 border-b"></div>
        <div className="flex flex-col gap-5 items-center">
          <div className="flex flex-row gap-5">
            <a href="https://twitter.com/m_miaskowski" target="_blank" className="px-3 bg-white" rel="noreferrer">Twitter</a>
            <a href="https://github.com/mmiask" target="_blank" className="px-3 bg-white" rel="noreferrer">Github</a>
            <a href="https://dev.to/mmiask" target="_blank" className="px-3 bg-white" rel="noreferrer">Dev.to</a>
            <a href="https://www.linkedin.com/in/michael-miaskowski/" target="_blank" className="px-3 bg-white" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
