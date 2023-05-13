export const Navbar = ({isFixed}) => {
    return (
        <div>
            <h1 className="bg-blue-400 h-[70px] flex flex-col items-center justify-center text-black">NAVBAR_1</h1>
            <div className={`bg-blue-200 ${isFixed ? "fixed w-full top-0": ""} h-[30px] flex flex-row items-center justify-around text-black`}>
                <h2>SUB_NAV_1</h2>
                <h2>SUB_NAV_2</h2>
                <h2>SUB_NAV_3</h2>
            </div>
        </div>
    )
}
