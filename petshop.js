var ConcretePet = /** @class */ (function () {
    function ConcretePet(petData) {
        this.type = petData.type;
        this.color = petData.color;
        this.breed = petData.breed;
        this.age = petData.age;
    }
    return ConcretePet;
}());
var AvailablePets = /** @class */ (function () {
    function AvailablePets() {
        this.adoptable = [];
    }
    AvailablePets.prototype.addingpet = function (pet) {
        this.adoptable.push(pet);
    };
    AvailablePets.prototype.retrieveAvailablePets = function () {
        return this.adoptable;
    };
    return AvailablePets;
}());
var RequestPets = /** @class */ (function () {
    function RequestPets() {
        this.petenquiries = [];
    }
    RequestPets.prototype.storeEnquiries = function (pet) {
        this.petenquiries.push(pet);
    };
    return RequestPets;
}());
var pet;
var color;
var breed;
var age;
var arr = [];
var p = new AvailablePets();
var addPet = function () {
    pet = document.getElementById("addpet_input").value;
    color = document.getElementById("color_input").value;
    breed = document.getElementById("breed_input").value;
    age = document.getElementById("age_input").value;
    p.addingpet(new ConcretePet({ type: pet, color: color, breed: breed, age: age }));
    arr = p.retrieveAvailablePets();
    console.log('added pet');
    ClearFields();
    document.getElementsByTagName("input")[0].removeAttribute("type");
    document.getElementsByTagName("input")[1].removeAttribute("type");
    document.getElementsByTagName("input")[2].removeAttribute("type");
    document.getElementsByTagName("input")[3].removeAttribute("type");
};
var rp;
var request = new RequestPets();
var requestPets = function () {
    rp = document.getElementById("request_input").value;
    request.storeEnquiries(rp);
    document.getElementById('request_input').value = "";
    document.getElementsByTagName("input")[4].removeAttribute("type");
};
var showStatus = function () {
    document.getElementsByTagName("input")[0].setAttribute("type", "hidden");
    document.getElementsByTagName("input")[1].setAttribute("type", "hidden");
    document.getElementsByTagName("input")[2].setAttribute("type", "hidden");
    document.getElementsByTagName("input")[3].setAttribute("type", "hidden");
    document.getElementsByTagName("input")[4].setAttribute("type", "hidden");
    var status = []; //array to store the status -available and unavailable pets 
    var enquiries = request.petenquiries;
    var availablepets = p.retrieveAvailablePets();
    console.log('enquiries');
    for (var _i = 0, enquiries_1 = enquiries; _i < enquiries_1.length; _i++) {
        pet = enquiries_1[_i];
        var requestedpets = availablepets.filter(function (e) {
            return e.type == pet;
        });
        // showAvailablePets(requestedpets);
        showAvailableStatus(requestedpets);
    }
};
var quantity_title = document.createElement('h5');
quantity_title.classList.add('hidden');
quantity_title.innerText = "Quantity";
document.body.append(quantity_title);
var row_available = document.createElement('div');
row_available.classList.add('container');
document.body.append(row_available);
function showAvailableStatus(requestedpets) {
    quantity_title.removeAttribute('class');
    var row = document.createElement('div');
    row.classList.add('row', 'my-rw');
    row_available.append(row);
    var col_available = document.createElement('div');
    col_available.classList.add('col', 'my-col');
    col_available.innerText = requestedpets.length;
    row.append(col_available);
    var col_available1 = document.createElement('div');
    col_available1.classList.add('col', 'my-col');
    col_available1.innerText = requestedpets[0].type;
    row.append(col_available1);
}
function showAvailablePets(requestedpets) {
    for (var ele in requestedpets) {
        var row_container = document.createElement('div');
        row_container.classList.add('row', 'my-rw');
        document.body.append(row_container);
        var type = document.createElement('div');
        var color_1 = document.createElement('div');
        var breed_1 = document.createElement('div');
        var age_1 = document.createElement('div');
        type.classList.add('type', 'col', 'my-col');
        color_1.classList.add('color', 'col', 'my-col');
        breed_1.classList.add('breed', 'col', 'my-col');
        age_1.classList.add('age', 'col', 'my-col');
        type.innerText = requestedpets[ele].type;
        color_1.innerText = requestedpets[ele].color;
        breed_1.innerText = requestedpets[ele].breed;
        age_1.innerText = requestedpets[ele].age.toString();
        row_container.append(type);
        row_container.append(color_1);
        row_container.append(breed_1);
        row_container.append(age_1);
    }
}
function ClearFields() {
    document.getElementById("addpet_input").value = "";
    document.getElementById("color_input").value = "";
    document.getElementById("breed_input").value = "";
    document.getElementById("age_input").value = "";
}
