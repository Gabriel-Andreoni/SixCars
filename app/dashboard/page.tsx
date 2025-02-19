import { Form } from "../components/form";

import {auth} from '@clerk/nextjs/server';
import { redirect } from "next/navigation";

import { saveCarOnDB } from "../actions/saveCar";
import { getFormData } from "../actions/getFormData";

export default async function DashboardPage() {
    const {userId} = await auth();

    if(!userId) {
        redirect('/');
    }

    const handleData = async (formData:FormData) => {
        "use server";

        const car = getFormData(formData);
    
        saveCarOnDB(car);
    }

    return (
        <div className="w-full h-auto ">
            <div className="w-7xl h-full flex justify-center">
            <Form
                className="w-full mt-4 mx-20 p-4 flex flex-wrap gap-8 items-start border rounded-sm border-white border-b-transparent"
                handleForm={handleData}
            />
            </div>
        </div>
    )
}