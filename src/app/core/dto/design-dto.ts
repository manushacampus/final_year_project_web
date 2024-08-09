
export class DesignDto {
  code: string;
  id: string;
  image: string;
  name: string;
  status: string;
  type: string;
  constructor(code: string, id: string, image: string, name: string, status: string, type: string) {
    this.code = code;
    this.id = id;
    this.image = image;
    this.name = name;
    this.status = status;
    this.type = type;
  }

}
