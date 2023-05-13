export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center">
            {
                [...Array(100)].map((_, i) => (
                    <div className='p-24 m-4 font-black text-black bg-blue-100' key={i}>{i+1}</div>
                ))
            }
        </div>
    )
}
