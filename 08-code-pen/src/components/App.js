import React, { useState, useEffect } from 'react';
import Editor from './Editor'

function App() {
  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [js, setJs] = useState('')
  const [srcDoc, setSrcDoc] = useState('')
  const [timeoutDoc, setTimeOutDoc] = useState(null) //

  useEffect(() => {
    if (timeoutDoc) {
      clearTimeout(timeoutDoc)
    }
    setTimeOutDoc(setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>
            ${html}
          </body>
        </html>
        <style>${css}</style>
        <script>${js}</script>
      `)
    }, 1000))

    return () => clearTimeout(timeoutDoc)
  }, [html, css, js])

  return (
    <>
      <div className="pane top-pane">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}/>

        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}/>

        <Editor
          language="javascript"
          displayName="JAVASCRIPT"
          value={js}
          onChange={setJs}/>
      </div>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          frameBorder="0"
          sandbox="allow-scripts"
          width="100%"
          height="100%"/>
      </div>
    </>
  );
}

export default App;
