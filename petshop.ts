

 interface Pet{
     type:string;
     color:string;
     breed:string;
     age:number;
 }
 
 class ConcretePet{
     type:string;
     color:string;
     breed:string;
     age:number;

     constructor(petData:Pet){
        this.type = petData.type;
        this.color = petData.color;
        this.breed = petData.breed;
        this.age = petData.age;
     }

 }

 class AvailablePets{
     
     adoptable = [];
    
     addingpet(pet: ConcretePet):void{
        this.adoptable.push(pet);
     }

     retrieveAvailablePets():ConcretePet[]{
        return this.adoptable;
     }

 }

 class RequestPets{
    petenquiries = [];

     storeEnquiries(pet){
        this.petenquiries.push(pet);
     }

 }

 let pet;
 let color;
 let breed;
 let age;
 let arr = [];

 let p = new AvailablePets()


 let addPet = ()=>{
  

   
    pet = (<HTMLInputElement>document.getElementById("addpet_input")).value;
    color = (<HTMLInputElement>document.getElementById("color_input")).value;
    breed = (<HTMLInputElement>document.getElementById("breed_input")).value;
    age = (<HTMLInputElement>document.getElementById("age_input")).value;
    if(pet.trim().length != 0)
     {
      p.addingpet(new ConcretePet({type:pet,color:color,breed:breed,age:age}));
     } 
    console.log('added pet')
    ClearFields();

    document.getElementsByTagName("input")[0].removeAttribute("type");
    document.getElementsByTagName("input")[1].removeAttribute("type");
    document.getElementsByTagName("input")[2].removeAttribute("type");
    document.getElementsByTagName("input")[3].removeAttribute("type");
 
 }

 let rp;

 let request = new RequestPets();

 

 let requestPets = ()=>
 {
        rp= (<HTMLInputElement>document.getElementById("request_input")).value;
        if(rp!=''){
         request.storeEnquiries(rp);
        }
        (<HTMLInputElement>document.getElementById('request_input')).value="";

        document.getElementsByTagName("input")[4].removeAttribute("type");


 }


 let showStatus = ()=>{

    document.getElementsByTagName("input")[0].setAttribute("type","hidden");
    document.getElementsByTagName("input")[1].setAttribute("type","hidden");
    document.getElementsByTagName("input")[2].setAttribute("type","hidden");
    document.getElementsByTagName("input")[3].setAttribute("type","hidden");
    document.getElementsByTagName("input")[4].setAttribute("type","hidden");


     let status = [] //array to store the status -available and unavailable pets 
     let enquiries = request.petenquiries;
     let availablepets = p.retrieveAvailablePets();
     console.log('enquiries')
    
    for(pet of enquiries){
        let requestedpets = availablepets.filter(function (e) {
            return e.type == pet;
        });

        // showAvailablePets(requestedpets);
        showAvailableStatus(requestedpets);
    }
    
    request.petenquiries = [];

 }

let quantity_title = document.createElement('h5');
quantity_title.classList.add('hidden');
quantity_title.innerText="Quantity";
document.body.append(quantity_title)


 let row_available = document.createElement('div');
 row_available.classList.add('container')
 document.body.append(row_available)

 function showAvailableStatus(requestedpets){

   if(requestedpets.length>0){
      quantity_title.removeAttribute('class');
      let row = document.createElement('div');
      row.classList.add('row','my-rw')
      row_available.append(row)
  
      let col_available = document.createElement('div')
      col_available.classList.add('col','my-col')
      col_available.innerText = requestedpets.length;
      row.append(col_available)
  
      let col_available1 = document.createElement('div')
      col_available1.classList.add('col','my-col')
      col_available1.innerText = requestedpets[0].type;
      row.append(col_available1)
   }
   

}
 function showAvailablePets(requestedpets){

    for(let ele in requestedpets ){
        let row_container = document.createElement('div');
        row_container.classList.add('row','my-rw');
        document.body.append(row_container)
        let type = document.createElement('div');
        let color = document.createElement('div');
        let breed = document.createElement('div');
        let age = document.createElement('div');
    
        type.classList.add('type','col','my-col');
        color.classList.add('color', 'col','my-col');
        breed.classList.add('breed','col','my-col');
        age.classList.add('age','col','my-col');
            type.innerText = requestedpets[ele].type
            color.innerText = requestedpets[ele].color
            breed.innerText = requestedpets[ele].breed
            age.innerText = requestedpets[ele].age.toString();
            row_container.append(type);
            row_container.append(color);
            row_container.append(breed);
            row_container.append(age);

    }


 }

 function ClearFields() {

   
    (<HTMLInputElement>document.getElementById("addpet_input")).value = "";
    (<HTMLInputElement>document.getElementById("color_input")).value = "";
    (<HTMLInputElement>document.getElementById("breed_input")).value = "";
    (<HTMLInputElement>document.getElementById("age_input")).value = "";


}


 
 


 


 
