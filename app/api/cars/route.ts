import db from "../../../db";
import { Car } from "../../actions/getFormData";


export async function GET() {
    try {
        const cars = db.prepare("SELECT * FROM cars").all();

        const formattedCars: Car[] = cars.map((car: any) => ({
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

export const getFormData = (formData: FormData): Car => {
    return {
        name: formData.get('car-name')?.toString() ?? '',
        description: formData.get('car-description')?.toString() ?? '',
        price: formData.get('car-price')?.toString() ?? '',
        year: formData.get('car-year')?.toString() ?? '',
        km: formData.get('car-km')?.toString() ?? '',
        location: formData.get('location')?.toString() ?? '',
        thumb: formData.get('car-thumb')?.toString() ?? '',
        gear: formData.get('car-gear')?.toString() ?? '',
        finalNumber: formData.get('car-final-number')?.toString() ?? '',
        color: formData.get('car-color')?.toString() ?? '',
        exchange: formData.get('car-exchange')?.toString() ?? '',
        ipva: formData.get('car-ipva')?.toString() ?? '',
        licenced: formData.get('car-licenced')?.toString() ?? '',
        gasType: formData.get('gas-type')?.toString() ?? ''
    };
};

export async function POST(request: Request) {
    const contentType = request.headers.get('content-type');
    if (!contentType?.includes('multipart/form-data') && !contentType?.includes('application/x-www-form-urlencoded')) {
        return Response.json({ message: 'Formato inválido. Use multipart/form-data ou application/x-www-form-urlencoded.' }, { status: 400 });
    }
    try {
        const formData = await request.formData();

        const carObj: Car = getFormData(formData);

        console.log(carObj);

        db.prepare(`
            INSERT INTO cars (
                name,
                description,
                price,
                year,
                km,
                location,
                thumb,
                gear,
                finalNumber,
                color,
                exchange,
                ipva,
                licenced,
                gasType
            )
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).run(
            carObj.name,
            carObj.description,
            carObj.price,
            carObj.year,
            carObj.km,
            carObj.location,
            carObj.thumb,
            carObj.gear,
            carObj.finalNumber,
            carObj.color,
            carObj.exchange,
            carObj.ipva,
            carObj.licenced,
            carObj.gasType
        );

        return Response.json({ message: 'Carro adicionado com sucesso.' }, { status: 200 });
    } catch (error) {
        console.log(error);
        return Response.json({ message: 'Erro ao salvar os dados no banco.' }, { status: 500 });
    }
}