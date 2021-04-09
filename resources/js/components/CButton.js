import React from 'react';
class CButton extends React.Component {
    render() {
        const { 
            variant,
            content,
            ...others
        } = this.props;
        
        return (            
            <button className={variant} {...others}>
                {content}
            </button>
        )
    }
}

export default CButton;