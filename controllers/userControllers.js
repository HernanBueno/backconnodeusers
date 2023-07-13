import {UserSchema} from '../mongodb/models/userSchema.js'

//funcion para crear usuario
   export async function createUser(req, res){
        const {dniNumber, name, lastName, sex, phoneNumber} = req.body
        if(!dniNumber || !name || !lastName || !sex || !phoneNumber) return "Faltan completar datos"
        const newUser = new UserSchema(req.body)
        try {
            const saveUser = await newUser.save()
            res.status(200).json(saveUser)
        } catch (error) {
            res.status(401).json("Error al cargar el usuario")
        }
    }
    //funcion para obtener todos los usuarios en la bd
    export async function getAllUsers(_req, res){
        try {
             const users = await UserSchema.find()
             res.status(200).json(users)
        } catch (error) {
             res.status(500).json(error)
        }
   }
   //funcion para modificar usuario
   export async function updateUsers(req, res) {
    try {
         const updateUser = await UserSchema.findByIdAndUpdate(req.params.id, {
             $set: req.body
         }, {new:true});
         res.status(200).json(updateUser)
    } catch (error) {
         res.status(500).json(error)
    }
 }
 //elimina usuarios pasandole un id
 export async function deleteUserByID(req, res){
    try {
       await UserSchema.findByIdAndDelete(req.params.id)
       res.status(200).json("El usuario fue eliminado...")
    } catch (error) {
         res.status(500).json(error)
    }
}