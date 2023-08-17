import React from 'react'

const Navbar = () => {
  return (
    <>
    {/* <div className=''>
        <h3>Your Challenge</h3>
        <div>
            <ul>
                <li>Product</li>
                <li>Download</li>
                <li>Pricing</li>
            </ul>
        </div>
    </div> */}
    
<nav className="bg-white">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="" className="flex items-center">
        <span className="self-center text-2xl font-bold whitespace-nowrap text-dark">Your Challenge</span>
    </a>
    
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-dark md:bg-transparent  md:p-0 " aria-current="page">Products</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-dark md:bg-transparent  md:p-0 " aria-current="page">Download</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-dark md:bg-transparent  md:p-0 " aria-current="page">Pricing</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar