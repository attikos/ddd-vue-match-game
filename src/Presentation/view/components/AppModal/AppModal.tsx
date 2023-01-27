// const emit = defineEmits(['closed'])
import 'src/Presentation/view/components/AppModal/AppModal.scss';

interface Props {
    isShow: boolean
    title: string
    text: string
}

const AppModal = (props: Props) => {

    function onClose() {
        // emit('closed');
    }

    return (
        // <Teleport to="body">
    // <transition name="fade">
        <div v-if="props.isShow" className="modal">
            <div className="modal__overlay"></div>

            <div className="modal__popup">
                <button
                    type="button" className="modal__close" onClick={onClose}><span>&times;</span></button>

                <div v-if="props.title" className="modal__title">{ props.title }</div>
                <div v-if="props.text" className="modal__text">{ props.text }</div>

                <button type="button" className="modal__btn btn" onClick={onClose}>OK</button>
            </div>
        </div>
    // </transition>
        // </Teleport>
    )
};

export default AppModal;
