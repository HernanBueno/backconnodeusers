import express from 'express'
import * as dotenv from 'dotenv'
import { createUser, deleteUserByID, getAllUsers, updateUsers } from '../controllers/userControllers.js';


dotenv.config();

const router = express.Router()
.post('/', createUser)
.get('/', getAllUsers)
.patch('/:id', updateUsers)
.delete('/:id', deleteUserByID)

export default router