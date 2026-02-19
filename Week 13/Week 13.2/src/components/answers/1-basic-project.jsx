export function SidebarClass1(){
    return (
        <div className="flex">
            {/* md:translate-x-0 -translate-x-96 */}
            <div className="bg-red-200 w-0 md:w-96 ease-in-out transition-all duration-500 h-screen">
                Sidebar
            </div>
            <div className="bg-green-200 h-screen w-screen">
                Content
            </div>
        </div>
    )
}