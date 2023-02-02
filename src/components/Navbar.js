/** @format */
import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/solvingzero-logo.webp" width={106} height={58} alt="SolvingZero logo" />
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/article"><a>Articles</a></Link>
      <Link href="/green-energy"><a>Green Energy Guide</a></Link>
      <Link href="/compare-electricity-plans"><a>Compare plans</a></Link>
    </nav>
  );
};

export default Navbar;
