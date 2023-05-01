import React, {Component} from "react";

export interface SquareProps {
    value: string
    onSquareClick: (e: React.MouseEvent) => void;
}

export class Square extends Component<SquareProps, any> {

    render() {
        return (
            <button
                className="square"
                onClick={this.props.onSquareClick}
            >
                {this.props.value}
            </button>
        );
    }
}
