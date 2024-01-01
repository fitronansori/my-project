import { Schema, model } from "mongoose";

export type UserType = {
    _id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

const userSchema = new Schema<UserType>({  
    firstName: {
        type: String,
        required: true
    },
    
    lastName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },
}, { timestamps: true });

const User = model<UserType>("User", userSchema);

export default User;