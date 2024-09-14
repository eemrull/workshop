"use client";

import { Header, Header2 } from "/component/Header";
import Footer from "/component/Footer";
import Login from "/component/Login";
import { useEffect, useState } from "react";

export default function Page() {
  const [count, setCount] = useState(20);

  useEffect(() => {
    console.log("Hello World");
  }, []);

  return (
    <div>
      <Header />
      {/* <Login /> */}

      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>BUTTON</button>

      <Footer />
    </div>
  );
}
