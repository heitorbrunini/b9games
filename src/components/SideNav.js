import {
    Button,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    useDisclosure
} from '@chakra-ui/react'

function SideNav() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <div id='side-nav'>
                <Button id='bt-nav'  onClick={onOpen} ml-auto>Open Drawer</Button>
                <Drawer placement='right' onClose={onClose} isOpen={isOpen}  >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerHeader bg="gray.900" color={"white"} borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
                        <DrawerBody bg="gray.800" color={"white"}>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </div>

        </>
    )
}

export default SideNav;