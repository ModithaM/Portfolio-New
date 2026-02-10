import { ContactFormResponse } from "@/types";
import {apiClient} from "@/config/apiConfig";

async function submitForm(
    name: string,
    email: string,
    message: string
): Promise<ContactFormResponse> {
    try {
        const response = await apiClient.post<ContactFormResponse>(
            "https://api.web3forms.com/submit",
            {
                access_key: "2510f8a8-388f-4f7b-b618-f4200feff6da",
                name,
                email,
                message,
            }
        );

        return response.data;
    } catch {
        throw new Error("Failed to submit form");
    }
}

export default submitForm;