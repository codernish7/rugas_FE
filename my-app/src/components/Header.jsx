const Header =()=>{
    return (
      <div className='header'>
        <div className='logo-container'>
          <img className='logo' src='https://imgs.search.brave.com/8dHqoQc9CzURAeGr8m36KOf-L5GwzwhWZBzBrUkhOJk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTYy/MzUzMzc4L3ZlY3Rv/ci9mYXN0LWZvb2Qt/bGluZS1pY29uLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz14/RDktS2xWal93NGhx/aGxCNlZuc25UcWNh/dW1BVGdEbnl3TmRo/cmhPb2s0PQ' />
        </div>
        <div className='navbar'>
        <ul>
          <li>home</li>
          <li>about</li>
          <li>contact</li>
          <li>cart</li>
        </ul>
        </div>
      </div>
    )
    }

export default Header