import UserModel from "@/server/models/user";
import { User } from "@/types";

export default {

    list: async () => {
        const users = await UserModel.findAll();
        return users;
    },

    create: async (newUser: User) => {
        const userCreated = await UserModel.create({
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            age: newUser.age,
            gender: newUser.gender,
            pokemon: newUser.pokemon
        });
        return userCreated.id;
    }

};