import { useState } from "react"
import { marked } from "marked";

import "./App.css"

const App = () => {
  const [text, setText] = useState(`
  # Hello there,
  ## My name is **Daniel Lucas**
  
  \`\`\`
  I'm a **fullstack developer**
  With enfasis in React, Node and Software Architecture
  I love to work in teams and learn new things
  \`\`\`
  > Let's work together
  - I'm a good team player
  - I'm a fast learner
  - I'm a good problem solver

  What I do in my free time:

  1. I like to play video games
  2. I like to watch movies
  3. I like to read books
  4. I like to play with my children

  Please, **call-me** if u wh**and** to **talk** or know me better
  [whatsapp](https://wa.me/5511988888888)

  [And that's my portifolio](https://danlucss.netlify.app/)
  \`you can really aprecciate it\`

  > *And that's a ME*

  ![That's a me, Mario. (No, that's me Daniel, anyway...)](https://scontent.fgyn21-1.fna.fbcdn.net/v/t1.6435-9/37853268_1921657434522151_1840862054383091712_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=Aw51pqV49cgAX_ImL-5&_nc_ht=scontent.fgyn21-1.fna&oh=00_AfArGd89nU5CrEM5kBfGxPk-d8prlqtvOFD9XAa_RFM8zw&oe=638A907B)

  
  `)

  marked.setOptions({
    breaks: true,
  })

  const onChangeHandler = (e) => {
    setText(e.target.value)
  }
  const preview = document.getElementById('preview')
  console.log(preview)
  return (
    <>
      <div
        className="App">
        <h1>Markdown Previewer</h1>
        <div className="container editor">
          <textarea id="editor" className="textarea" onChange={onChangeHandler}
            value={text} placeholder="Enter your markdown here" />
        </div>
        <div className="container preview">
          <div id="preview" className="preview" dangerouslySetInnerHTML={{
            __html: marked(text)
          }} />
        </div>

      </div>

    </>
  )
}

export default App
