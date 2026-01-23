import Popup from 'reactjs-popup';
import FormPostagem from '../formpostagem/FormPostagem';

import 'reactjs-popup/dist/index.css';

function ModalPostagem() {
    return (
        <>
            <Popup
                trigger={
                    <button 
                        className='rounded-xl text-white bg-gradient-to-r from-indigo-600 to-purple-600
                                   hover:from-indigo-700 hover:to-purple-700 px-6 py-3
                                   flex items-center justify-center gap-2
                                   transition-all duration-300 hover:scale-[1.02]
                                   shadow-lg hover:shadow-xl font-semibold'>
                        ✨ Nova Postagem
                    </button>
                }
                modal
            >
                <FormPostagem />
            </Popup>
        </>
    );
}

export default ModalPostagem;
