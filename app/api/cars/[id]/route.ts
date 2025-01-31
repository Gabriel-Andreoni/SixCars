import db from "../../../../db";

interface Car {
    id: number;
    name: string;
    description: string;
    year: string;
    km: number;
    price: number;
    location: string;
    thumb: Buffer;
    imagePath: string;
  }

export async function GET(request: Request, { params }: { params: { id: string } }) {
    
  const id = params.id;

  try {
        
    const car = db.prepare("SELECT * FROM cars WHERE id == ?").get((id)) as Car | undefined;

    if (!car) {
        return Response.json({ message: 'Carro não encontrado' }, { status: 404 });
    }

    let carThumbBase64 = '';
    if (car.thumb) {
      const carThumbBuffer = Buffer.from(car.thumb);
      carThumbBase64 = `data:image/jpeg;base64,${carThumbBuffer.toString(
        'base64'
      )}`; 
    }

    return Response.json({ 
      car: {
        ...car,
        thumb: carThumbBase64,
      }
    })

}

catch (error) {
    if (error instanceof Error) {
        console.log('Algo deu errado', error.message);

    } else {
        console.log('Erro inesperado');
    }

    return Response.json({ message: 'Erro do servidor' }, { status: 500 })
}
}
