const course_name = 'Voice app development';
let duration = "90 days";
let price = 12000;
const mentor = "Anusaya Darade";
let course = { course_name, duration, price, mentor }; 

console.log(course);

// WE CAN CREATE OBJECT BY USING 'new object()' METHOD
let friend = new Object(); 
friend.name = "Shriniwas";
friend.city = "Beed";
friend['mobile_no'] = 9359068276;

console.log(friend);

// CREATING Object USING FUNCTION CONSTRUCTOR
function student(roll_no, name, skillset) {
        this.roll_no = roll_no;
        this.name = name ;
        this.skillset = skillset;

        console.log(`This is student ${this.name} his Roll No. ${this.roll_no} and he is ${this.skillset}.`);  

}

const student01 = student(27, "Avdhut", "Python developer");
const student02 = student(28, "Dattatraya", "Python developer");


// CREATING Object USING CLASSES
class be_comps{
        constructor(roll_no, name, skillset) {
                this.roll_no = roll_no;
                this.name = name ;
                this.skillset = skillset;  
        
        }
        display() {
                console.log(`This is student ${this.name} his Roll No. ${this.roll_no} and he is ${this.skillset}.`);
        }

}
const student03 = new be_comps(29, "Shivam", "Java developer");
const student04 = new be_comps(30, "Sakhu", "Java developer");

console.log(student03);

for(let prop in student04) {
        console.log(prop + ":"+student04[prop]);
}