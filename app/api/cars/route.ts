import db from "../../../db";

export interface CarsProps {
    id: number,
    name: string,
    description: string,
    price: string,
    year: string,
    km: string,
    location: string,
    thumb: Buffer | null,
}

export async function GET() {
    try {
        const cars = db.prepare("SELECT * FROM cars").all();

        const formattedCars: CarsProps[] = cars.map((car: any) => ({
            ...car,
            thumb: car.thumb
                ? `data:image/png;base64,${Buffer.from(car.thumb).toString("base64")}`
                : null,
        }));

        return Response.json({
            cars: formattedCars
        }, { status: 200 });

    }

    catch (error) {
        if (error instanceof Error) {
            console.log('Algo deu errado', error.message);
        } else {
            console.log('Erro inesperado');
        }
    }
}

export async function POST(request: Request) {
    const formData = await request.formData();

    const carName = formData.get('carName');
    const carDescription = formData.get('carDescription');
    const carPrice = formData.get('carPrice');
    const carYear = formData.get('carYear');
    const carKm = formData.get('carKm');
    const carLocation = formData.get('carLocation');
    const carThumb = formData.get('carThumb') as File;

    try {
        const thumbBuffer = await carThumb.arrayBuffer();

        db.prepare(`
            INSERT INTO cars (name, description, price, year, km, location, thumb)
            VALUES (?, ?, ? ,?, ?, ?, ?)
        `).run(carName, carDescription, carPrice, carYear, carKm, carLocation, Buffer.from(thumbBuffer));

        return Response.json({ message: 'Carro adicionado com sucesso.' }, { status: 200 });
    }

    catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }

        return Response.json({ message: 'Erro ao salvar os dados no banco' }, { status: 500 });

    }
}