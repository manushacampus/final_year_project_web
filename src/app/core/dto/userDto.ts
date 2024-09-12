export class UserDto{
  constructor(id: string, firstName: string, lastName: string, address: string, email: string, password: string, gender: string, nic: string, dob: string, registeredDate: string, image: string, contact: string, userRole: string, designation: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.email = email;
    this.password = password;
    this.gender = gender;
    this.nic = nic;
    this.dob = dob;
    this.registeredDate = registeredDate;
    this.image = image;
    this.contact = contact;
    this.userRole = userRole;
    this.designation = designation;
  }
    id:string;
     firstName:string;
     lastName:string;
     address:string;
    email:string;
    password:string;
    gender:string;
    nic:string;
    dob:string;
   registeredDate:string;
     image:string;
    contact:string;
    userRole:string;
     designation:string;
}
