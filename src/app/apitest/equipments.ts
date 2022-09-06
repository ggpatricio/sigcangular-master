//import * as internal from "stream";

export interface EquipmentsCall {
  paginationCount: Number;
  paginationPage: Number;
  businessUnitId: Number;
}
  
export interface Equipments {
  "returnValue": returnValue;
  "returnStatusInformation": returnStatusInformation;
}
  

export class returnValue {
  elements: Equipment[];
  totalCount: Number;
}
export class returnStatusInformation
{
  success: string;
}

export class Equipment {
  equipmentId: Number;
  equipmentTypeId: Number;
  equtCode: string;
  equtDescription: string;
  businessUnitId: Number;
  bsuDescription: string;
  equDescription: string;
  equReference: string;
  equSerialNumber: string;
  equAddress: Number;
  workCenterId: Number;
  wkcReference: string;
  wkcDescription: string;
  wkcUIC: Number;
  wkcShortName: string;
  wkcStatus: boolean;
  workCenterTypeId: Number;
  wkctCode: string;
  wkctDescription: string;
  equIsFree: boolean;
  equIsMain: boolean;
  parentEquipmentId: Number;
  equipmentStatusId: Number;
  equsCode: string;
  equsDescription: string;
  equUpdtDate: string;
  equUpdtUser: string;
  equIPAddress: string;
  equCheckApps: boolean;
}