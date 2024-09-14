import Link from "next/link";

function Header() {
  return (
    <div>
      <h2>Header</h2>
      {/* <h1>Pages </h1>
      <p> paragrapahs</p>
      <Link href="about">open this link</Link> */}
    </div>
  );
}

function Header1() {
  return (
    <div>
      <h2>hello</h2>
      <h1>hi </h1>
      <p> good</p>
      <Link href="about">open this link</Link>
    </div>
  );
}

function Header2() {
  return (
    <div>
      <h2>hello</h2>
      <h1>hi </h1>
      <p> good</p>
      {/* <Link href="about">open this link</Link> */}
    </div>
  );
}

export { Header, Header2 };

export default Header;
