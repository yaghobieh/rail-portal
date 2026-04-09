import { FC, useState, useEffect } from 'react';
import { NUMBER_ZERO, TYPING_SPEED_MS, TYPING_DELETE_SPEED_MS, TYPING_PAUSE_MS } from '@/constants';

interface TypingTextProps {
  texts: string[];
}

export const TypingText: FC<TypingTextProps> = ({ texts }) => {
  const [textIndex, setTextIndex] = useState(NUMBER_ZERO);
  const [charIndex, setCharIndex] = useState(NUMBER_ZERO);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    const speed = isDeleting ? TYPING_DELETE_SPEED_MS : TYPING_SPEED_MS;

    if (!isDeleting && charIndex === currentText.length) {
      const timeout = setTimeout(() => setIsDeleting(true), TYPING_PAUSE_MS);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && charIndex === NUMBER_ZERO) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts]);

  return (
    <span className="typing-cursor">
      {texts[textIndex].slice(NUMBER_ZERO, charIndex)}
    </span>
  );
};
