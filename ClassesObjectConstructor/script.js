 let data="secret data";
class user
{
    constructor(name,email)
    {
       this.name=name;
       this.email=email;
    }
    viewdata()
    {
        console.log("data is-",data);
    }
} 
class admin extends user{
    constructor(name,email)
    {
    super(name,email);
    }
    editData()
    {
        data="new data";
    }
} 
let student1=new user("sujata","s1232gmail.com");
let student2= new user("priya","fdgd11@gmail.com");    
let teacher1=new user("suresh","sfdsd@gamil.com");        
let admin1=new admin("admin","admin@123gmail.com");