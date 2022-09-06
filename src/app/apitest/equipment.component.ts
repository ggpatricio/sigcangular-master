import { Component, Input } from '@angular/core';
import { Equipments, EquipmentsCall, Equipment } from './equipments';
import { apitest } from './apitest';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'equipment',
  templateUrl: './equipment.component.html'
})


export class EquipmentComponent {
    
    equipmentsCall : EquipmentsCall;
    equipmentList : Equipments;

    getEquipmentsForm = new FormGroup({
        paginationCount: new FormControl('', [Validators.required]),
        paginationPage: new FormControl('', [Validators.required]),
        businessUnitId: new FormControl('', [Validators.required]),
    });
       
    constructor(public equipmentsService: apitest) {
        this.equipmentList = {} as Equipments;
    }

    getEquipments() {
        this.equipmentsCall = this.getEquipmentsForm.value;
        this.equipmentsService.getEquipments(this.equipmentsCall).subscribe((response: Equipments) => {
            console.log(response);

            this.equipmentList.returnValue = response?.returnValue;


            this.equipmentList.returnValue.elements = response?.returnValue?.elements?.map((item) => {
                var equipment = {} as Equipment;
                equipment.equipmentId = item?.equipmentId;
                equipment.equipmentTypeId = item?.equipmentTypeId;
                equipment.equtCode = item?.equtCode;
                    equipment.equtDescription = item?.equtDescription;
                    equipment.businessUnitId = item?.businessUnitId;
                    equipment.bsuDescription = item?.bsuDescription;
                equipment.equAddress = item?.equAddress;
                    equipment.equDescription = item?.equDescription;
                    equipment.equReference = item?.equReference;
                    equipment.equSerialNumber = item?.equSerialNumber;
                equipment.equAddress = item?.equAddress;
                equipment.workCenterId = item?.workCenterId;
                equipment.wkcReference = item?.wkcReference;
                equipment.wkcDescription = item?.wkcDescription;
                equipment.wkcUIC = item?.wkcUIC;
                equipment.wkcShortName = item?.wkcShortName;
                equipment.wkcStatus = item?.wkcStatus;
                equipment.workCenterTypeId = item?.workCenterTypeId;
                equipment.wkctCode = item?.wkctCode;
                equipment.wkctDescription = item?.wkctDescription;
                equipment.equIsFree = item?.equIsFree;
                equipment.equIsMain = item?.equIsMain;
                equipment.parentEquipmentId = item?.parentEquipmentId;
                    equipment.equipmentStatusId = item?.equipmentStatusId;
                equipment.equsCode = item?.equsCode;
                equipment.equsDescription = item?.equsDescription;
                equipment.equUpdtDate = item?.equUpdtDate;
                equipment.equUpdtUser = item?.equUpdtUser;
                    equipment.equIPAddress = item?.equIPAddress;
                equipment.equCheckApps = item?.equCheckApps;
                return equipment;
              });
        });
        
        //ok start
        // this.equipmentsService.getEquipments(this.equipmentsCall).subscribe(
        //     data=>{ this._a = data; }
        // );
        //ok end
   }

    ngOnInit(): void {}
}