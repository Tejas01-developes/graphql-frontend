import { gql } from "@apollo/client";

export const LOGIN=gql`
mutation Login($name:String,$email:String,$password:String){
adduser1(name:$name,email:$email,password:$password){
    success
    message
}
}
`