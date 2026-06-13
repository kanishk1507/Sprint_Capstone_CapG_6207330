import {APIRequestContext} from "@playwright/test";

export async function getCustomerId(
    request: APIRequestContext,
    username: string,
    password: string
): Promise<string>{

    const response = await request.get(`https://parabank.parasoft.com/parabank/services/bank/login/${username}/${password}`);
    const body = await response.text();

    const customerId =body.match(/<id>(.*?)<\/id>/)?.[1];
    if (!customerId) {
        throw new Error(
            "Customer ID could not be extracted"
        );
    }
    return customerId;
}