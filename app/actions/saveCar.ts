import { Car } from "./getFormData";

export async function saveCarOnDB(car: Car) {
    await fetch('http://localhost:3000/api/cars', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(car),
    })
    .then(res => console.log(res.statusText));
}