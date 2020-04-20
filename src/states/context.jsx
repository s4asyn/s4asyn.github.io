import React, { Component } from 'react';
const { Provider, Consumer } = React.createContext();

class ContextProvider extends Component {
    state = {
        language: 'fa',
    };

    toggleLanguage = () => {
        this.setState((prevState) => {
            return {
                language: prevState.language === 'fa' ? 'en' : 'fa',
            };
        });
    };

    render() {
        return (
            <Provider
                value={{
                    language: this.state.language,
                    toggleLanguage: this.toggleLanguage,
                }}
            >
                {this.props.children}
            </Provider>
        );
    }
}

export { ContextProvider, Consumer as ContextConsumer };
