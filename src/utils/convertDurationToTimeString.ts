import { stringify } from "querystring"

export function convertDurationToTimeString(duration: number): String{
    const hours = Math.floor(duration / 3600) // math.floor arredonda para baixo
    const minutes = Math.floor((duration % 3600) / 60)
    const seconds = duration % 60

    const timeString = [hours, minutes, seconds]
        .map(unit => String(unit).padStart(2, '0')) //padStart adiciona a string (zero) a esquerda da string original
        .join(':')

    return timeString;
}