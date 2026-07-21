// Keyboard shortcuts configuration
export const keyboardShortcuts = {
  search: { key: '/', description: 'Open search' },
  theme: { key: 'Shift + D', description: 'Toggle dark mode' },
  home: { key: 'H', description: 'Go to home' },
  help: { key: '?', description: 'Show shortcuts' },
};

export function useKeyboardShortcuts() {
  const handleKeyPress = (e: KeyboardEvent) => {
    const isInput = e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement;
    
    if (!isInput) {
      if (e.key === '/') {
        e.preventDefault();
        // Trigger search
      }
      if (e.shiftKey && e.key.toLowerCase() === 'd') {
        e.preventDefault();
        // Toggle theme
      }
    }
  };

  return { handleKeyPress };
}
