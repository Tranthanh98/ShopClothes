import React from 'react';
import { deepCompare, shallowEqual } from '../../general/helper';

class BaseMUIComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    muiRender() {
        throw ("Must implemented");
    }

    render() {
        let { specialProps, ...otherProps } = this.props;
        let props = { ...otherProps, ...specialProps };
        return (
            this.muiRender(props)
        );
    }

    shouldComponentUpdate(nextProps, nextState) {
        let { specialProps, classes, ...otherProps } = this.props;
        let { specialProps: specialNextProps, classes: nextClasses, ...otherNextProps } = nextProps;

        let equal1 = shallowEqual(otherProps, otherNextProps) && shallowEqual(this.state, nextState);
        if (equal1 == false) {
            return true;
        }
        let equal2 = deepCompare({ ...specialProps, classes: classes }, { ...specialNextProps, classes: nextClasses });
        if (equal2 == false) {
            return true;
        }
        return false;
    }
}

export default BaseMUIComponent;