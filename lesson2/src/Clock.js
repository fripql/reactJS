import React, { Component } from 'react'

class Clock extends React.Component {
    myStyle = {
        width: 75,
        height: 20
    };

    render() {
        let dtStr = new Date();

        return <div>
            <h1>Лекция 2.</h1>
            <h2>
                Открылось в: {' '} {dtStr.toLocaleTimeString()}
            </h2>
            <button style={this.myStyle}
                    onClick={
                        function() {
                            let now = new Date();
                            let offset = now.getTimezoneOffset();
                            alert('С открытия страницы прошло: ' + new Date(now - offset - dtStr - 3 * 60 * 60 * 1000/*вычитается разница по таймзоне */ ).toLocaleTimeString());
                        }
                    }>
                {this.props.name}
            </button>
        </div>;
    }
}

ReactDOM.render(
    <Clock name="Разница"/>,
    document.getElementById('top')
);