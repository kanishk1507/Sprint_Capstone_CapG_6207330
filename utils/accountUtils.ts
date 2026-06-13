import {APIRequestContext} from "@playwright/test";

export async function getAccountId(
    request: APIRequestContext,
    customerId: string
): Promise<string> {

    const response = await request.get(`https://parabank.parasoft.com/parabank/services/bank/customers/${customerId}/accounts`);
    const body = await response.text();
    
    const accountId =body.match(/<id>(.*?)<\/id>/)?.[1];
    if (!accountId) {
        throw new Error(
            "Account ID could not be extracted"
        );
    }
    return accountId;
}