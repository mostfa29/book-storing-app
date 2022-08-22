import { useParams, useNavigate } from 'react-router-dom'
import { getBook } from '../apis/api'
import { useMutation, useQuery } from "react-query"
import { Container } from '../shared/Container'
import { Box, Flex, Heading } from 'rebass/styled-components'
import { ThreeDots } from 'react-loader-spinner'
import {BookForm} from '../shared/BookForm'


export const UpdateBook = () => {
    const  userId   = useParams ()
    const id=userId
    const history = useNavigate()
    const { data, error, isLoading, isError } = useQuery(['book', { id }], getBook)
       
    const {mutateAsync, isLoading:isMutating} = useMutation(UpdateBook)
    const onFormSubmit = async (data) => {
        await mutateAsync({ ...data, id })
        history('/')
        
    }
    if (isLoading) {
        return(
        <Container>
        <Flex py="5" justifyContent={'center'}>
           <ThreeDots type="ThreeDots" color="#ccc" height={30}/>
        </Flex>
        </Container>
        )
    }
    
    if (isError) {
        return (
        <Container>
            <Flex py="5" justifyContent={'center'}>
                {error.message}
            </Flex>
            </Container>
        )

    }


    return (
        <Container>
            <Box sx={{ py: 3 }}>
                <Heading sx={{ marginBottom: 0 }}>
                 Update Book
                </Heading>
                <BookForm defaultValues={data} onFormSubmit={onFormSubmit} isLoading={isMutating} />
            </Box>
        </Container>
    ) 
}