import dotenv from 'dotenv'
import { doubleArray } from './test/test'

dotenv.config()

export const handler = async (event: { array: number[] }) => {
    try {
        return doubleArray(event?.array || [1, 2])
    } catch (e: any) {
        console.log(e.message)
        return {
            error: true,
            errorMessage: e.message,
        }
    }
}
