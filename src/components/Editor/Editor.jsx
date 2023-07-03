import {$getRoot, $getSelection} from 'lexical';
import {useEffect} from 'react';

import {LexicalComposer} from '@lexical/react/LexicalComposer';
import {RichTextPlugin} from '@lexical/react/LexicalRichTextPlugin';
import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin';
import {OnChangePlugin} from '@lexical/react/LexicalOnChangePlugin';
import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import {HeadingNode, $createHeadingNode} from '@lexical/rich-text'
import { $createTextNode} from 'lexical'
import '../Editor/Editor.style.css';
import { useParams } from 'react-router-dom'
import LocalStoragePlugin from '../LocalStorage/LocalStorage';
import { CLEAR_HISTORY_COMMAND } from "lexical"
import { useSelector } from 'react-redux';
const theme = {
    heading:{
        h1: 'editor-heading-h1'
    }
}
function onError(error) {
  console.error(error);
}

function MyCustomePlugin(props){
    const [editor]= useLexicalComposerContext(); //get access to editor where the plugin is registred on 
    const {onChange, id} = props
    useEffect(()=>{
        return editor.registerUpdateListener((editorState)=>{
            onChange(editorState)
        },[id])
    },[editor, onChange])
    return null
}

function FormPlugins({ value, readOnly }) {
    const [editor] = useLexicalComposerContext()
  
    useEffect(() => {
      if (value && editor && readOnly) {
        const initialEditorState = editor.parseEditorState(value)
        editor.setEditorState(initialEditorState)
      }
    }, [value, editor, readOnly])
  
    return <></>
  }

function MyHeaderPlugin(){
    const sidebar = useSelector((state) => {
        console.log("#########",state)
      });
    const [editor]= useLexicalComposerContext();
    const onClick= ()=>{
        editor.update(()=>{
            const root =$getRoot();
            root.append($createHeadingNode('h1').append($createTextNode("Hello")))
        });
    }
    return <button onClick={onClick}>Heading</button>
}

function Editor() {
    const {id} = useParams()
    const EMPTY_CONTENT =
  '{"root":{"children":[{"children":[],"direction":null,"format":"","indent":0,"type":"paragraph","version":1}],"direction":null,"format":"","indent":0,"type":"root","version":1}}';
    let currentEditorData=localStorage.getItem(id) || EMPTY_CONTENT
    
    const onChange =(editorState)=>{
        editorState.read(()=>{
            const root = $getRoot();
            const selected =$getSelection()
            console.log(root,selected)
        })
    }
    
    const initialConfig = {
        namespace: id, 
        nodes: [HeadingNode],
        onError,
        theme,
        editorState: currentEditorData,
    };
    console.log(initialConfig)
    // useEffect(()=>{
    //     // const [editor] = useLexicalComposerContext();
    //     // let data = editor.$getRoot()
    //     // console.log(data)
    //     //featch data and setState for this component
    //     console.log('rerendred', id )
    // },[id])

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <MyHeaderPlugin/>
      <RichTextPlugin
        contentEditable={<ContentEditable className='contentEditable'/>}
        placeholder={<div>Enter some text...</div>}
        ErrorBoundary={LexicalErrorBoundary}
      />
      <HistoryPlugin/>
      <LocalStoragePlugin namespace={id}/>
      <MyCustomePlugin onChange={(editorState)=>{console.log(editorState)}} id={id}/>
      <RefreshContentBasedOnActiveDoc initialEditorState={currentEditorData} id={id}/>
    </LexicalComposer>
  );
}
function RefreshContentBasedOnActiveDoc({initialEditorState,id}) {
    console.log(initialEditorState)
    const [editor] = useLexicalComposerContext()
    useEffect(() => {
      if (editor) {
        const newState = editor.parseEditorState(initialEditorState)
        editor.setEditorState(newState)
        editor.dispatchCommand(CLEAR_HISTORY_COMMAND, undefined)
      }
    },[id])
}

export default Editor