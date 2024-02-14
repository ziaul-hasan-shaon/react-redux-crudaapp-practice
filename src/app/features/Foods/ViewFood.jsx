/* eslint-disable no-unused-vars */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFood } from './FoodSlice'
import { Link } from 'react-router-dom'
import { Box, Button, Heading, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'


function ViewFood() {
    const foods = useSelector(state => state.foodReducer.foods)
    console.log(foods)

    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteFood(id))
    }
    return (
        <Box maxW="1200px" mx="auto" my={10} p={10} border="2px" borderColor="lightgoldenrodyellow" borderRadius="lg">
            <Heading textAlign="center" my={10}>
                Display Food List
            </Heading>
            <TableContainer >
                <Table my={10} p={10} border="2px" borderColor="lightsalmon" borderRadius="xl" variant='striped'>
                    <TableCaption>Imperial to metric conversion factors</TableCaption>
                    <Thead>
                        <Tr>
                            <Th fontSize={16}>SL</Th>
                            <Th fontSize={16}>Food Name</Th>
                            <Th fontSize={16}>Chefe Name</Th>
                            <Th fontSize={16}>Edit Option</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {foods.map(food => {
                            const { id, title, chefe } = food;
                            return <Tr key={id}>
                                <Td fontSize="18px">{id}</Td>
                                <Td fontSize="18px">{title}</Td>
                                <Td fontSize="18px">{chefe}</Td>
                                <Td fontSize="18px">
                                    <Link to='/editfoods' state={{ id, title, chefe }}>
                                        <Button mx="5px" bg="yellowgreen">Edit</Button>
                                    </Link>
                                    <Button mx="5px" bg="red" onClick={() => handleDelete(id)}>Delete</Button>
                                </Td>
                            </Tr>
                        })}
                    </Tbody>
                </Table>
            </TableContainer>
            {/* <table>
                <thead>
                    <tr>
                        <th>Sl</th>
                        <th>Food Name</th>
                        <th>Chefe Name</th>
                        <th>Edit Option</th>
                    </tr>
                </thead>
                <tbody>
                    {foods.map(food => {
                        const { id, title, chefe } = food;
                        return <tr key={id}>
                            <td>{id}</td>
                            <td>{title}</td>
                            <td>{chefe}</td>
                            <td>
                                <Link to='/editfoods' state = {{id, title, chefe}}>
                                    <button>Edit</button>
                                </Link>
                                <button onClick={() => handleDelete(id)}>Delete</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table> */}
        </Box>
    )
}

export default ViewFood
