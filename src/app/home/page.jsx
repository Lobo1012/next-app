import Image from "next/image";
import chaeyoung from '../assets/1.jpg'


export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {/*import image component nextjs automatically optimized on image size and resolution */}
            <Image 
                src={chaeyoung}
                alt="chaeyoung"
                width={500}
                height={500}
                priority
            />
            <div>
                <h1 className="antialiased text-lg text-white hover:text-indigo-600">Hello this is Chaeyoung</h1>
            </div>
        </main>
    );
}