export const Isvalid = (Email,password)=>{
    const checkEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(Email)
    const checkpassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    if(!checkEmail) return "Invalid Email ID"
    if(!checkpassword) return "Invalid Password"
     
    return null
}