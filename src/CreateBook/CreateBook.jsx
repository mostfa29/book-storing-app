import { useMutation } from "react-query"
import { Box, Flex, Heading,Button } from "rebass/styled-components"
import { addBook } from "../apis/api"
import { BookForm } from "../shared/BookForm"
import { Container } from "../shared/Container"
import {  useNavigate } from 'react-router-dom'
import { ThreeDots } from "react-loader-spinner"
import { useForm } from 'react-hook-form'
import { Label, Input } from '@rebass/forms'
import { CustomLoader } from "../shared/CustomLoader"



export const CreateBook = () => {
    const history = useNavigate()
    const {mutateAsync, isLoading} = useMutation(addBook)
        const { register, handleSubmit } = useForm()

    const onFormSubmit = async (data) => {
        console.log(data)
        await mutateAsync(data)
        history('/')
    }

      
    const onSubmit = handleSubmit((data) =>
    {
     console.log(data)
     onFormSubmit(data)
    })


   return (
        <Container>
            <Box sx={{py:3}}>
                <Heading sx={{marginBottom:3}}> Create New Book</Heading>
               
            
               <form onSubmit={onSubmit}>
            <Box sx={{ marginBottom: 3 }}>
                <Label htmlFor="title">Title</Label>
                <Input  {...register('title')} id="title" name='title' type='text' />
                
            </Box>
             
            <Box sx={{ marginBottom: 3 }}>
                <Label htmlFor="author">Author</Label>
                <Input {...register('author')} id="author" name='author' type='text' />
                
            </Box>
            <Button type="submit">
            <CustomLoader text='Submit' isLoading={isLoading}/>
            </Button>
               </form>
               
            </Box>
        </Container>
)
}