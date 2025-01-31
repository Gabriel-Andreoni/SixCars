import { Input } from "../input";
import { Label } from "../label";
import { TextArea } from "../textarea";

type FormProps = {
    className: string,
    handleForm: (formData: FormData) => void,
}

export async function Form({ className, handleForm }: FormProps) {

    return (
        <form className={className} action={handleForm}>
            <div className="w-2/5 h-20 flex flex-col">
                <Label
                    htmlFor="car-name"
                    text="Nome do Carro"
                    className="text-md text-white font-medium"
                />
                <Input
                    className="h-full border-gray-500 flex outline-none rounded-lg"
                    name="car-name"
                    id="car-name"
                />
            </div>
            <div className="w-2/5 h-20 flex flex-col">
                <Label
                    htmlFor="car-description"
                    text="Descrição"
                    className="text-md text-white font-medium"
                />
                <TextArea
                    className="h-full border-gray-500 outline-none resize-none rounded-lg"
                    name="car-description"
                    id="car-description"
                />
            </div>

            <div className="w-2/5 h-20 flex flex-col">
                <Label
                    htmlFor="car-price"
                    text="Preço do veículo"
                    className="text-md text-white font-medium"
                />
                <Input
                    className="h-full border-gray-500 outline-none rounded-lg"
                    name="car-price"
                    id="car-price"
                    type="number"
                />
            </div>

            <div className="w-2/5 h-20 flex flex-col">
                <Label
                    htmlFor="car-km"
                    text="Kilometragem"
                    className="text-md text-white font-medium"
                />
                <Input
                    className="h-full p-2 border border-gray-500 outline-none rounded-lg bg-white"
                    name="car-km"
                    id="car-km"
                    type="number"
                />
            </div>

            <div className="w-2/5 h-20 flex flex-col">
                <Label
                    htmlFor="car-year"
                    text="Ano de Veículo"
                    className="text-md text-white font-medium"
                />
                <Input
                    className="h-full p-2 border border-gray-500 outline-none rounded-lg bg-white"
                    name="car-year"
                    id="car-year"
                    type="text"
                />
            </div>

            <div className="w-2/5 h-20 flex flex-col">
                <Label
                    htmlFor="car-image"
                    text="Foto de capa"
                    className="text-md text-white font-medium"
                />
                <Input
                    className="h-full p-2 border border-gray-500 outline-none rounded-lg bg-white"
                    name="car-thumb"
                    id="car-image"
                    type="file"
                    multiple={true}
                    required={true}
                />
            </div>

            <div className="w-2/5 h-20 flex flex-col">
                <Label
                    htmlFor="location"
                    text="Localização"
                    className="text-md text-white font-medium"
                />
                <Input
                    className="h-full p-2 border border-gray-500 outline-none rounded-lg bg-white"
                    name="location"
                    id="location"
                    type="text"
                />
            </div>
            <button
                type="submit"
                className="w-[468px] my-6 p-4 bg-white rounded-lg"
            >Enviar</button>
        </form>
    )
} 