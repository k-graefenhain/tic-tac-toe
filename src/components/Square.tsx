import React, {Component} from "react";

export interface SquareProps {
    value: number
}

export class Square extends Component<SquareProps, any> {
    constructor(props: SquareProps) {
        super(props);
    }

    render() {
        return (
            <button className="square">{this.props.value}</button>
        );
    }
}
