import { Flex, Box, Link as StyledLink, Image } from 'rebass/styled-components'
import { Link } from 'react-router-dom'
import { Container } from './Container'

function NavBar() {
  return (
      <Flex bg="black" color='wjite' justifyContent={'center'}>
        <Container>
          <Flex px='2' width={'100%'} alignItems='center'>
              <Link component={StyledLink} variant="nav" to='/'>
               React Query Crud
              </Link>

              <Box mx='auto' />
              <Link component={StyledLink} variant='nav' to='/create-book'>
               +Add new book
              </Link>
              </Flex>
        </Container>
      </Flex>
  )
}

export default NavBar