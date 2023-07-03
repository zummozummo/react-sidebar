import { useCallback, useEffect } from 'react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';

function debounce(fn,delay){
    let timeoutID;
    return function (...args) {
      clearTimeout(timeoutID);
      timeoutID = window.setTimeout(() => fn.apply(this, args), delay);
    } 
  }

export function LocalStoragePlugin({ namespace }) {
  const [editor] = useLexicalComposerContext();

  const saveContent = useCallback(
    (content) => {
      localStorage.setItem(namespace, content);
    },
    [namespace]
  );

  const debouncedSaveContent = debounce(saveContent, 500);

  useEffect(() => {
    return editor.registerUpdateListener(
      ({ editorState, dirtyElements, dirtyLeaves }) => {
        // Don't update if nothing changed
        if (dirtyElements.size === 0 && dirtyLeaves.size === 0) return;

        const serializedState = JSON.stringify(editorState);
        debouncedSaveContent(serializedState);
      }
    );
  }, [debouncedSaveContent, editor]);

  return null;
}

export default LocalStoragePlugin