import React, { Component } from 'react';
const { Provider, Consumer } = React.createContext();

class ContextProvider extends Component {
    state = {
        language: 'fa_IR',
        theme: 'light',
    };

    toggleLanguage = () => {
        this.setState((prevState) => {
            return {
                language: prevState.language === 'fa_IR' ? 'en_US' : 'fa_IR',
            };
        });
    };
    toggleTheme = () => {
        this.setState((prevState) => {
            return {
                theme: prevState.theme === 'light' ? 'dark' : 'light',
            };
        });
    };
    render() {
        return (
            <Provider
                value={{
                    language: this.state.language,
                    toggleLanguage: this.toggleLanguage,
                    theme: this.state.theme,
                    toggleTheme: this.toggleTheme,
                }}
            >
                {this.props.children}
            </Provider>
        );
    }
}

export { ContextProvider, Consumer as ContextConsumer };
