import {
  Modal,
  ModalOverlay,
  ModalContent,
  Text,
  Heading,
  Flex,
} from "@chakra-ui/react";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

function ModalCard() {
  const context = useContext(GlobalContext);

  const { isOpen, setIsOpen, flow, setFlow } = context;

  return (
    <>
      <Modal isCentered isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
        <ModalContent>
          <Flex
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            h={"220px"}
            w={"450px"}
          >
            {flow === 1 ? (
              <>
                <Text>O Pokémon foi adicionado</Text>
              </>
            ) : (
              <>
                <Text>O Pokémon foi removido</Text>
              </>
            )}
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalCard;
