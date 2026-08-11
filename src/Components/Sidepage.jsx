import { Link } from "react-router-dom";
const Sidepage = () => {
   return (
    <>
    <div>
    <div className="bg-black h-screen w-[280px]">
            <img src="src/assets/Group.png" alt="" className="p-10" />
            <div className="grid">
                
            <Link  to='/Dashboard'>
               <button className="hover:bg-gray-700 transition duration-300">
                <img src="src/assets/_2/Content.png" alt="" />
               </button>
               </Link>
               <Link  to='/Expenses'>
                <button className="hover:bg-gray-700 transition duration-300">
                    <img src="src/assets/_5/expenses.png" alt="" />
                </button>
                </Link>
                <Link  to='/Income'>
                <button className="hover:bg-gray-700 transition duration-300">
                    <img src="src/assets/_2/image.png" alt="" />
                </button>
                </Link>
                <Link  to='/Aiassistant'>
                <button className="hover:bg-gray-700 transition duration-300">
                    <img src="src/assets/_2/ai assistant.png" alt="" />
                </button>
                </Link>
                <Link  to='/Settings'>
                <button className="hover:bg-gray-700 transition duration-300">
                    <img src="src/assets/settings.png" alt="" />
                </button>
                </Link>
            </div>
            </div>
    </div>
    </>
   )

}
export default Sidepage;