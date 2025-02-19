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
            <div className="w-full h-16 flex flex-col">
                <Label
                    htmlFor="car-name"
                    text="Nome do Carro"
                    className="text-md font-medium text-blue-500"
                />
                <Input
                    className="h-full p-2 border border-blue-500 outline-none rounded-sm bg-blue-500 bg-opacity-20 font-semibold"
                    name="car-name"
                    id="car-name"
                    type="text"
                />
            </div>
            <div className="w-full h-16 flex flex-col">
                <Label
                    htmlFor="car-description"
                    text="Descrição"
                    className="text-md text-blue-500 font-medium"
                />
                <TextArea
                    className="h-full p-2 border border-blue-500 outline-none rounded-sm bg-blue-500 bg-opacity-20 font-semibold"
                    name="car-description"
                    id="car-description"
                />
            </div>

            <div className="w-full h-16 flex flex-col">
                <Label
                    htmlFor="car-price"
                    text="Preço do veículo"
                    className="text-md text-blue-500 font-medium"
                />
                <Input
                    className="h-full p-2 border border-blue-500 outline-none rounded-sm bg-blue-500 bg-opacity-20 font-semibold"
                    name="car-price"
                    id="car-price"
                    type="number"
                />
            </div>

            <div className="w-full h-16 flex flex-col">
                <Label
                    htmlFor="car-km"
                    text="Kilometragem"
                    className="text-md text-blue-500 font-medium"
                />
                <Input
                    className="h-full p-2 border border-blue-500 outline-none rounded-sm bg-blue-500 bg-opacity-20 font-semibold"
                    name="car-km"
                    id="car-km"
                    type="number"
                />
            </div>

            <div className="w-full h-16 flex flex-col">
                <Label
                    htmlFor="car-year"
                    text="Ano de Veículo"
                    className="text-md text-blue-500 font-medium"
                />
                <Input
                    className="h-full p-2 border border-blue-500 outline-none rounded-sm bg-blue-500 bg-opacity-20 font-semibold"
                    name="car-year"
                    id="car-year"
                    type="text"
                />
            </div>
            <div className="w-full h-16 flex flex-col">
                <Label
                    htmlFor="car-gear"
                    text="Câmbio"
                    className="text-md text-blue-500 font-medium"
                />
                <Input
                    className="h-full p-2 border border-blue-500 outline-none rounded-sm bg-blue-500 bg-opacity-20 font-semibold"
                    name="car-gear"
                    id="car-gear"
                    type="text"
                />
            </div>

            <div className="w-full h-16 flex flex-col">
                <Label
                    htmlFor="car-final-number"
                    text="Final da Placa"
                    className="text-md text-blue-500 font-medium"
                />
                <Input
                    className="h-full p-2 border border-blue-500 outline-none rounded-sm bg-blue-500 bg-opacity-20 font-semibold"
                    name="car-final-number"
                    id="car-final-number"
                    type="number"
                />
            </div>
            <div className="w-full h-16 flex flex-col">
                <Label
                    htmlFor="car-color"
                    text="Cor"
                    className="text-md text-blue-500 font-medium"
                />
                <Input
                    className="h-full p-2 border border-blue-500 outline-none rounded-sm bg-blue-500 bg-opacity-20 font-semibold"
                    name="car-color"
                    id="car-color"
                    type="text"
                />
            </div>
            <div className="w-full h-16 flex flex-col">
                <Label
                    htmlFor="car-exchange"
                    text="Aceita Troca?"
                    className="text-md text-blue-500 font-medium"
                />
                <Input
                    className="h-full p-2 border border-blue-500 outline-none rounded-sm bg-blue-500 bg-opacity-20 font-semibold"
                    name="car-exchange"
                    id="car-exchange"
                    type="text"
                />
            </div>
            <div className="w-full h-16 flex flex-col">
                <Label
                    htmlFor="car-ipva"
                    text="IPVA?"
                    className="text-md text-blue-500 font-medium"
                />
                <Input
                    className="h-full p-2 border border-blue-500 outline-none rounded-sm bg-blue-500 bg-opacity-20 font-semibold"
                    name="car-ipva"
                    id="car-ipva"
                    type="text"
                />
            </div>
            <div className="w-full h-16 flex flex-col">
                <Label
                    htmlFor="car-licenced"
                    text="Licenciado?"
                    className="text-md text-blue-500 font-medium"
                />
                <Input
                    className="h-full p-2 border border-blue-500 outline-none rounded-sm bg-blue-500 bg-opacity-20 font-semibold"
                    name="car-licenced"
                    id="car-licenced"
                    type="text"
                />
            </div>
            <div className="w-full h-16 flex flex-col">
                <Label
                    htmlFor="gas-type"
                    text="Combustível"
                    className="text-md text-blue-500 font-medium"
                />
                <Input
                    className="h-full p-2 border border-blue-500 outline-none rounded-sm bg-blue-500 bg-opacity-20 font-semibold"
                    name="gas-type"
                    id="gas-type"
                    type="text"
                />
            </div>
            <div className="w-full h-16 flex flex-col">
                <Label
                    htmlFor="car-image"
                    text="Foto de capa"
                    className="text-md text-blue-500 font-medium"
                />
                <Input
                    className="h-full p-2 border border-blue-500 outline-none rounded-sm bg-blue-500 bg-opacity-20 font-semibold"
                    name="car-thumb"
                    id="car-image"
                    type="file"
                    multiple={true}
                    required={true}
                />
            </div>

            <div className="w-full h-16 flex flex-col">
                <Label
                    htmlFor="location"
                    text="Localização"
                    className="text-md text-blue-500 font-medium"
                />
                <Input
                    className="h-full p-2 border border-blue-500 outline-none rounded-sm bg-blue-500 bg-opacity-20 font-semibold"
                    name="location"
                    id="location"
                    type="text"
                />
            </div>
            <button
                type="submit"
                className="w-full my-6 p-4 bg-blue-500 rounded-sm text-white font-semibold"
            >Enviar</button>
        </form>
    )
} 