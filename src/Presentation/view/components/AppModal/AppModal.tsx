// const emit = defineEmits(['closed'])
import 'src/Presentation/view/components/AppModal/AppModal.scss';

interface Props {
    isShow: boolean
    title: string
    text?: string
    onClose: () => void
}

const AppModal = (props: Props) => {
    return props.isShow
        ? (
            // <transition name="fade">
            <div className="modal">
                <div className="modal__overlay"></div>

                <div className="modal__popup">
                    <button
                        type="button" className="modal__close" onClick={props.onClose}><span>&times;</span></button>

                    <div v-if="props.title" className="modal__title">{ props.title }</div>
                    <div v-if="props.text" className="modal__text">{ props.text }</div>

                    <button type="button" className="modal__btn btn" onClick={props.onClose}>OK</button>
                </div>
            </div>
        // </transition>
        )
        : null;
};

export default AppModal;
