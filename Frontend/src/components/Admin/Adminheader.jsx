

const AdminHeader = () => {
    return (
        <header className="sticky top-0 z-40 bg-white border-b border-gray-100 h-16 flex items-center justify-end  px-8">
    
        
               {/* User Profile Section */}
                <div className="flex items-center gap-3 pl-4 border-l border-gray-100">
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-50 cursor-pointer hover:border-blue-200 transition-all">
                        <img
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                            className="w-full h-full object-cover"
                            alt="Admin Profile"
                        />
                    </div>
                </div>
            
        </header>
    );
};

export default AdminHeader;