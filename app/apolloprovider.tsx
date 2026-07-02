"use client"

import { ApolloClient, HttpLink, InMemoryCache} from '@apollo/client'
import { ApolloProvider } from '@apollo/client/react'

const httplink=new HttpLink({
    uri:"http://localhost:4000/graphql",
})

 const client=new ApolloClient({
   link:httplink,
    cache:new InMemoryCache
})

export function Apollowrapper({children}:{children:React.ReactNode}){
return(
    <ApolloProvider client={client}>{children}</ApolloProvider>
)
}