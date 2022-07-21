import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <>
            <nav>
                <div className="logo">
                    <Image src='/femaleFace.jpg' width={80} height={80} alt="image"/>
                </div>
                
                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a>About</a></Link>
                <Link href="/admin"><a>Admin Page</a></Link>
            </nav>
        </>
    );
}
 
export default Navbar;