

export class returnValue {
    apiVersion: string;
    dbVersion: string;

}
export class returnStatusInformation
{
    success: string;
}

export class APIInfo
{
    "returnValue": returnValue;
    "returnStatusInformation": returnStatusInformation;
}