import Link from "next/link";

export default function Login() {
  return (
    <form>
      <input type="text" />
      <p> </p>
      <input type="password" />
      <p> </p>
      <Link href="/about/another">
        <button>LOGIN</button>
      </Link>
    </form>
  );
}
