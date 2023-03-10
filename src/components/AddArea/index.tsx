import { useState } from 'react';
import * as C from './styles';

type Props = {
    onEnter: (taskName: string) => void;
}

function AddArea({ onEnter }: Props) {

    const [inputText, setInputText] = useState('');

    const handleKeyUp = (e: KeyboardEvent) => {
        if ((e.code === 'Enter' || e.code === 'NumpadEnter') && inputText !== '') {
            onEnter(inputText);
            setInputText('');
        }
    }

    return (
        <C.Container>
            <div className="image">➕</div>
            <input
                type="text"
                placeholder='Adicionar tarefa'
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                onKeyUp={(e) => handleKeyUp(e.nativeEvent)}
            />
        </C.Container>
    );
}

export default AddArea;
