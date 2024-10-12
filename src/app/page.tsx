import Link from "next/link"

export default function App(){
  return(
     <div>
      <h1 className="text-4xl m-10 font-semibold">Latest Blogs:</h1>
    <div className="px-20 mb-10 flex justify-between gap-5 flex-wrap">
     <Link href={'blog-1'}>
      <div className="bg-gray-700 p-5 shadow-lg shadow-gray-600 w-60 rounded-xl text-white hover:scale-110 duration-200 mt-4">
        <img src="https://files.oaiusercontent.com/file-XZWWxgKNJcRcfybDbmRJlgBX?se=2024-10-12T16%3A57%3A55Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D3ba1f3ce-e24e-4603-b53a-905b1ce32c7b.webp&sig=ykT/iKSPq2BzGbtrbV/nxPkrwnRQkElOsXHbVDJLO2o%3D" className="rounded-xl"/>
        <div>
        <h1 className="text-xl font-semibold my-4">React Native Tips</h1>
        <p>Get started with React Native by understanding the basics, <span className="text-blue-500">Read More</span></p>
        </div>
      </div>
      </Link>
      <Link href={'blog-2'}>
      <div className="bg-gray-700 p-5 shadow-lg shadow-gray-600 w-60 rounded-xl text-white hover:scale-110 duration-200 mt-4">
        <img src="https://files.oaiusercontent.com/file-DjcXgJBRz74wQaU6EEzgjQ1p?se=2024-10-12T16%3A59%3A58Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D7ce8983f-4b49-48e6-a551-479c619c6da2.webp&sig=qHhDXRw3jyVrHY84SBMeIr%2BsazaRVQT2m8yY6zz%2BUs4%3D" className="rounded-xl"/>
        <div>
        <h1 className="text-xl font-semibold my-4">10 JavaScript Tricks</h1>
        <p>Discover JavaScript tricks and shortcuts that can help you <span className="text-blue-500">Read More</span></p>
        </div>
      </div>
        </Link>
      <Link href={'blog-3'}>
      <div className="bg-gray-700 p-5 shadow-lg shadow-gray-600 w-60 rounded-xl text-white hover:scale-110 duration-200 mt-4">
        <img src="https://files.oaiusercontent.com/file-WPJnejEtsN9fwkWeElpuEoe8?se=2024-10-12T17%3A01%3A06Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dbad26885-38a8-488b-adc1-6085b05d43e5.webp&sig=l8Sy/Xl1hq5Z1VrMNOM%2BcDbqRBB/vllAhxpMN3SgHjQ%3D" className="rounded-xl"/>
        <div>
        <h1 className="text-xl font-semibold my-4">Building a Portfolio</h1>
        <p>Learn how to create a professional portfolio using Next.js. <span className="text-blue-500">Read More</span></p>
        </div>
      </div>
      </Link>
      <Link href={'blog-4'}>
      <div className="bg-gray-700 p-5 shadow-lg shadow-gray-600 w-60 rounded-xl text-white hover:scale-110 duration-200 mt-4">
        <img src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600" className="rounded-xl"/>
        <div>
        <h1 className="text-xl font-semibold my-4">The Future of AI</h1>
        <p>AI continues to shape our future in exciting ways. <span className="text-blue-500">Read More</span></p>
        </div>
      </div>
      </Link>
      <Link href={'blog-5'}>
      <div className="bg-gray-700 p-5 shadow-lg shadow-gray-600 w-60 rounded-xl text-white hover:scale-110 duration-200 mt-4">
        <img src="data:image/png;base64,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" className="rounded-xl"/>
        <div>
        <h1 className="text-xl font-semibold my-4">Basics of Cloud Computing</h1>
        <p>Cloud computing has revolutionized the tech industry.<span className="text-blue-500">Read More</span></p>
        </div>
      </div>
      </Link>
      <Link href={'blog-6'}>
      <div className="bg-gray-700 p-5 shadow-lg shadow-gray-600 w-60 rounded-xl text-white hover:scale-110 duration-200 mt-4">
        <img src="https://images.pexels.com/photos/28828567/pexels-photo-28828567/free-photo-of-close-up-of-smartphone-display-with-reflection.jpeg?auto=compress&cs=tinysrgb&w=600" className="rounded-xl"/>
        <div>
        <h1 className="text-xl font-semibold my-4">Android Emulators for Windows</h1>
        <p>Looking for the perfect Android emulator for <span className="text-blue-500">Read More</span></p>
        </div>
      </div>
      </Link>
      <Link href={'blog-7'}>
      <div className="bg-gray-700 p-5 shadow-lg shadow-gray-600 w-60 rounded-xl text-white hover:scale-110 duration-200 mt-4">
        <img src="https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=600" className="rounded-xl"/>
        <div>
        <h1 className="text-xl font-semibold my-4">Optimize Your Website</h1>
        <p>Website speed is crucial for user retention and SEO. <span className="text-blue-500">Read More</span></p>
        </div>
      </div>
      </Link>
      <Link href={'blog-8'}>
      <div className="bg-gray-700 p-5 shadow-lg shadow-gray-600 w-60 rounded-xl text-white hover:scale-110 duration-200 mt-4">
        <img src="https://images.unsplash.com/photo-1616499370260-485b3e5ed653?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZWxhbmNpbmclMjBvbiUyMGZpdmVycnxlbnwwfHwwfHx8MA%3D%3D" className="rounded-xl"/>
        <div>
        <h1 className="text-xl font-semibold my-4">Freelancing on Fiverr</h1>
        <p>Want to make it big on Fiverr? Learn how to create a compelling gig, <span className="text-blue-500">Read More</span></p>
        </div>
      </div>
      </Link>
      </div>
     </div>
  )
}