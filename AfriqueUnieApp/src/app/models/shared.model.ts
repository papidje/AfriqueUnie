export class Adress {

  constructor(public reference: string, public latitude: number, public longitude: number) {}
}
export interface MenuItem {
  id: number;
  label: string;
  url: string;
  image: string;
}
