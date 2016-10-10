var Human = {
 constructor: function(name, age, gender, height, weight) {
		this.name = name;
		this.age = age; 
		this.gender = gender; 
		this.height= height; 
		this.weight = weight;
		return this;
	}

};

var  Worker = Object.create(Human);
Worker.constructor = function(name, age, gender, height, weight, placeOfWork, salary) {
	Human.constructor.apply(this, arguments);
	this.placeOfWork = placeOfWork;
	this.salary = salary;
	return this;
};
Worker.work = function() {
		console.log("=========РАБОТАТЬ " + this.placeOfWork + " и получать зарплату " + this.salary + "$");
	};


var Student = Object.create(Human);
Student.constructor = function(name, age, gender, height, weight, placeOfStudy, stipend) {
	Human.constructor.apply(this, arguments);
	this.placeOfStudy = placeOfStudy;
	this.stipend = stipend;
	return this;
};
Student.watchSerials = function() {
		console.log("==========смотреть СЕРИАЛЫ о " + this.placeOfStudy + " и мечтать о стипендии " + this.stipend + "$");
	};



var worker = Object.create(Worker).constructor("Sergey", 37, "male", 180, 110,"Home", 2000);


console.log(worker);

console.log('Name: ', worker.name);
console.log('Age: ', worker.age);
console.log('Height: ', worker.height);
worker.work();




var student = Object.create(Student).constructor("Juliya", 36, "female", 172, 70,"University", 1000);

console.log(student);

console.log('Name: ',student.name);
console.log('Gender: ',student.gender);
console.log('Weight: ',student.weight);
student.watchSerials();