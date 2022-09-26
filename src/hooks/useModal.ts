import { useState } from "react";

export const useModal = (): { isOpen: boolean; toggle: () => void } => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = (): void => setIsOpen(!isOpen);

  return { isOpen, toggle };
};
