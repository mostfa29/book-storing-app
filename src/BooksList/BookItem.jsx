import {
    Flex,
    Text,
    Button,
    Link as StyledLink,
} from 'rebass/styled-components'
import { Link } from 'react-router-dom'
import { useMutation, useQueryClient } from 'react-query'
import {removeBook} from '../apis/api'
import { ThreeDots } from 'react-loader-spinner'
import { CustomLoader } from '../shared/CustomLoader'


export const BookItem = ({ author, title, id }) => {
    
    const { mutateAsync, isLoading } = useMutation(removeBook)
    
    const queryClient = useQueryClient()
    const remove = async () => {
        await mutateAsync(id)
        queryClient.invalidateQueries('books')
    }
    
    return (

        <Flex p={3} width={'100%'} alignItems='center' justifyContent={'space-between'}>
            <Link component={StyledLink} to={`/update-book/${id}`} mr="auto" style={{color:'black'}}>
            {title}
            </Link>
            <Text>{author} </Text>
            <Button onClick={remove}>
                <CustomLoader isLoading={isLoading} text='Remove'/>
            </Button>
        </Flex>
    )
}