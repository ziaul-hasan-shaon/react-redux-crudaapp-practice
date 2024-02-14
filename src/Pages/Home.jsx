/* eslint-disable no-unused-vars */
import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

function Home() {
    return (
        <Box textAlign="center" maxW="1000px" mx="auto" p={10} my={10} border="2px" borderColor="lightcoral" borderRadius="lg">
            <Heading my={5}>CRUD app with react-redux</Heading>
            <Text fontSize={20} fontWeight={500}>
                Click on the Vite and React logos to learn more
            </Text>
            <Text fontSize={16} fontWeight={400} my={5}>
                This app is about adding foods to the food list delete foods form list and update foods from list
            </Text>
        </Box>
    )
}

export default Home
