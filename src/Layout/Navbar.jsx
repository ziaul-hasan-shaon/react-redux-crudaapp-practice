/* eslint-disable no-unused-vars */
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Container } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <Container maxW="4xl" p={4} my={8} border="2px" borderColor='gray' borderRadius="lg">
            <Breadcrumb spacing='8px' display="flex" justifyContent="center" separator={<ChevronRightIcon color='gray.500'/>}>
                <BreadcrumbItem fontSize={20}>
                    <BreadcrumbLink href='#'>
                        <Link to="/">Home</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem fontSize={20}>
                    <BreadcrumbLink href='#'>
                        <Link to="/addfoods">Add Food</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem fontSize={20} isCurrentPage>
                    <BreadcrumbLink href='#'>
                        <Link to="/displayfoods">Display Food</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
        </Container>
        // <nav>
        //     <Link to="/">Home</Link>
        //     <Link to="/addfoods">Add Food</Link>
        //     <Link to="/displayfoods">Display Food</Link>
        // </nav>
    )
}

export default Navbar
