/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { updatFood } from './FoodSlice'
import { Box, Button, FormControl, FormHelperText, FormLabel, Heading, Input } from '@chakra-ui/react';

function EditFood() {

    const location = useLocation();
    console.log(location)

    const [id, setId] = useState(location.state.id)
    const [title, setTitle] = useState(location.state.title)
    const [chefe, setChefe] = useState(location.state.chefe)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleUpdate = (e) => {
        e.preventDefault()
        dispatch(updatFood({ id, title, chefe }))
        navigate('/displayfoods', { replace: true })
    }
    return (
        <Box maxW="1000px" mx="auto" my={10} p={10} border="2px" borderColor="lightsalmon" borderRadius="lg">
            <Heading textAlign="center" my={8} fontSize="44px">
                Edit Your Food
            </Heading>
            <form action="" onSubmit={handleUpdate}>
                <FormControl  my={5}>
                    <FormLabel>Food title</FormLabel>
                    <Input type='text' id="title" placeholder='enter a food name' value={title} onChange={(e) => setTitle(e.target.value)} />
                    <FormHelperText>You can change Food Title from here</FormHelperText>
                </FormControl>
                <FormControl  my={5}>
                    <FormLabel>Chefe Name</FormLabel>
                    <Input type='text' id="chefe" placeholder='enter a food name' value={chefe} onChange={(e) => setChefe(e.target.value)} />
                    <FormHelperText>You can change Chefe from here</FormHelperText>
                </FormControl>
                <Button type='submit' color="slategrey" bg="none" outlineColor="yellowgreen" my={5}>Update Food</Button>
            </form>
            {/* <div>
                <form onSubmit={handleUpdate}>
                    <div>
                        <label htmlFor="title"></label>
                        <input type="text" name="title" id="title" placeholder='enter a food name' value={title} onChange={(e) => setTitle(e.target.value)} required />
                    </div>
                    <div>
                        <label htmlFor="chefe"></label>
                        <input type="text" name="chefe" id="chefe" placeholder='enter a food name' value={chefe} onChange={(e) => setChefe(e.target.value)} required />
                    </div>
                    <button type='submit'>Update Food</button>
                </form>
            </div> */}
        </Box >
    )
}

export default EditFood
