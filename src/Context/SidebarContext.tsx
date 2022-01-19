import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { createContext, useContext } from "react";

type Props = UseDisclosureReturn;

const SidebarContext = createContext({} as UseDisclosureReturn);

const SidebarProvider: React.FC = ({ children }) => {
  const disclosure = useDisclosure();

  return (
    <SidebarContext.Provider value={disclosure}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;

export const useSidebar = () => useContext(SidebarContext);
