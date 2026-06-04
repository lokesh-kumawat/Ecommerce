import { Link, useLocation } from 'react-router-dom';
import { BiBox, BiLogOut, BiSolidDashboard, BiUserPlus } from 'react-icons/bi';
import { BsBox, BsFileText } from 'react-icons/bs';
import { IoAlertCircle } from 'react-icons/io5';

const Sidebar = () => {

    const location = useLocation();

    const menuItems = [
        { title: 'Main', type: 'header' },
        { title: 'Dashboard', icon: <BiSolidDashboard size={20} />, link: "/admin" },
        { title: 'Products', icon: <BiBox size={20} />, link: "/admin/product" },
        { title: 'Docs', icon: <BsFileText size={20} />, link: "#" },
        { title: 'Account', type: 'header' },
        { title: 'Log out', icon: <BiLogOut size={20} />, link: "/login" },
       
    ];

    return (

        <div className="w-64 h-screen bg-white border-r border-gray-100 flex flex-col p-4">
            {/* Logo Area */}
            <div className="flex items-center gap-2 px-2 mb-8">
                <div className="bg-blue-500 p-1.5 rounded-lg">
                    <BsBox className="text-white" size={20} />
                </div>
                <div>
                    <h1 className="font-bold text-lg leading-tight">InApp</h1>
                    <p className="text-[10px] text-gray-400 uppercase tracking-wider">Inventory App</p>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1">
                {menuItems.map((item, index) => {
                    if (item.type === 'header') {
                        return (
                            <p key={index} className="text-xs font-semibold text-gray-400 uppercase px-4 mt-6 mb-2">
                                {item.title}
                            </p>
                        );
                    }

                    const isActive = item.link === "/admin" 
                        ? location.pathname === "/admin" 
                        : location.pathname.startsWith(item.link) && item.link !== "#";

                    return (
                        <Link
                            key={index}
                            to={item.link || "#"}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors mb-1 ${isActive
                                ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-500 rounded-l-none'
                                : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
                                }`}
                        >
                            <span className={isActive ? 'text-blue-600' : 'text-gray-400'}>
                                {item.icon}
                            </span>
                            <span className="text-sm font-medium">{item.title}</span>
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}

export default Sidebar