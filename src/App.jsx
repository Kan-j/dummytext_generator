import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import data from './data'

function App() {
  const [count, setCount] = useState(null)
  const [text, setText] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    const amount = parseInt(count)
    setText(data.slice(0, amount))

  }

  return (
    <>
      <section className='flex justify-center items-center min-h-screen flex-col'>
        <h1 className='text-lg font-semibold mb-2'>TIRED OF BORING LOREM IPSUM?</h1>

        <form className='' onSubmit={handleSubmit}>
          <label htmlFor='count' className='mr-2'>Paragraphs: </label>
          <input 
          type="number"
          name='count'
          min='1'
          max='8'
          value={count}
          onChange={(e)=> {
            setCount(e.target.value)
          }}
          className='outline-2 border border-slate-400 rounded-md'
          id='count' />
          <button type="submit" className='bg-green-600 px-2 py-1 ml-4 text-white rounded-md'>Generate</button>
        </form>
        
        <section className='w-2/5 mb-4'>
          {text.map((paragraph, index)=>{
            return <article key={index} className='mt-4'>
              <p className='text-justify text-gray-900'>{paragraph}</p>
            </article>
          })}
        </section>

      </section>
    </>
  )
}

export default App
