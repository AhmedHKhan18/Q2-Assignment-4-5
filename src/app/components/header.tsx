import Link from "next/link"
import About from "../about/page"

export default function Header(){
    return(
        <div className="flex px-10 text-white py-4 justify-between bg-orange-500">
            <h1 className="text-3xl font-bold">Blog Website</h1>
            <ul className="flex text-xl gap-4">
                <li><Link href={'#'}>Home</Link></li>
                <li><Link href={'about'}>About</Link></li>
                <li><Link href={'contact'}>Contact</Link></li>
            </ul>
        </div>
    )
}