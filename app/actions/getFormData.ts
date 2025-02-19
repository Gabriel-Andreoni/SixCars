export interface Car {
    name: string;
    description: string;
    price: string;
    year: string;
    km: string;
    location: string;
    thumb: string;
    gear: string;
    finalNumber: string;
    color: string;
    exchange: string;
    ipva: string;
    licenced: string;
    gasType: string;
}

export function getFormData(formData: FormData):Car {
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
}