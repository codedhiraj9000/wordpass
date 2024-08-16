const rand = (x)=>{
  const num = Math.floor((Math.random()*100)%x.length)
  return num
}

const randPassword = (length)=>{
  if(length == undefined){
    console.info("please put the length")
  }else if (length < 3){
    console.error("length should be grater then 3")
  }
  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGJIJKLMNOPQRSTUVWXYZ1234567890"
  
  let pass = ""
  for(let i = 0; i < length; i++){
    const index = rand(letters)
    pass = pass + letters[index]
  }
  return pass
}
const randCapsPassword = (length)=>{
  if(length == undefined){
    console.info("please put the length")
  }else if (length < 3){
    console.error("length should be grater then 3")
  }
  const letters = "ABCDEFGJIJKLMNOPQRSTUVWXYZ"
  
  let pass = ""
  for(let i = 0; i < length; i++){
    const index = rand(letters)
    pass = pass + letters[index]
  }
  return pass
}

const randSmallLtrPassword = (length)=>{
  if(length == undefined){
    console.info("please put the length")
  }else if (length < 3){
    console.error("length should be grater then 3")
  }
  const letters = "abcdefghijklmnopqrstuvwxyz"
  
  let pass = ""
  for(let i = 0; i < length; i++){
    const index = rand(letters)
    pass = pass + letters[index]
  }
  return pass
}

const randNumPassword = (length)=>{
  if(length == undefined){
    console.info("please put the length")
  }else if (length < 3){
    console.error("length should be grater then 3")
  }
  const letters = "1234567890"
  
  let pass = ""
  for(let i = 0; i < length; i++){
    const index = rand(letters)
    pass = pass + letters[index]
  }
  return pass
}

const randCapsNumPassword = (length)=>{
  if(length == undefined){
    console.info("please put the length")
  }else if (length < 3){
    console.error("length should be grater then 3")
  }
  const letters = "ABCDEFGJIJKLMNOPQRSTUVWXYZ1234567890"
  
  let pass = ""
  for(let i = 0; i < length; i++){
    const index = rand(letters)
    pass = pass + letters[index]
  }
  return pass
}

const randSmallNumPassword = (length)=>{
  if(length == undefined){
    console.info("please put the length")
  }else if (length < 3){
    console.error("length should be grater then 3")
  }
  const letters = "abcdefghijklmnopqrstuvwxyz1234567890"
  
  let pass = ""
  for(let i = 0; i < length; i++){
    const index = rand(letters)
    pass = pass + letters[index]
  }
  return pass
}

const randCapsSmallPassword = (length)=>{
  if(length == undefined){
    console.info("please put the length")
  }else if (length < 3){
    console.error("length should be grater then 3")
  }
  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGJIJKLMNOPQRSTUVWXYZ"
  
  let pass = ""
  for(let i = 0; i < length; i++){
    const index = rand(letters)
    pass = pass + letters[index]
  }
  return pass
}

const wordPass = ()=>{
    //data section
    const names = [ "Roy", "Dhiraj", "Subrodip", "Shibom", "Aarav", "Vivaan", "Aditya", "Vihaan", "Arjun", "Sai", "Krishna", "Shiv", "Rudra", "Yuvraj", "Ananya", "Aadhya", "Diya", "Ishita", "Mira", "Reva", "Saanvi", "Anika", "Tanvi", "Meera", "Nisha", "Kavya", "Riya", "Anjali", "Pooja", "Amit", "Rohit", "Sahil", "Karan", "Rahul", "Rakesh", "Suresh", "Vikram", "Rajesh", "Siddharth", "Priya", "Megha", "Sneha", "Tanya", "Monika", "Aditi", "Shreya", "Nandini", "Radhika", "Varun", "Neha", "Isha", "Kritika", "Lakshmi", "Rohini", "John", "Michael", "David", "James", "Robert", "William", "Joseph", "Richard", "Charles", "Thomas", "Emma", "Olivia", "Sophia", "Isabella", "Ava", "Mia", "Emily", "Madison", "Charlotte", "Amelia", "Alexander", "Daniel", "Matthew", "Andrew", "Joshua", "Christopher", "Ethan", "Jacob", "Benjamin", "Samuel", "Jennifer", "Jessica", "Sarah", "Ashley", "Amanda", "Elizabeth", "Megan", "Hannah", "Lauren", "Victoria", "Brian", "Kevin", "Steven", "Anthony", "Mark", "Lisa", "Kimberly", "Sandra", "Donna", "Barbara", "Puja", "Taniya"];


  // Array of 50 Indian names


  // Array of 100 general skills
  const skills = [
      "coding", "drawing", "singing", "dancing", "cooking", "writing", "photography", "gardening", "painting", "public speaking", "data analysis", "project management", "leadership", "teamwork", "communication", "problem-solving", "time management", "critical thinking", "creativity", "negotiation", "foreign languages", "customer service", "networking", "sales", "marketing", "graphic design", "web development", "app development", "SEO", "content creation", "social media management", "video editing", "animation", "cybersecurity", "machine learning", "artificial intelligence", "robotics", "cloud computing", "blockchain", "UI/UX design", "product management", "financial management", "accounting", "human resources", "teaching", "event planning", "tourism", "counseling", "coaching", "journalism",    "copywriting", "editing", "translating", "research", "mathematics", "statistics", "biology", "chemistry", "physics", "astronomy", "history", "geography", "psychology", "sociology", "philosophy", "legal research", "mediation", "meditation", "yoga", "mindfulness", "public relations", "crisis management", "logistics", "supply chain management", "customer relationship management", "software engineering", "hardware engineering", "network administration", "database management", "system administration", "ethical hacking", "technical writing", "data entry", "virtual assistance", "e-commerce", "shop management", "inventory management", "quality control", "production planning", "safety management", "healthcare management", "pharmaceuticals", "nursing", "paramedics", "emergency response", "first aid", "CPR", "disaster management", "environmental science", "renewable energy"
  ];

  // Array of common years of birth from 1920 to 2014
  const yearsOfBirth = [];
  for (let year = 1920; year <= 2014; year++) {
      yearsOfBirth.push(year);
  }
  
  const arr = ["name", "skill", "year"]

  let year = yearsOfBirth[rand(yearsOfBirth)];
  let name = names[rand(names)];
  let skill = skills[rand(skills)];
  
  const pass = `@${skill}.${name}(${year})`
  return pass
}

const passwordGenerator = {
  wordPass: wordPass,
  randCapsSmallPassword: randCapsSmallPassword,
  randSmallNumPassword: randSmallNumPassword,
  randCapsNumPassword: randCapsNumPassword,
  randNumPassword: randNumPassword,
  randSmallLtrPassword: randSmallLtrPassword,
  randCapsPassword: randCapsPassword,
  randPassword: randPassword
}

export default passwordGenerator;