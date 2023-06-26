import {
    Button,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
    Input, InputGroup, InputRightElement
} from '@chakra-ui/react'
import { FiSearch,FiMenu } from 'react-icons/fi';

function SideNav() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <div id='side-nav'>
                <Button id='bt-nav' onClick={onOpen} ml-auto><FiMenu/></Button>
                <Drawer placement='right' onClose={onClose} isOpen={isOpen}  >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerHeader bg="gray.900" color={"white"} borderBottomWidth='1px'><InputGroup size='md'>
                            <Input color={'white'} placeholder='Pesquisar ...' />
                            <InputRightElement width='4.5rem'>
                                <Button colorScheme='green' variant='outline'>
                                    <FiSearch />
                                </Button>
                            </InputRightElement>
                        </InputGroup></DrawerHeader>
                        <DrawerBody bg="gray.800" color={"white"}>
                            <p>All Games</p>
                            <p>Shooter</p>
                            <p>RPG</p>
                            <p>Fighting</p>
                            <p>Battle Royale</p>
                            <p>MOBA</p>
                            <p>Strategy</p>
                            <p>Social</p>
                            <p>Sports</p>
                            <p>Card Game</p>
                            <p>Fantasy</p>

                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </div>

        </>
    )
}

export default SideNav;