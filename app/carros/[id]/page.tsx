import Image from "next/image";

export default async function CarDetails({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const reqCar = await fetch(`http://localhost:3000/api/cars/${id}`)
    const carData = await reqCar.json();
    const car = carData.car;

    console.log(car);

    const formattedCarPrice = () => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(Number(car.price))
    }


    return (
        <section className="w-full h-auto bg-[#ecedf2]">
            <div className="w-full h-72 overflow-hidden flex justify-start items-center">
                <Image src={car.thumb}
                    alt={`Imagem de um ${car.name}`}
                    width={1980}
                    height={0}
                    className="mx-10 object-cover"
                />
            </div>
            <div className="w-full h-auto flex gap-28">
                <div className="w-3/6 h-[450px] -mt-12 mb-12 ml-16 p-8 rounded bg-white shadow-lg">
                    <div className="w-full">
                        <h1 className="font-black text-3xl">{car.name}</h1>
                        <h3 className="mt-1 text-sm text-[#696977]">{car.description}</h3>
                    </div>

                    <div className="w-full">
                        <ul className="w-full flex flex-wrap gap-4">
                            <li className="w-full flex flex-col mt-8">
                                <span className="text-sm text-[#696977]">Cidade</span>
                                <span className="font-black">{car.location}</span>
                            </li>
                            <li className="w-[20%] flex flex-col">
                                <span className="text-sm text-[#696977]">Ano</span>
                                <span className="font-black">{car.year}</span>
                            </li>
                            <li className="w-[20%] flex flex-col">
                                <span className="text-sm text-[#696977]">KM</span>
                                <span className="font-black">{car.km}</span>
                            </li>
                            <li className="w-[20%] flex flex-col">
                                <span className="text-sm text-[#696977]">Câmbio</span>
                                <span className="font-black">Manual</span>
                            </li>
                            <li className="w-[20%] flex flex-col">
                                <span className="text-sm text-[#696977]">Combustível</span>
                                <span className="font-black">Gasolina</span>
                            </li>
                            <li className="w-[20%] flex flex-col">
                                <span className="text-sm text-[#696977]">Final da Placa</span>
                                <span className="font-black">4</span>
                            </li>
                            <li className="w-[20%] flex flex-col">
                                <span className="text-sm text-[#696977]">Cor</span>
                                <span className="font-black">Prata</span>
                            </li>
                            <li className="w-[20%] flex flex-col">
                                <span className="text-sm text-[#696977]">Aceita troca</span>
                                <span className="font-black">Sim</span>
                            </li>
                            <li className="w-[20%] flex flex-col">
                                <span className="text-sm text-[#696977]">IPVA Pago</span>
                                <span className="font-black">Sim</span>
                            </li>
                            <li className="w-[20%] flex flex-col">
                                <span className="text-sm text-[#696977]">Licenciado</span>
                                <span className="font-black">Sim</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="w-2/6 h-[450px] -mt-12 mr-8 p-8 rounded bg-white shadow-lg">
                    <h2 className="text-5xl font-black">{formattedCarPrice()}</h2>
                </div>
            </div>
        </section>
    )
}