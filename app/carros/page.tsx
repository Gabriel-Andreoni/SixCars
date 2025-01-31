import Image from "next/image";
import LocationIcon from '../../public/location-icon.png';
import Link from "next/link";

interface Car {
    id: number;
    name: string;
    description: string;
    price: number;
    year: number;
    km: number;
    location: string;
    thumb: string;
}

interface ResponseProps {
    cars: Car[]
}

export const revalidate = 60;


export default async function CarrosPage() {
    const req = await fetch('http://localhost:3000/api/cars', {
        cache: 'force-cache',
        next: {
            revalidate: 60,
        }
    });
    const data: ResponseProps = await req.json();

    const formattedCars = data.cars.map((car) => ({
        ...car,
        price: new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(Number(car.price)),
        km: new Intl.NumberFormat('pt-BR', {
            style: 'decimal',
        }).format(Number(car.km)),
    }));

    console.log(data);

    return (
        <div className="w-full h-[calc(100vh-96px)] flex- flex-col py-8 overflow-y-scroll bg-gray-200">
            <ul className="w-7xl h-auto flex flex-wrap justify-center items-center gap-4 ">
                {formattedCars.map((car) => {
                    return (
                        <li
                            key={car.id}
                            className="w-[350px] h-auto flex flex-col rounded-lg bg-white"
                        >
                            <div className="">
                                <Image className="rounded-t-lg" src={String(car.thumb)} width="500" height="100" alt="imagem de veículos" />
                            </div>
                            <div className="w-full flex flex-col">
                                <div className="p-4 flex flex-col gap-2">
                                    <h1 className="text-xl font-medium">{car.name.toUpperCase()}</h1>
                                    <h3 className="text-sm text-[#8b8c99]">{car.description.toUpperCase()}</h3>
                                    <h2 className="mt-4 text-lg font-medium">{car.price}</h2>
                                    <span className="w-full flex justify-between">
                                        <h5 className="text-sm text-[#8b8c99]">{car.year}</h5>
                                        <h5 className="text-sm text-[#8b8c99]">{car.km} Km</h5>
                                    </span>
                                    <button className="w-full mt-4 p-3 bg-slate-950 text-white rounded-lg font-medium">
                                        <Link href={`/carros/${car.id}`}>Saiba mais</Link>
                                    </button>
                                </div>
                                <div className="w-full">
                                    <hr />
                                    <span className="w-full flex items-center">
                                        <Image className="m-4" src={LocationIcon} alt="ícone de localização" width="20" height="20" />
                                        <p className="text-sm font-medium ">{car.location}</p>
                                    </span>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}