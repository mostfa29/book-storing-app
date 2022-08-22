import { useQuery } from "react-query"
import { Flex } from "rebass/styled-components"
import { getAllBooks } from '../apis/api'
import { Container } from "../shared/Container"
import { ThreeDots } from 'react-loader-spinner'
import { BookItem } from "./BookItem"

export function BooksList(){
    const { data, error, isLoading, isError } = useQuery('books', getAllBooks)
    
    if (isLoading) {
        return(
        <Container>
        <Flex py="5" justifyContent={'center'}>
           <ThreeDots type="ThreeDots" color="#ccc" height={30}/>
        </Flex>
        </Container>
    )}
    if (isError) {
        return (<span>ERROR: {error.message} </span>  ) 
    }

    return (
        <Container>
            <Flex flexDirection={'column'} alignItems='center'>
                {
                    data.map(({ author, title, id })=>
                       <BookItem id={id} key={id} author={author} title={title}></BookItem>
                    )
                }
            </Flex>
        </Container>
            
    )

}

