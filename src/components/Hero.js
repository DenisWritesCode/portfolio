import React from 'react'

function Hero() {
  return (
    <header className="bg-gray-800 text-gray-100 pt-16 flex items-center content-center justify-around h-screen">
      <div className="left w-1/2  text-center">
        <h1 className="text-6xl font-semibold">Turning your ideas into reality</h1>
        <h2 className="text-3xl">Using <span>&lt;Code/&gt;</span> to make a difference</h2>
        <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur officia temporibus tenetur odio odit, doloribus ex. Accusantium, quaerat corporis, eos similique ipsam qui quo necessitatibus provident illo a expedita et.</p>
        <button>Get in Touch</button>
      </div>
      <div className="right">
        <img
          src="https://images.unsplash.com/photo-1602992708529-c9fdb12905c9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8ZGV2ZWxvcGVyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="object-cover object-left shadow rounded-full align-middle border-none w-96 h-96"
        />
      </div>
    </header>
  );
}

export default Hero;
