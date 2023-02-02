/** @format */
import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/solvingzero-logo.webp" width={106} height={58} alt="SolvingZero logo" />
      </div>
      <Link href="/">Home</Link>
      <Link href="/article">Articles</Link>
      <Link href="/green-energy">Green Energy Guide</Link>
      <Link href="/compare-electricity-plans">Compare plans</Link>
    </nav>
  );
};

export default Navbar;
