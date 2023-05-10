// import React from 'react'
// import { useEffect, useState } from 'react';
// import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';




// function pagination({ pages, setCurrentPage, currentEmployees, sortedEmployees })
// {
//     const numOfPages = [];
//     for (let i = 0; i < pages.length; i++)
//     {
//         numOfPages.push(i);
//     }
//     const [currentButton, setCurrentButton] = useState(1)

//     useEffect(() =>
//     {
//         setCurrentPage(currentButton)
//     }, [currentButton, setCurrentPage])

//     return (
//         <div>
//             <ul className="inline-flex items-center -space-x-px">
//                 <li>
//                     <a href="#" className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700">
//                         <BsArrowLeftShort />
//                     </a>
//                 </li>
//                 <li>
//                     <a href="#!" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">1</a>
//                 </li>
//                 <li>
//                     <a href="#!" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">2</a>
//                 </li>
//                 <li>
//                     <a href="#!" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">3</a>
//                 </li>
//                 <li>
//                     <a href="#!" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">4</a>
//                 </li>
//                 <li>
//                     <a href="#!" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">5</a>
//                 </li>

//                 <li>
//                     <a href="#" className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700">
//                         <BsArrowRightShort />
//                     </a>
//                 </li>
//             </ul>
//         </div>
//     )
// }

// export default pagination