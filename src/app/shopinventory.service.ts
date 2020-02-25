import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ShopinventoryService {
  objects = [
    {
      id: 101,
      name: "Bar Stool",
      price: 8000,
      image: "assets/BarStools.jpg",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is also pretty cool",
      type: "kitchen"
    },
    {
      id: 102,
      name: "Simple Bed",
      price: 25000,
      image: "assets/bedRoom.jpg",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is also pretty cool",
      type: "bedroom"
    },
    {
      id: 103,
      name: "Chair",
      price: 6000,
      image: "assets/chair1.jpg",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is also pretty cool",
      type: "kitchen"
    },
    {
      id: 104,
      name: "Kitchen Table",
      price: 37000,
      image: "assets/kitchenTable.png",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is also pretty cool",
      type: "kitchen"
    },
    {
      id: 105,
      name: "Not So Simple Bed",
      price: 60000,
      image: "assets/krevet.jpg",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is also pretty cool",
      type: "bedroom"
    },
    {
      id: 107,
      name: "Sweet Sofa",
      price: 43000,
      image: "assets/livingRoomFurniture.jpg",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is also pretty cool",
      type: "livingroom"
    },
    {
      id: 108,
      name: "Night Table",
      price: 16000,
      image: "assets/nighttable.jpg",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is also pretty cool",
      type: "bedroom"
    },
    {
      id: 109,
      name: "Pillow",
      price: 24000,
      image: "assets/pilow.jpg",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is also pretty cool",
      type: "bedroom"
    },
    {
      id: 109,
      name: "Study Table",
      price: 87000,
      image: "assets/radniSto.jpg",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is also pretty cool",
      type: "livingroom"
    },
    {
      id: 109,
      name: "Table and Chair",
      price: 29000,
      image: "assets/stolica_sto.jpg",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is also pretty cool",
      type: "kitchen"
    },
    {
      id: 110,
      name: "Seat of the King",
      price: 2000,
      image: "assets/bowl.jpg",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is also pretty cool",
      type: "bathroom"
    }
  ];

  constructor() {}

  public getObjects() {
    return this.objects;
  }
}
