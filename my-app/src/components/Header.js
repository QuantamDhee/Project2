import React from 'react';
import { Link } from 'react-router-dom'

const NinjaHeader = () => (
  <div id='ninja-header'>
    <Link to='/ninja'><img src="https://i.pinimg.com/originals/fb/10/e1/fb10e16ce8776e6b7e4d4213a16d4344.jpg" alt="ninja-header" className="naruto-pic"/> 
    </Link>
    <br/>
    <div>
        <Link to='/' className='item-frontP'><button>Front Page</button></Link>
        <Link to='/ninja/about' className='item'><button>About</button></Link>
        <Link to='/ninja/addNinja' className='item-addChar'><button>Want to add Ninja 🐱‍🚀?</button></Link>
    </div>
  </div>
);

export default NinjaHeader;
