/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addFood } from './FoodSlice';
import { useNavigate } from 'react-router-dom';
import { Box, Button, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react';

function AddFood() {
    // const [title, setTitle] = useState('');
    // const [chefe, setChefe] = useState('');
    const [book, setBook] = useState({ title: '', chefe: '' })
    console.log(book)

    const numberOfFoods = useSelector(state => state.foodReducer.foods.length)
    const dispatch = useDispatch();



    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const title = book.title;
        const chefe = book.chefe;
        const food = { id: numberOfFoods + 1, title, chefe }
        dispatch(addFood(food))
        navigate('/displayfoods', { replace: true })
    }
    return (
        <Box maxW="1000px" mx="auto" my={10} p={10} border="2px" borderColor="lightsalmon" borderRadius="lg">
            <Heading textAlign="center" my={8} fontSize="44px">
                Add Food
            </Heading>
            <Box>

                <form onSubmit={handleSubmit} action="">
                    <FormControl my={5} isRequired>
                        <FormLabel>Add Food Name</FormLabel>
                        <Input id="title" placeholder='enter a Food Name' value={book.title} onChange={(e) => setBook({ ...book, title: e.target.value })} />
                    </FormControl>


                    <FormControl isRequired>
                        <FormLabel>Add Chefe Name</FormLabel>
                        <Input id="chefe" placeholder='enter a food name' value={book.chefe} onChange={(e) => setBook({ ...book, chefe: e.target.value })} />
                    </FormControl>

                    <Button color="cornflowerblue" bg="none" outlineColor="cyan" type='submit' my={5}>Add Food</Button>
                </form>





                {/* <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title"></label>
                        <input type="text" name="title" id="title" placeholder='enter a food name' value={book.title} onChange={(e) => setBook({ ...book, title: e.target.value })} required />
                    </div>
                    <div>
                        <label htmlFor="chefe"></label>
                        <input type="text" name="chefe" id="chefe" placeholder='enter a food name' value={book.chefe} onChange={(e) => setBook({ ...book, chefe: e.target.value })} required />
                    </div>
                    <button type='submit'>Add Food</button>
                </form> */}
            </Box>
        </Box>
    )
}

export default AddFood
