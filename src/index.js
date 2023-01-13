import React, { useRef } from 'react' // nạp thư viện react
import ReactDOM from 'react-dom' // nạp thư viện react-dom
import { useState } from 'react'
// Tạo component App
function App() {
    const [job, setjob] = useState('');
    const [jobs, ssetjob] = useState([]);
    const secsub = useRef()
    const well = useRef()
    

    
    const handleElement = () => {   
        if(job === '') {
            alert('vui lòng nhập thông tin')
        } else {
            setjob('')
            ssetjob(pre => [...pre, job])
        }
    }
    const summit = (id) => {
        if(confirm('bạn thật sự muốn xóa không?')) {
            jobs.splice(id, 1)
            ssetjob([...jobs])
        }  
    }
    const edit = (id) => {
        setjob(jobs[id])
        secsub.current.style.display = 'none'
        well.current.style.display = 'block'
    }  
    const subedit = (id) => {
            well.current.style.display = 'none'
            secsub.current.style.display = 'block'

            jobs.splice(id, 1, job)
            ssetjob(jobs)
            setjob('')

    }
    return (
        <div>
            <input value={job}    onChange = {e => setjob(e.target.value)} />
            <button className='product' onClick = {handleElement}>add</button>
            <ul style={{
                
                width: "300px"
            }}>
                {jobs.map((element, index) => (
                    <li style={{
                        display: "flex"
                    }} key={index}>{element}        
                    <button onClick = {() => summit(index)}>xóa</button>
                    <button ref={secsub} onClick = {() => edit(index)}>sửa</button>
                    <button style={{display: "none"}} ref={well} onClick = {() => subedit(index)}>save</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

// Render component App vào #root element
ReactDOM.render(<App />, document.getElementById('root'))

