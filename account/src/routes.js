import { Router } from 'express';
import { createUserUseCase } from "../src/use-case/createUserAccount.js";
import bcrypt from 'bcryptjs';
const router = Router();

function encodePass(password) {
    const saltRounds = 10;
    const hash = bcrypt.hashSync(password, saltRounds);
    return hash;
}

router.get('/', (request, response) => {
    res.send('Accounts')
});

router.post('/accounts', function (request, response) {

    const { name, email, password } = request.body

    const pass = encodePass(password)
   
    createUserUseCase(name, email, pass)
        .then((data) => {
            console.log(data)
            let user = {
                name: data.name,
                email: data.email,
                date: data.createdDate
            }

            request.status(201).json(user);
        })
        .catch((error) => {
            response.status(400).json({ status: 'Error creating user!', message: error.message });
        })
});