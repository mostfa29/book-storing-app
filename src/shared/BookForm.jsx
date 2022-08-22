import { Box, Button } from 'rebass/styled-components'
import { Label, Input } from '@rebass/forms'
import { useForm } from 'react-hook-form'
import { CustomLoader } from './CustomLoader'


export function BookForm  ({defaultValues,onFormSubmit,isLoading}) {
    const { register, handleSubmit } = useForm({ defaultValues })
 
    
    const onSubmit = handleSubmit((data) =>
    {
     onFormSubmit(data)
    })
 
    return (
        <form onSubmit={onSubmit}>
            <Box sx={{ marginBottom: 3 }}>
                <Label htmlFor="title">Title</Label>
                <Input {...register('title')} id="title" name='title' type='text' />
                
            </Box>
             
            <Box sx={{ marginBottom: 3 }}>
                <Label htmlFor="author">Author</Label>
                <Input {...register('author')} id="author" name='author' type='text' />
                
            </Box>
            <Button>
            <CustomLoader  text='Submit' isLoading={isLoading}/>
            </Button>
        </form>
    )
    
}