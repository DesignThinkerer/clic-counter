import Counter from './Counter';

describe('Counter Component', () => {
    let onIncrementMock, onDecrementMock;

    const renderCounter = (counter) => {
        return Counter({ onIncrement: onIncrementMock, onDecrement: onDecrementMock, counter });
    };

    const clickIncrementButton = (counterInstance) => {
        counterInstance.props.children[0].props.onClick();
    };

    const clickDecrementButton = (counterInstance) => {
        counterInstance.props.children[1].props.onClick();
    };

    beforeEach(() => {
        onIncrementMock = jest.fn();
        onDecrementMock = jest.fn();
    });

    it('should call onIncrement when increment is clicked', () => {
        const counterInstance = renderCounter(0);

        // Simuler le clic sur le bouton d'incrémentation
        clickIncrementButton(counterInstance);

        // Vérifier que la fonction onIncrement est appelée
        expect(onIncrementMock).toHaveBeenCalled();
    });

    it('should call onDecrement when decrement is clicked', () => {
        const counterInstance = renderCounter(5);

        // Simuler le clic sur le bouton de décrémentation
        clickDecrementButton(counterInstance);

        // Vérifier que la fonction onDecrement est appelée
        expect(onDecrementMock).toHaveBeenCalled();
    });

    it('should call onIncrement multiple times', () => {
        const counterInstance = renderCounter(0);

        // Simuler plusieurs clics sur le bouton d'incrémentation
        clickIncrementButton(counterInstance);
        clickIncrementButton(counterInstance);
        clickIncrementButton(counterInstance);

        // Vérifier que la fonction onIncrement est appelée trois fois
        expect(onIncrementMock).toHaveBeenCalledTimes(3);
    });

    it('should disable decrement button when counter is 0', () => {
        const counterInstance = renderCounter(0);

        // Vérifier que le bouton de décrémentation est désactivé lorsque le compteur est à 0
        const decrementButton = counterInstance.props.children[1];
        expect(decrementButton.props.disabled).toBe(true);
    });

    it('should not call onDecrement when counter is 0', () => {
        const counterInstance = renderCounter(0);

        // Vérifier que le bouton de décrémentation est désactivé lorsque le compteur est à 0
        const decrementButton = counterInstance.props.children[1];

        // Simuler le clic sur le bouton de décrémentation uniquement s'il n'est pas désactivé
        if (!decrementButton.props.disabled) {
            decrementButton.props.onClick();
        }


        // Vérifier que la fonction onDecrement n'est pas appelée
        expect(onDecrementMock).not.toHaveBeenCalled();
    });

    it('should not disable decrement button when counter is greater than 0', () => {
        const counterInstance = renderCounter(5);

        // Vérifier que le bouton de décrémentation n'est pas désactivé lorsque le compteur est supérieur à 0
        const decrementButton = counterInstance.props.children[1];
        expect(decrementButton.props.disabled).toBe(false);
    });
});
