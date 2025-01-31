import { Form } from "../components/form";
import {auth} from '@clerk/nextjs/server';
import { redirect } from "next/navigation";

export default async function DashboardPage() {
    const {userId} = await auth();

    if(!userId) {
        redirect('/');
    }

    const handleForm = async (formData:FormData) => {
        "use server";

        const carName = formData.get('car-name');
        const carDescription = formData.get('car-description');
        const carPrice = formData.get('car-price');
        const carYear = formData.get('car-year');
        const carKm = formData.get('car-km');
        const carLocation = formData.get('location');
        const carThumb = formData.get('car-thumb');

        const data = new FormData();
        data.append('carName', carName as string);
        data.append('carDescription', carDescription as string);
        data.append('carPrice', carPrice as string);
        data.append('carYear', carYear as string);
        data.append('carKm', carKm as string);
        data.append('carLocation', carLocation as string);
        data.append('carThumb', carThumb as Blob);


        fetch('http://localhost:3000/api/cars', {
            method: 'POST',
            body: data,
        })
        .then(response => console.log(response.status))
    
    }

    return (
        <div className="w-full h-[calc(100vh-96px)] bg-blue-500">
            <div className="w-7xl h-full flex justify-center items-center">
            <Form
                className="w-full h-96 mx-20 p-4 flex flex-wrap justify-between items-start border rounded-lg border-white"
                handleForm={handleForm}
            />
            </div>
        </div>
    )
}